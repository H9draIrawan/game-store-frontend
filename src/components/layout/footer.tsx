import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Container, Grid, Link, Stack, Typography } from "@mui/material";

function Footer() {
	const currentYear = new Date().getFullYear();

	const footerLinks = [
		{
			title: "Storefront",
			links: ["PC Games", "Console Keys", "Mobile Top-Up", "Gift Cards"],
		},
		{
			title: "Community",
			links: [
				"Gaming Blog",
				"Esports Hub",
				"Affiliate Program",
				"Developer Portal",
			],
		},
		{
			title: "Support",
			links: ["Help Center", "Redeem Code", "Refund Policy", "Server Status"],
		},
		{
			title: "Corporate",
			links: ["About Us", "Careers", "Press Kit", "Contact Sales"],
		},
	];

	return (
		<Box
			sx={{
				// Background disetel ke Deep Cyber Purple pekat agar menutup halaman dengan sempurna
				backgroundColor: "#0a0614",
				borderTop: "1px solid rgba(168, 85, 247, 0.2)", // Garis batas atas ungu tipis
				color: "#f3f4f6",
				py: { xs: 8, md: 10 },
			}}
		>
			<Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
				<Grid container spacing={4} sx={{ mb: 8 }}>
					{/* Brand Section (Lebih lebar agar deskripsi muat sempurna) */}
					<Grid>
						<Stack spacing={2.5}>
							<Typography
								variant="h5"
								sx={{
									fontWeight: 900,
									letterSpacing: "-0.03em",
									background: "linear-gradient(to right, #ffffff, #a855f7)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
								}}
							>
								GAME STORE
							</Typography>
							<Typography
								variant="body2"
								sx={{ color: "#94a3b8", lineHeight: 1.7, pr: { md: 4 } }}
							>
								The ultimate digital sanctuary for gamers worldwide. Get instant
								key deployments, certified genuine licenses, and the best loot
								prices 24/7.
							</Typography>

							{/* Social Media khusus komunitas gaming */}
							<Stack direction="row" spacing={1.5}>
								{[
									{ icon: <YouTubeIcon fontSize="small" />, href: "#" },
									{ icon: <RedditIcon fontSize="small" />, href: "#" },
									{ icon: <GitHubIcon fontSize="small" />, href: "#" },
								].map((social, idx) => (
									<Link
										key={idx}
										href={social.href}
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: 38,
											height: 38,
											borderRadius: "10px", // Bentuk kotak tumpul modern (squircle) ala tech-web
											bgcolor: "rgba(168, 85, 247, 0.1)",
											color: "#c084fc",
											border: "1px solid rgba(168, 85, 247, 0.2)",
											transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
											"&:hover": {
												bgcolor: "#f43f5e", // Berubah jadi pink neon saat disentuh
												color: "#ffffff",
												borderColor: "#f43f5e",
												transform: "translateY(-4px)",
												boxShadow: "0 6px 20px rgba(244, 63, 94, 0.4)",
											},
										}}
									>
										{social.icon}
									</Link>
								))}
							</Stack>
						</Stack>
					</Grid>

					{/* Links Sections (PERBAIKAN: Ditambahkan item, xs, dan md) */}
					{footerLinks.map((section, index) => (
						<Grid key={index}>
							<Typography
								variant="body2"
								sx={{
									fontWeight: 800,
									color: "#f3f4f6",
									mb: 3,
									textTransform: "uppercase",
									letterSpacing: "1px",
								}}
							>
								{section.title}
							</Typography>
							<Stack spacing={2}>
								{section.links.map((link, idx) => (
									<Link
										key={idx}
										href="#"
										sx={{
											color: "#94a3b8",
											textDecoration: "none",
											fontSize: "0.875rem",
											transition: "all 0.2s ease-in-out",
											width: "fit-content",
											"&:hover": {
												color: "#f43f5e", // Teks menyala pink neon saat di-hover
												transform: "translateX(4px)", // Sedikit bergeser ke kanan dengan halus
											},
										}}
									>
										{link}
									</Link>
								))}
							</Stack>
						</Grid>
					))}
				</Grid>

				{/* Bottom Divider & Sub-Footer */}
				<Box
					sx={{
						borderTop: "1px solid rgba(168, 85, 247, 0.1)",
						pt: 4,
					}}
				>
					<Stack direction={{ xs: "column", md: "row" }} spacing={2}>
						<Typography variant="body2" sx={{ color: "#64748b" }}>
							&copy; {currentYear} Game Store. All rights reserved. Built for
							champions.
						</Typography>

						<Stack direction="row" spacing={2} sx={{ rowGap: 1 }}>
							{["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
								(policy, pIdx) => (
									<Link
										key={pIdx}
										href="#"
										sx={{
											color: "#64748b",
											textDecoration: "none",
											fontSize: "0.815rem",
											transition: "all 0.3s ease",
											"&:hover": { color: "#cbd5e1" },
										}}
									>
										{policy}
									</Link>
								),
							)}
						</Stack>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
