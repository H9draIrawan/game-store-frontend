import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function Home() {
	return (
		<Box
			id="home"
			sx={{
				position: "relative",
				// Gradient background bertema gaming (gelap dengan aksen ungu/biru)
				background:
					"linear-gradient(135deg, #0f0c1b 0%, #201335 50%, #0f0c1b 100%)",
				minHeight: "85vh",
				display: "flex",
				alignItems: "center",
				overflow: "hidden",
				color: "#fff",
				"&::before": {
					content: '""',
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					// Efek grid siber di latar belakang
					backgroundImage:
						"radial-gradient(rgba(147, 51, 234, 0.15) 1px, transparent 0)",
					backgroundSize: "24px 24px",
					pointerEvents: "none",
				},
			}}
		>
			<Container sx={{ position: "relative", zIndex: 2 }}>
				<Stack spacing={4}>
					{/* Badge Kecil Teratas */}
					<Stack
						direction="row"
						sx={{
							backgroundColor: "rgba(147, 51, 234, 0.2)",
							padding: "6px 16px",
							borderRadius: "50px",
							border: "1px solid rgba(147, 51, 234, 0.5)",
							width: "fit-content",
						}}
					>
						<SportsEsportsIcon sx={{ color: "#a855f7", fontSize: 20 }} />
						<Typography
							variant="caption"
							sx={{ color: "#d8b4fe", fontWeight: "bold", letterSpacing: 1 }}
						>
							NEW SEASON SALE IS LIVE
						</Typography>
					</Stack>

					{/* Judul Utama dengan Gradasi */}
					<Typography
						variant="h1"
						component="h1"
						sx={{
							fontWeight: 800,
							fontSize: { xs: "2.8rem", sm: "4rem", md: "5rem" },
							lineHeight: 1.1,
							background: "linear-gradient(to right, #fff 30%, #c084fc 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						Level Up Your <br />
						<span style={{ color: "#a855f7", WebkitTextFillColor: "initial" }}>
							Gaming
						</span>{" "}
						Experience
					</Typography>

					{/* Sub-judul / Deskripsi */}
					<Typography
						variant="h5"
						sx={{
							color: "#94a3b8",

							fontWeight: 400,
							fontSize: { xs: "1.1rem", md: "1.3rem" },
							lineHeight: 1.6,
						}}
					>
						Discover thousands of digital games, from indie masterpieces to AAA
						blockbusters. Instant delivery, best prices.
					</Typography>

					{/* Tombol Aksi (Call to Action) */}
					<Stack
						direction={{ xs: "column", sm: "row" }}
						spacing={2}
						sx={{ width: { xs: "100%", sm: "auto" }, pt: 2 }}
					>
						<Button
							variant="contained"
							size="large"
							startIcon={<ShoppingCartIcon />}
							sx={{
								backgroundColor: "#a855f7",
								backgroundImage:
									"linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
								px: 4,
								py: 1.5,
								fontSize: "1rem",
								fontWeight: "bold",
								borderRadius: "8px",
								boxShadow: "0 4px 20px rgba(168, 85, 247, 0.4)",
								"&:hover": {
									backgroundColor: "#9333ea",
									boxShadow: "0 6px 24px rgba(168, 85, 247, 0.6)",
								},
							}}
						>
							Browse Store
						</Button>
						<Button
							variant="outlined"
							size="large"
							sx={{
								color: "#fff",
								borderColor: "rgba(255,255,255,0.3)",
								px: 4,
								py: 1.5,
								fontSize: "1rem",
								fontWeight: "bold",
								borderRadius: "8px",
								backdropFilter: "blur(4px)",
								"&:hover": {
									borderColor: "#fff",
									backgroundColor: "rgba(255,255,255,0.05)",
								},
							}}
						>
							Learn More
						</Button>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}

export default Home;
