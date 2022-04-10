import Link from "next/link";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { slideDown, navParentVariants } from "../src/utils/animationVariants";
import { motion } from "framer-motion";

const Navbar = () => {
	const [isDark, setIsDark] = useState("");
	let darkMode = "";

	const [lastScroll, setLastScroll] = useState(0);
	const [scrollState, setScrollState] = useState("");

	const navbarItems = [
		"#home",
		"#projects",
		"#experiences",
		"#about",
		"#contact",
	];

	useEffect(() => {
		// setIsDark(localStorage.getItem("darkmode"));
		darkMode = localStorage.getItem("darkmode");
		darkMode == "dark" ? enableDarkMode() : disableDarkMode();
	}, []);

	useEffect(() => {
		const onScroll = (e) => {
			const currentScroll = window.pageYOffset;

			if (currentScroll > lastScroll) {
				setScrollState("scroll-down");
			}

			if (currentScroll < lastScroll) {
				setScrollState("scroll-up");
			}

			if (currentScroll <= 0) {
				setScrollState("");
			}

			setLastScroll(currentScroll);
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollState, lastScroll]);

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
		<header className={`navbar ${scrollState}`}>
			<motion.div
				className="navbar__container"
				variants={navParentVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div className="navbar__name" variants={slideDown}>
					<Link href="/">
						<a>@eugenebadato.</a>
					</Link>
				</motion.div>
				<nav className="navbar__nav">
					<ul className="navbar__nav-list">
						{navbarItems.map((item) => (
							<motion.li
								className="navbar__item"
								variants={slideDown}
								key={item}
							>
								<Link href={item}>
									<a className="navbar__link">
										{item.substring(1)}
									</a>
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
				<motion.button
					className="navbar__toggle"
					onClick={() => {
						toggleDarkMode();
					}}
					variants={slideDown}
				>
					{isDark == "dark" ? <RiSunLine /> : <RiMoonClearLine />}
				</motion.button>
			</motion.div>
		</header>
	);
};

export default Navbar;
