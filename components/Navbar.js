import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isDark, setIsDark] = useState("");
	let darkMode = "";
	useEffect(() => {
		// setIsDark(localStorage.getItem("darkmode"));
		darkMode = localStorage.getItem("darkmode");
		if (darkMode == "dark") {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
	}, []);

	const enableDarkMode = () => {
		document.body.classList.add("dark");
		const body = document.querySelector(".dark");
		body.setAttribute("class", "dark");

		localStorage.setItem("darkmode", "dark");
		setIsDark("dark");

		console.log("local: dark");
	};

	const disableDarkMode = () => {
		document.body.classList.add("light");
		const body = document.querySelector(".light");
		body.setAttribute("class", "light");

		localStorage.setItem("darkmode", "light");
		setIsDark("light");

		console.log("local: light");
	};

	const toggleDarkMode = () => {
		darkMode = localStorage.getItem("darkmode");

		if (darkMode === "dark") {
			disableDarkMode();
		} else {
			enableDarkMode();
		}
	};

	return (
		<header className="navbar">
			<div className="navbar__name">
				<Link href="/">
					<a>@eugenebadato.</a>
				</Link>
			</div>
			<nav className="navbar__nav">
				<ul className="navbar__nav-list">
					<li className="navbar__item">
						<Link href="#home">
							<a className="navbar__link">home</a>
						</Link>
					</li>
					<li className="navbar__item">
						<Link href="#projects">
							<a className="navbar__link">projects</a>
						</Link>
					</li>
					<li className="navbar__item">
						<Link href="#experiences">
							<a className="navbar__link">experiences</a>
						</Link>
					</li>
					<li className="navbar__item">
						<Link href="#about">
							<a className="navbar__link">about</a>
						</Link>
					</li>
					<li className="navbar__item">
						<Link href="#contact">
							<a className="navbar__link">contact</a>
						</Link>
					</li>
				</ul>
			</nav>
			<button
				className="navbar__toggle"
				onClick={() => {
					toggleDarkMode();
				}}
			>
				{isDark == "dark" ? <RiSunLine /> : <RiMoonClearLine />}
			</button>
		</header>
	);
};

export default Navbar;
