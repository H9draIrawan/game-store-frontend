import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import SecurityIcon from "@mui/icons-material/Security";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

function About() {
	// Expanded core features (4 Pillars of the Game Store)
	const features = [
		{
			icon: (
				<LocalFireDepartmentIcon fontSize="large" sx={{ color: "#c084fc" }} />
			),
			title: "Instant Delivery",
			desc: "No waiting lines. Get your CD-keys, digital codes, or game activation links delivered to your dashboard instantly post-purchase.",
		},
		{
			icon: <SecurityIcon fontSize="large" sx={{ color: "#c084fc" }} />,
			title: "100% Certified Safe",
			desc: "Shop with absolute peace of mind. Every single product is sourced directly from official publishers—guaranteed virus-free and legal.",
		},
		{
			icon: <PriceCheckIcon fontSize="large" sx={{ color: "#c084fc" }} />,
			title: "Unbeatable Deals",
			desc: "We battle high prices daily. Enjoy publisher sales, flash discounts, and loyalty reward points that actually save you real money.",
		},
		{
			icon: <SportsEsportsIcon fontSize="large" sx={{ color: "#c084fc" }} />,
			title: "Infinite Library",
			desc: "From massive AAA open-world blockbusters to hidden indie masterpieces, we curate a catalog spanning across PC, Console, and Mobile.",
		},
	];

	const stats = [
		{
			value: "5M+",
			label: "Active Gamers",
			icon: <SportsEsportsIcon fontSize="large" color="secondary" />,
		},
		{
			value: "12K+",
			label: "Games Available",
			icon: <LocalFireDepartmentIcon fontSize="large" color="secondary" />,
		},
		{
			value: "99.9%",
			label: "Satisfaction Rate",
			icon: <PriceCheckIcon fontSize="large" color="secondary" />,
		},
		{
			value: "24/7",
			label: "Live Support",
			icon: <SecurityIcon fontSize="large" color="secondary" />,
		},
	];

	return (
		<Box
			id="about"
			sx={{ py: { xs: 8, md: 14 }, bgcolor: "#0f0a1c", color: "#f3f4f6" }}
		>
			<Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
				{/* HEADER SECTION */}
				<Typography
					variant="h2"
					gutterBottom
					sx={{
						fontSize: { xs: "2.5rem", md: "4.5rem" },
						textAlign: "center",
						fontWeight: 900,
						letterSpacing: "-0.05em",
						mb: 1,
						background: "linear-gradient(to right, #e9d5ff, #a855f7, #f43f5e)",
						WebkitBackgroundClip: "text",
						WebkitTextFillColor: "transparent",
					}}
				>
					LEVEL UP YOUR GAMING
				</Typography>

				<Typography
					variant="subtitle1"
					sx={{
						textAlign: "center",
						color: "#a855f7",
						fontWeight: 700,
						textTransform: "uppercase",
						letterSpacing: "3px",
						mb: 6,
					}}
				>
					Your Ultimate Digital Gaming Hub
				</Typography>

				{/* SECTION 1: WHO WE ARE (SPLIT LAYOUT) */}
				<Grid container spacing={4} sx={{ mb: 4 }}>
					<Grid>
						<Typography
							variant="h4"
							sx={{
								fontWeight: 800,
								mb: 2,
								color: "#f3f4f6",
								textAlign: "center",
							}}
						>
							Built by Gamers, For Gamers
						</Typography>
						<Typography
							variant="body1"
							sx={{
								color: "#94a3b8",
								lineHeight: 1.8,
								mb: 2,
								textAlign: "center",
							}}
						>
							Founded with a rogue vision to strip away overpriced markups and
							sluggish delivery times, we have evolved into a trusted global
							sanctuary for millions of players. We don't just sell games; we
							live them. Whether you are searching for day-one global releases,
							nostalgic retro classics, or competitive top-up vouchers, we
							bridge the gap between you and your next virtual obsession. Our
							engineering team continuously optimizes our secure transaction
							architecture, ensuring that your digital keys hit your screen
							before your hype cools down. Welcome to the evolution of game
							shopping.
						</Typography>
						<Typography
							variant="body1"
							sx={{ color: "#94a3b8", lineHeight: 1.8, textAlign: "center" }}
						></Typography>
					</Grid>
				</Grid>
				<Grid
					container
					spacing={6} // Mengatur jarak antar kotak stats otomatis secara responsive
					sx={{
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
						mb: 8,
					}}
				>
					{stats.map((stat, i) => (
						<Grid
							key={i}
							sx={{
								py: 2,
								px: 1,
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								gap: 1,
							}}
						>
							<Typography
								variant="h4"
								sx={{
									fontWeight: 900,
									color: "#f43f5e",
									fontSize: { xs: "1.75rem", md: "2.25rem" }, // Responsif agar tidak pecah di layar HP kecil
								}}
							>
								{stat.value}
							</Typography>

							<Typography
								variant="body2"
								sx={{ color: "#cbd5e1", fontWeight: 500, mb: 0.5 }}
							>
								{stat.label}
							</Typography>
							{stat.icon && (
								<Box
									sx={{
										color: "rgba(168, 85, 247, 0.6)",
										display: "flex",
										mt: 0.5,
									}}
								>
									{stat.icon}
								</Box>
							)}
						</Grid>
					))}
				</Grid>

				{/* SECTION 2: THE FOUR PILLARS (EXPANDED GRID) */}
				<Typography
					variant="h4"
					sx={{ textAlign: "center", fontWeight: 800, mb: 6, color: "#f3f4f6" }}
				>
					Why Choose Our Store?
				</Typography>

				<Grid
					container
					spacing={3}
					sx={{
						justifyContent: "center",
						alignItems: "center",
						textAlign: "center",
					}}
				>
					{features.map((item, index) => (
						<Grid key={index}>
							<Paper
								sx={{
									p: 3,
									width: "15rem",
									display: "flex",
									flexDirection: "column",
									borderRadius: 4,
									backgroundColor: "rgba(30, 21, 49, 0.5)",
									backdropFilter: "blur(12px)",
									border: "1px solid rgba(168, 85, 247, 0.15)",
									transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
									"&:hover": {
										transform: "translateY(-8px) scale(1.02)",
										boxShadow: "0 20px 40px rgba(168, 85, 247, 0.2)",
										borderColor: "rgba(168, 85, 247, 0.5)",
										backgroundColor: "rgba(38, 26, 62, 0.8)",
									},
								}}
							>
								{/* Pembungkus Ikon (Akan otomatis rapi di kiri atas kartu) */}
								<Box
									sx={{
										mb: 2.5,
										display: "inline-flex",
										alignSelf: "center",
										p: 1.5,
										borderRadius: "12px",
										backgroundColor: "rgba(168, 85, 247, 0.12)",
									}}
								>
									{item.icon}
								</Box>

								<Typography
									variant="h6"
									gutterBottom
									sx={{
										fontWeight: 800,
										color: "#f3f4f6",
										fontSize: "1.15rem",
									}}
								>
									{item.title}
								</Typography>

								<Typography
									variant="body2"
									sx={{
										color: "#94a3b8",
										lineHeight: 1.6,
										flexGrow: 1,
									}}
								>
									{item.desc}
								</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}

export default About;
