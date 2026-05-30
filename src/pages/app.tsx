import About from "../components/layout/about";
import Contact from "../components/layout/contact";
import Footer from "../components/layout/footer";
import Home from "../components/layout/home";
import Navbar from "../components/layout/navbar";
import Products from "../components/layout/products";

export default function AppPage() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Products />
			<Contact />
			<Footer />
		</>
	);
}
