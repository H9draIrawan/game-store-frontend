import { LockOutlined } from "@mui/icons-material";
import {
	Box,
	Button,
	Container,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useActionState } from "react";
import { NavLink } from "react-router-dom";

function RegisterForm() {
	async function registerUser(_previousState: any, formData: FormData) {
		const email = formData.get("email");
		const password = formData.get("password");
		const fullname = formData.get("fullname");
		const username = formData.get("username");

		if (!email || !password || !fullname || !username) {
			return {
				success: false,
				message: "All fields are required",
				values: { email, password, fullname, username },
			};
		}

		return {
			success: true,
			message: `Account created successfully`,
			values: { email: "", password: "", fullname: "", username: "" },
		};
	}
	const [state, formAction, isPending] = useActionState(registerUser, {
		success: false,
		message: "",
		values: { email: "", password: "", fullname: "", username: "" },
	});
	return (
		<Box
			sx={{
				backgroundColor: "#120321",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Container component="main" maxWidth="xs">
				<Paper
					elevation={12} // Dinaikkan agar shadow lebih halus di background gelap
					sx={{
						padding: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: 4,
						backgroundColor: "#1d0b3a",
						color: "#fff",
						border: `1px solid rgba(157, 78, 223, 0.15)`, // Border tipis transparan agar lebih estetik
					}}
				>
					{/* Ikon Kunci di bagian atas */}
					<Box
						sx={{
							p: 2,
							my: 2,
							color: "#fff",
							backgroundColor: "#9d4edf",
							borderRadius: "50%",
							display: "flex",
							boxShadow: `0px 0px 15px #9d4edf`, // Efek glow/bercahaya pada ikon
						}}
					>
						<LockOutlined fontSize="large" />
					</Box>

					<Typography
						variant="h4"
						gutterBottom
						sx={{
							textTransform: "uppercase",
							fontWeight: "bold",
							letterSpacing: 1,
						}}
					>
						Register
					</Typography>

					{/* Form */}
					<Box
						component="form"
						sx={{ mt: 1, width: "100%" }}
						action={formAction}
						noValidate
					>
						{/* Custom styling untuk TextField di Dark Mode */}
						<TextField
							margin="normal"
							required
							fullWidth
							label="Email"
							name="email"
							variant="filled"
							sx={{
								backgroundColor: "rgba(255, 255, 255, 0.05)",
								borderRadius: 1,
								"& .MuiInputLabel-root": { color: "#b39ddb" },
								"& .MuiInputLabel-root.Mui-focused": { color: "#9d4edf" },
								"& .MuiFilledInput-root": { color: "#fff" },
								"& .MuiFilledInput-root:before": {
									borderBottomColor: "rgba(255, 255, 255, 0.3)",
								},
								"& .MuiFilledInput-root:after": {
									borderBottomColor: "#9d4edf",
								},
								"& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
									borderBottomColor: "#fff",
								},
							}}
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							label="Fullname"
							name="fullname"
							variant="filled"
							sx={{
								backgroundColor: "rgba(255, 255, 255, 0.05)",
								borderRadius: 1,
								"& .MuiInputLabel-root": { color: "#b39ddb" },
								"& .MuiInputLabel-root.Mui-focused": { color: "#9d4edf" },
								"& .MuiFilledInput-root": { color: "#fff" },
								"& .MuiFilledInput-root:before": {
									borderBottomColor: "rgba(255, 255, 255, 0.3)",
								},
								"& .MuiFilledInput-root:after": {
									borderBottomColor: "#9d4edf",
								},
								"& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
									borderBottomColor: "#fff",
								},
							}}
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							label="Username"
							name="username"
							variant="filled"
							sx={{
								backgroundColor: "rgba(255, 255, 255, 0.05)",
								borderRadius: 1,
								"& .MuiInputLabel-root": { color: "#b39ddb" },
								"& .MuiInputLabel-root.Mui-focused": { color: "#9d4edf" },
								"& .MuiFilledInput-root": { color: "#fff" },
								"& .MuiFilledInput-root:before": {
									borderBottomColor: "rgba(255, 255, 255, 0.3)",
								},
								"& .MuiFilledInput-root:after": {
									borderBottomColor: "#9d4edf",
								},
								"& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
									borderBottomColor: "#fff",
								},
							}}
						/>

						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							variant="filled"
							sx={{
								backgroundColor: "rgba(255, 255, 255, 0.05)",
								borderRadius: 1,
								"& .MuiInputLabel-root": { color: "#b39ddb" },
								"& .MuiInputLabel-root.Mui-focused": { color: "#9d4edf" },
								"& .MuiFilledInput-root": { color: "#fff" },
								"& .MuiFilledInput-root:before": {
									borderBottomColor: "rgba(255, 255, 255, 0.3)",
								},
								"& .MuiFilledInput-root:after": {
									borderBottomColor: "#9d4edf",
								},
								"& .MuiFilledInput-root:hover:not(.Mui-disabled):before": {
									borderBottomColor: "#fff",
								},
							}}
						/>

						{/* Tombol Submit */}
						<Button
							disabled={isPending}
							type="submit"
							variant="contained"
							size="large"
							fullWidth
							sx={{
								my: 3,
								fontWeight: "bold",
								textAlign: "center",
								backgroundColor: "#9d4edf",
								"&:hover": {
									backgroundColor: "#7b2cbf",
								},
								textTransform: "none",
								borderRadius: 2,
								boxShadow: `0px 4px 10px rgba(157, 78, 223, 0.3)`,
							}}
						>
							{isPending ? "Loading..." : "Sign Up"}
						</Button>

						{state && (
							<Typography
								style={{
									color: state.success ? "green" : "red",
									textAlign: "center",
								}}
							>
								{state.message}
							</Typography>
						)}
						{/* Link Tambahan */}
						<Box
							sx={{
								textAlign: "center",
							}}
						>
							<Typography
								variant="body2"
								sx={{
									textAlign: "center",
									color: "#b39ddb",
									display: "inline-block",
								}}
							>
								Already have an account?
							</Typography>
							<NavLink to="/login">Sign In</NavLink>
						</Box>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}

export default RegisterForm;
