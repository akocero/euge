import Navbar from "./Navbar";
import TerminalOverlay from "./TerminalOverlay";
import Head from "next/head";
import Script from "next/script";
import { useState, useEffect } from "react";

const SITE_URL = "https://eugenebadato.com";
const OG_IMAGE = `${SITE_URL}/images/portfolio-ss.png`;
const TITLE = "Eugene Badato | AI & Software Engineer";
const DESCRIPTION =
	"Eugene Paul Badato is an AI & Software Engineer specializing in React, Next.js, Node.js, and AI-powered web applications. Based in the Philippines. Explore projects, experience, and get in touch.";

const personJsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Eugene Paul Badato",
	alternateName: ["Eugene Badato", "eugenebadato"],
	url: SITE_URL,
	image: `${SITE_URL}/images/me-final.png`,
	jobTitle: "AI & Software Engineer",
	description: DESCRIPTION,
	nationality: "Filipino",
	address: {
		"@type": "PostalAddress",
		addressCountry: "PH",
	},
	knowsAbout: [
		"Artificial Intelligence",
		"Software Engineering",
		"Web Development",
		"React",
		"Next.js",
		"Node.js",
		"TypeScript",
		"JavaScript",
		"UI/UX Design",
		"Full Stack Development",
		"AI Integration",
		"Large Language Models",
	],
	sameAs: [
		"https://github.com/akocero",
		"https://gitlab.com/akocero",
		"https://www.linkedin.com/in/eugenebadato/",
		"https://twitter.com/eugenebadato",
	],
};

const websiteJsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Eugene Badato — Portfolio",
	url: SITE_URL,
	description: DESCRIPTION,
	author: { "@type": "Person", name: "Eugene Paul Badato" },
};

const Layout = ({ children }) => {
	const [terminalOpen, setTerminalOpen] = useState(false);

	useEffect(() => {
		const handler = () => setTerminalOpen((v) => !v);
		const openHandler = () => setTerminalOpen(true);
		window.addEventListener('open-terminal', openHandler);
		const onKey = (e) => {
			if ((e.ctrlKey || e.metaKey) && e.key === '`') {
				e.preventDefault();
				setTerminalOpen((v) => !v);
			}
		};
		window.addEventListener('keydown', onKey);
		return () => {
			window.removeEventListener('open-terminal', openHandler);
			window.removeEventListener('keydown', onKey);
		};
	}, []);

	return (
		<div className="wrapper">
			<Head>
				{/* Primary meta tags */}
				<title>{TITLE}</title>
				<meta name="description" content={DESCRIPTION} />
				<meta
					name="keywords"
					content="Eugene Badato, Eugene Paul Badato, AI engineer, software engineer, web developer, React developer, Next.js developer, Node.js, TypeScript, full stack developer, Filipino developer, portfolio"
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

				{/* Structured data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(personJsonLd),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteJsonLd),
					}}
				/>
			</Head>
			<Script
				src="https://static.cloudflareinsights.com/beacon.min.js"
				data-cf-beacon='{"token": "003caf889c8e4357911a489d0c65de2d"}'
				strategy="afterInteractive"
			/>
			<Navbar />

			{children}

			<TerminalOverlay open={terminalOpen} onClose={() => setTerminalOpen(false)} />
		</div>
	);
};

export default Layout;
