import Navbar from "./Navbar";
import Head from "next/head";

const SITE_URL = "https://eugenebadato.com";
const OG_IMAGE = `${SITE_URL}/images/portfolio-ss.png`;
const TITLE = "Eugene Badato | Designer & Web Developer Portfolio";
const DESCRIPTION =
	"Eugene Paul Badato is a designer and web developer who builds engaging, high-performance experiences for the web. Explore projects, experience, and get in touch.";

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Eugene Badato",
	alternateName: "Eugene Paul Badato",
	url: SITE_URL,
	image: OG_IMAGE,
	jobTitle: "Designer & Web Developer",
	description: DESCRIPTION,
	sameAs: [
		"https://github.com/akocero",
		"https://gitlab.com/akocero",
		"https://www.linkedin.com/in/eugenebadato/",
		"https://twitter.com/eugenebadato",
	],
};

const Layout = ({ children }) => {
	return (
		<div className="wrapper">
			<Head>
				{/* Primary meta tags */}
				<title>{TITLE}</title>
				<meta name="description" content={DESCRIPTION} />
				<meta
					name="keywords"
					content="Eugene Badato, Eugene Paul Badato, portfolio, web developer, web designer, frontend developer, UI designer, Next.js developer"
				/>
				<meta name="author" content="Eugene Paul Badato" />
				<meta name="robots" content="index, follow" />
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="canonical" href={SITE_URL} />

				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content={SITE_URL} />
				<meta property="og:title" content={TITLE} />
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:image" content={OG_IMAGE} />
				<meta property="og:site_name" content="Eugene Badato" />
				<meta property="og:locale" content="en_US" />

				{/* Twitter Card */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@eugenebadato" />
				<meta name="twitter:creator" content="@eugenebadato" />
				<meta name="twitter:title" content={TITLE} />
				<meta name="twitter:description" content={DESCRIPTION} />
				<meta name="twitter:image" content={OG_IMAGE} />

				{/* Structured data: Person schema */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(personJsonLd),
					}}
				/>
			</Head>
			<Navbar />

			{children}
		</div>
	);
};

export default Layout;
