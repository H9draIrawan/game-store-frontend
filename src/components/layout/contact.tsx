import {
	Box,
	Button,
	Container,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

function Contact() {
	// Style berulang untuk mempermudah pewarnaan input agar bernuansa dark purple neon
	const textFieldStyle = {
		"& .MuiInputLabel-root": {
			color: "#94a3b8", // Warna label teks default (abu-abu keunguan)
		},
		"& .MuiInputLabel-root.Mui-focused": {
			color: "#f43f5e", // Warna label teks saat diklik (pink neon)
		},
		"& .MuiOutlinedInput-root": {
			color: "#f3f4f6", // Warna teks inputan user
			backgroundColor: "rgba(15, 10, 28, 0.4)", // Background input gelap transparan
			transition: "all 0.3s ease",
			"& fieldset": {
				borderColor: "rgba(168, 85, 247, 0.3)", // Border default ungu tipis
				borderRadius: "10px",
			},
			"&:hover fieldset": {
				borderColor: "rgba(168, 85, 247, 0.8)", // Border saat di-hover lebih menyala
			},
			"&.Mui-focused fieldset": {
				borderColor: "#f43f5e", // Border saat diklik berubah jadi pink neon
				boxShadow: "0 0 12px rgba(244, 63, 94, 0.3)", // Efek glow neon pada inputbox
			},
		},
	};

	return (
		// Background utama mengikuti kontinuitas tema seksi sebelumnya (#0f0a1c)
		<Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: "#0f0a1c" }}>
			<Container maxWidth="sm">
				<Paper
					sx={{
						p: { xs: 4, md: 6 },
						borderRadius: 5,
						backgroundColor: "rgba(30, 21, 49, 0.5)",
						backdropFilter: "blur(12px)",
						border: "1px solid rgba(168, 85, 247, 0.15)",
						boxShadow: "0 20px 50px rgba(15, 10, 28, 0.5)",
					}}
				>
					<Typography
						variant="h4"
						component="h2"
						gutterBottom
						sx={{
							fontWeight: 900,
							color: "#f3f4f6",
							textAlign: "center",
							letterSpacing: "-0.03em",
						}}
					>
						CONTACT US
					</Typography>
					<Typography
						variant="body2"
						sx={{
							mb: 5,
							color: "#94a3b8",
							lineHeight: 1.6,
							textAlign: "center",
						}}
					>
						Have a question or suggestion? We'd love to hear from you!
					</Typography>

					<form onSubmit={(e) => e.preventDefault()}>
						<Stack spacing={3}>
							<TextField
								label="Full Name"
								name="name"
								required
								fullWidth
								variant="outlined"
								sx={textFieldStyle}
							/>
							<TextField
								label="Email Address"
								name="email"
								type="email"
								required
								fullWidth
								variant="outlined"
								sx={textFieldStyle}
							/>
							<TextField
								label="Message"
								name="message"
								required
								fullWidth
								multiline
								rows={4}
								variant="outlined"
								sx={textFieldStyle}
							/>
							<Button
								type="submit"
								variant="contained"
								size="large"
								sx={{
									py: 1.5,
									borderRadius: 2.5,
									fontWeight: 700,
									textTransform: "none",
									fontSize: "1rem",
									backgroundImage:
										"linear-gradient(135deg, #a855f7 0%, #f43f5e 100%)",
									color: "#ffffff",
									transition: "all 0.3s ease",
									"&:hover": {
										transform: "translateY(-2px)",
										boxShadow: "0 8px 24px rgba(244, 63, 94, 0.4)",
										backgroundImage:
											"linear-gradient(135deg, #bc77ff 0%, #ff5776 100%)",
									},
								}}
							>
								Send Message
							</Button>
						</Stack>
					</form>
				</Paper>
			</Container>
		</Box>
	);
}

export default Contact;
