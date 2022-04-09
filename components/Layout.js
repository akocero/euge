import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<div className="wrapper">
			<Head>
				<title>@eugenebadato</title>
				<meta
					property="og:url"
					content="https://eugenebadato.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Eugene Paul Badato | Website Portfolio"
				/>
				<meta name="twitter:card" content="summary" />
				<meta
					property="og:description"
					content="I design and develop things for the web."
				/>
				<meta property="og:image" content="/images/portfolio-ss.png" />
			</Head>
			<Navbar />

			{children}
			<Footer />
		</div>
	);
};

export default Layout;
