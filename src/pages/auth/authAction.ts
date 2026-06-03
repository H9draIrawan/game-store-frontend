import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { loginUser, registerUser } from "../../api/auth";

export async function actionRegister({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const fullname = formData.get("fullname")?.toString();
	const username = formData.get("username")?.toString();
	const password = formData.get("password")?.toString();
	const role = formData.get("role")?.toString();

	if (!email || !fullname || !username || !password || !role) {
		return {
			error: "All fields are required",
		};
	}

	const response = await registerUser(
		email,
		fullname,
		username,
		password,
		role,
	);
	const data = await response.json();

	if (!response.ok) {
		if (response.status == 500) {
			throw new Error(data.message);
		}
		return {
			error: data.message,
		};
	}

	return redirect("/login");
}
export async function actionLogin({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const email = formData.get("email")?.toString();
	const password = formData.get("password")?.toString();
	const rememberMe = formData.get("rememberMe")?.toString();

	if (!email || !password) {
		return {
			error: "All fields are required",
		};
	}

	const response = await loginUser(
		email,
		password,
		rememberMe === "rememberMe",
	);
	const data = await response.json();

	if (!response.ok) {
		if (response.status == 500) {
			throw new Error(data.message);
		}
		return {
			error: data.message,
		};
	}

	const setCookie = data.session;
	console.log(setCookie);
	return redirect("/app", {
		headers: setCookie ? { "Set-Cookie": setCookie } : undefined,
	});
}
