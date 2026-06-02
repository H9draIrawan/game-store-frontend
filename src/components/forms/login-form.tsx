import { LockOutlined } from "@mui/icons-material";
import {
	Box,
	Button,
	Checkbox,
	Container,
	Divider,
	FormControlLabel,
	Link,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { Form, NavLink, useActionData } from "react-router-dom";

function LoginForm() {
	const actionData = useActionData();

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
					elevation={12}
					sx={{
						padding: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: 4,
						backgroundColor: "#1d0b3a",
						color: "#fff",
						border: `1px solid rgba(157, 78, 223, 0.15)`,
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
							boxShadow: `0px 0px 15px #9d4edf`,
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
						Login
					</Typography>

					{/* Form */}
					<Form method="POST" noValidate>
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

						{/* Remember Me Checkbox */}
						<FormControlLabel
							control={
								<Checkbox
									value={"rememberMe"}
									sx={{
										color: "#b39ddb",
										"&.Mui-checked": { color: "#9d4edf" },
									}}
								/>
							}
							label="Remember me"
							name="rememberMe"
							sx={{ mt: 1, display: "block", color: "#b39ddb" }}
						/>

						{/* Tombol Submit */}
						<Button
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
							Login
						</Button>

						{actionData?.error && (
							<Typography
								sx={{
									color: "red",
									textAlign: "center",
								}}
							>
								{actionData?.error}
							</Typography>
						)}

						{/* Link Navigasi */}
						<Box>
							<Link
								href="#"
								variant="body2"
								underline="hover"
								sx={{
									textAlign: "center",
									display: "block",
									my: 2,
									color: "#b39ddb",
								}}
							>
								Forgot password?
							</Link>

							<Divider
								sx={{
									color: "#b39ddb",
									"&::before, &::after": {
										borderColor: "rgba(255, 255, 255, 0.1)",
									},
								}}
							>
								OR
							</Divider>
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
									Don&apos;t have an account?
								</Typography>
								<NavLink to="/register">Sign Up</NavLink>
							</Box>
						</Box>
					</Form>
				</Paper>
			</Container>
		</Box>
	);
}

export default LoginForm;
