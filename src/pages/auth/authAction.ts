import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { loginUser } from "../../api/auth";

export async function actionRegister() {}
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
