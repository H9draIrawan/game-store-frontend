import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Grid,
	Typography,
} from "@mui/material";

function Products() {
	const itemProduct = [
		{
			name: "Cyberpunk 2077: Phantom Liberty",
			price: "$29.99",
			category: "Action RPG",
			feature:
				"Return as cyber-enhanced mercenary V. Complete high-stakes espionage missions to save the NUSA president.",
		},
		{
			name: "Elden Ring: Shadow of the Erdtree",
			price: "$39.99",
			category: "Souls-like Adventure",
			feature:
				" deconstruct the mysteries of the Land of Shadow. Face brutal bosses and discover legendary weapons.",
		},
		{
			name: "Hades II (Early Access)",
			price: "$24.99",
			category: "Rogue-like Dungeon",
			feature:
				"Battle beyond the Underworld using dark sorcery to take down the Titan of Time in this bewitching sequel.",
		},
	];

	return (
		<Box
			id="products"
			sx={{ py: { xs: 8, md: 12 }, bgcolor: "#0f0a1cf2", color: "#f3f4f6" }}
		>
			<Container maxWidth={false}>
				<Typography
					variant="h3"
					gutterBottom
					sx={{
						fontWeight: 900,
						color: "#f3f4f6",
						background: "linear-gradient(to right, #f3f4f6, #a855f7)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
						textAlign: "center",
					}}
				>
					Trending Deals
				</Typography>
				<Typography
					variant="h5"
					gutterBottom
					sx={{
						mb: 8,
						color: "#94a3b8",
						lineHeight: 1.6,
						textAlign: "center",
					}}
				>
					Grab the hottest global releases and award-winning expansions at
					unbeatable prices. Digital activation codes sent instantly.
				</Typography>

				<Grid container spacing={4} sx={{ justifyContent: "center" }}>
					{itemProduct.map((item, index) => (
						<Grid key={index}>
							<Card
								sx={{
									display: "flex",
									width: "20rem",
									flexDirection: "column",
									justifyContent: "space-between",
									borderRadius: 4,
									backgroundColor: "rgba(30, 21, 49, 0.5)",
									backdropFilter: "blur(12px)",
									border: "1px solid rgba(168, 85, 247, 0.15)",
									transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
									"&:hover": {
										transform: "translateY(-12px)",
										boxShadow: "0 20px 40px rgba(244, 63, 94, 0.25)",
										borderColor: "rgba(244, 63, 94, 0.6)",
										backgroundColor: "rgba(38, 26, 62, 0.7)",
									},
								}}
							>
								<CardContent sx={{ flexGrow: 1, p: 4 }}>
									{/* Kategori Game */}
									<Typography
										variant="caption"
										sx={{
											color: "#f43f5e",
											fontWeight: 700,
											textTransform: "uppercase",
											letterSpacing: "1px",
											display: "block",
											mb: 1,
										}}
									>
										{item.category}
									</Typography>

									{/* Judul Game */}
									<Typography
										variant="h5"
										component="div"
										gutterBottom
										sx={{
											fontWeight: 800,
											color: "#f3f4f6",
											lineHeight: 1.3,
											mb: 1.5,
										}}
									>
										{item.name}
									</Typography>

									{/* Harga Game */}
									<Typography
										variant="h6"
										sx={{
											mb: 2,
											// Gradasi warna ungu ke pink cerah untuk tag harga
											backgroundImage:
												"linear-gradient(135deg, #c084fc 0%, #f43f5e 100%)",
											backgroundClip: "text",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											fontWeight: 800,
											fontSize: "1.4rem",
										}}
									>
										{item.price}
									</Typography>

									{/* Deskripsi Fitur/Sinopsis Game */}
									<Typography
										variant="body2"
										sx={{ color: "#cbd5e1", lineHeight: 1.6 }}
									>
										{item.feature}
									</Typography>
								</CardContent>

								<CardActions sx={{ p: 4, pt: 0 }}>
									<Button
										variant="contained"
										fullWidth
										sx={{
											borderRadius: 2.5,
											py: 1.2,
											// Tombol menggunakan gradasi warna ungu cyberpunk
											backgroundImage:
												"linear-gradient(135deg, #a855f7 0%, #f43f5e 100%)",
											color: "#ffffff",
											fontWeight: 700,
											textTransform: "none",
											fontSize: "0.95rem",
											transition: "all 0.3s ease",
											"&:hover": {
												transform: "translateY(-2px)",
												boxShadow: "0 8px 24px rgba(244, 63, 94, 0.4)",
												backgroundImage:
													"linear-gradient(135deg, #bc77ff 0%, #ff5776 100%)", // Warna sedikit lebih terang saat di-hover
											},
										}}
									>
										Buy Now
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}

export default Products;
