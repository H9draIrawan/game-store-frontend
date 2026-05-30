import GamepadIcon from "@mui/icons-material/Gamepad";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import { useState } from "react";

const navItems = [
	{ label: "Home", path: "/app#home" },
	{ label: "About", path: "/app#about" },
	{ label: "Products", path: "/app#products" },
	{ label: "Contact", path: "/app#contact" },
];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return (
		<AppBar
			position="fixed"
			color="primary"
			sx={{
				backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
				boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
			}}
		>
			<Container maxWidth={false}>
				<Toolbar disableGutters>
					{/* DESKTOP LOGO */}
					<GamepadIcon sx={{ display: { xs: "none", md: "flex" }, mr: 3 }} />
					<Typography
						variant="h6"
						component="a"
						href="/app"
						noWrap
						sx={{
							display: {
								xs: "none",
								md: "flex",
							},
							textDecoration: "none",
							color: "inherit",
						}}
					>
						Game Store
					</Typography>

					{/* MOBILE HAMBURGER MENU */}
					<Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
						<IconButton
							size="large"
							aria-label="navigation menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={handleOpenNavMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{navItems.map((item) => (
								<MenuItem key={item.label} onClick={handleCloseNavMenu}>
									<Typography
										sx={{
											textAlign: "center",
											textDecoration: "none",
											color: "inherit",
										}}
										href={item.path}
										component="a"
									>
										{item.label}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					{/* MOBILE LOGO */}
					<GamepadIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h6"
						component="a"
						href="/app"
						noWrap
						sx={{
							display: {
								xs: "flex",
								md: "none",
							},
							color: "inherit",
							textDecoration: "none",
							flexGrow: 1,
						}}
					>
						Game Store
					</Typography>

					{/* DESKTOP MENU */}
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							flexGrow: 2,
							justifyContent: "center",
							gap: 2,
						}}
					>
						{navItems.map((item) => (
							<Button
								key={item.label}
								href={item.path}
								color="inherit"
								sx={{ textDecoration: "none" }}
							>
								{item.label}
							</Button>
						))}
					</Box>
					{/* DESKTOP LOGIN */}
					<Button
						color="inherit"
						href="/login"
						sx={{
							display: { xs: "none", md: "flex" },
							textDecoration: "none",
							justifyContent: "flex-end",
							gap: 2,
						}}
					>
						<LoginIcon />
						Login
					</Button>

					{/* MOBILE LOGIN */}
					<Button
						color="inherit"
						href="/login"
						sx={{
							display: { xs: "flex", md: "none" },
							justifyContent: "flex-end",
						}}
					>
						<LoginIcon />
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navbar;
