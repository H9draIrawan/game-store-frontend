export async function loginUser(
	email: string,
	password: string,
	rememberMe: boolean,
) {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/auth/login`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify({ email, password, rememberMe }),
		},
	);

	return response;
}
export async function registerUser(
	email: string,
	fullname: string,
	username: string,
	password: string,
	role: string,
) {
	const response = await fetch(
		`${import.meta.env.VITE_API_URL}/api/auth/register`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, fullname, username, password, role }),
		},
	);

	return response;
}

export async function resendActivation() {}
export async function activationUser() {}

export async function forgotPassword() {}
export async function resetPassword() {}

export async function checkSession() {
	const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
		method: "GET",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		return null;
	}

	return response;
}
