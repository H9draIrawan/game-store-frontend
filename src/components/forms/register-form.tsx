import { LockOutlined } from "@mui/icons-material";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import {
	Box,
	Button,
	Container,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Form, NavLink, useActionData } from "react-router-dom";

function RegisterForm() {
	const actionData = useActionData();
	const [role, setRole] = useState("");

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

						{/* Button Role */}
						<Box
							sx={{
								margin: "1rem 0",
								display: "flex",
								gap: 1,
								backgroundColor: "#120b24",
								padding: "6px",
								borderRadius: "24px",
								border: "1px solid #2d1a4d",
							}}
						>
							<Box
								component="button"
								onClick={() => setRole("customer")}
								type="button"
								name="role"
								value="customer"
								sx={{
									flex: 1,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 1.5,
									padding: "12px 24px",
									borderRadius: "18px",
									border: "none",
									backgroundColor:
										role === "customer" ? "#6d28d9" : "transparent",
									color: role === "customer" ? "#ffffff" : "#a78bfa",
									cursor: "pointer",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									boxShadow:
										role === "customer"
											? "0px 4px 16px rgba(109, 40, 217, 0.45)"
											: "none",
									"&:hover": {
										backgroundColor:
											role === "customer"
												? "#5b21b6"
												: "rgba(167, 139, 250, 0.08)",
										color: role === "customer" ? "#ffffff" : "#c084fc",
									},
								}}
							>
								<PersonIcon fontSize="small" />
								<Typography sx={{ fontWeight: 600 }}>Customer</Typography>
							</Box>

							<Box
								component="button"
								onClick={() => setRole("developer")}
								type="button"
								name="role"
								value="developer"
								sx={{
									flex: 1,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 1.5,
									padding: "12px 24px",
									borderRadius: "18px",
									border: "none",
									backgroundColor:
										role === "developer" ? "#6d28d9" : "transparent",
									color: role === "developer" ? "#ffffff" : "#a78bfa",
									cursor: "pointer",
									transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
									boxShadow:
										role === "developer"
											? "0px 4px 16px rgba(109, 40, 217, 0.45)"
											: "none",
									"&:hover": {
										backgroundColor:
											role === "developer"
												? "#5b21b6"
												: "rgba(167, 139, 250, 0.08)",
										color: role === "developer" ? "#ffffff" : "#c084fc",
									},
								}}
							>
								<CodeIcon fontSize="small" />
								<Typography sx={{ fontWeight: 600 }}>Developer</Typography>
							</Box>
						</Box>

						{/* Hidden input untuk submit role */}
						<input type="hidden" name="role" value={role} />
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
							Sign Up
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
					</Form>
				</Paper>
			</Container>
		</Box>
	);
}

export default RegisterForm;
