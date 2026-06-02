import About from "../components/layout/about";
import Contact from "../components/layout/contact";
import Footer from "../components/layout/footer";
import Home from "../components/layout/home";
import Navbar from "../components/layout/navbar";
import Products from "../components/layout/products";
import { useAuth } from "../context/AuthContext";

export default function AppPage() {
	const { isAuthenticated } = useAuth();
	return (
		<>
			{isAuthenticated ? (
				<h1>sudah login</h1>
			) : (
				<>
					<Navbar />
					<Home />
					<About />
					<Products />
					<Contact />
					<Footer />
				</>
			)}
		</>
	);
}
