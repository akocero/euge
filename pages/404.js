import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
	return (
		<>
			<Head>
				<title>404 — Page Not Found | Eugene Badato</title>
			</Head>
			<div style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				textAlign: "center",
				padding: "2rem",
			}}>
				<h1 style={{ fontSize: "6rem", margin: 0, lineHeight: 1 }}>404</h1>
				<p style={{ fontSize: "1.25rem", margin: "1rem 0 2rem" }}>
					This page doesn&apos;t exist.
				</p>
				<Link href="/" style={{ textDecoration: "underline" }}>
					← Back to home
				</Link>
			</div>
		</>
	);
}
