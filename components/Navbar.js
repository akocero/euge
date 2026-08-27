import Link from 'next/link';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { FiGithub, FiLinkedin, FiTwitter, FiGitlab, FiHome, FiStar, FiFolder, FiBriefcase, FiUser, FiMail } from 'react-icons/fi';
import { SiNextdotjs } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { slideDown, navParentVariants } from '../src/utils/animationVariants';
import { motion } from 'framer-motion';

const Navbar = () => {
	const [isDark, setIsDark] = useState('');
	let darkMode = '';

	const [lastScroll, setLastScroll] = useState(0);
	const [scrollState, setScrollState] = useState('');

	const navbarItems = [
		{ href: '#home', label: 'home', icon: <FiHome /> },
		{ href: '#featured', label: 'featured', icon: <FiStar /> },
		{ href: '#projects', label: 'projects', icon: <FiFolder /> },
		{ href: '#experiences', label: 'experiences', icon: <FiBriefcase /> },
		{ href: '#about', label: 'about', icon: <FiUser /> },
		{ href: '#contact', label: 'contact', icon: <FiMail /> },
	];

	useEffect(() => {
		darkMode = localStorage.getItem('darkmode');
		darkMode == 'dark' ? enableDarkMode() : disableDarkMode();
	}, []);

	useEffect(() => {
		const onScroll = (e) => {
			const currentScroll = window.pageYOffset;

			if (currentScroll > lastScroll) {
				setScrollState('scroll-down');
			}

			if (currentScroll < lastScroll) {
				setScrollState('scroll-up');
			}

			if (currentScroll <= 0) {
				setScrollState('');
			}

			setLastScroll(currentScroll);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollState, lastScroll]);

	const enableDarkMode = () => {
		document.body.classList.add('dark');
		const body = document.querySelector('.dark');
		body.setAttribute('class', 'dark');
		localStorage.setItem('darkmode', 'dark');
		setIsDark('dark');
	};

	const disableDarkMode = () => {
		document.body.classList.add('light');
		const body = document.querySelector('.light');
		body.setAttribute('class', 'light');
		localStorage.setItem('darkmode', 'light');
		setIsDark('light');
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
					<Link href="/">Eugene Paul Badato</Link>
					<p className="navbar__tagline">AI &amp; Software Engineer</p>
					<div className="navbar__theme-toggle">
						<button
							className={`navbar__theme-btn${isDark !== 'dark' ? ' active' : ''}`}
							onClick={disableDarkMode}
							aria-label="Light mode"
						>
							<RiSunLine />
						</button>
						<button
							className={`navbar__theme-btn${isDark === 'dark' ? ' active' : ''}`}
							onClick={enableDarkMode}
							aria-label="Dark mode"
						>
							<RiMoonClearLine />
						</button>
					</div>
				</motion.div>
				<motion.div className="navbar__divider" variants={slideDown} />
				<nav className="navbar__nav">
					<ul className="navbar__nav-list">
						{navbarItems.map((item) => (
							<motion.li
								className="navbar__item"
								variants={slideDown}
								key={item.href}
							>
								<Link href={item.href} className="navbar__link">
									<span className="navbar__link-icon">{item.icon}</span>
									<span className="navbar__link-label">{item.label}</span>
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
				<div className="navbar__mobile-toggle">
					<button
						className={`navbar__theme-btn${isDark !== 'dark' ? ' active' : ''}`}
						onClick={disableDarkMode}
						aria-label="Light mode"
					>
						<RiSunLine />
					</button>
					<button
						className={`navbar__theme-btn${isDark === 'dark' ? ' active' : ''}`}
						onClick={enableDarkMode}
						aria-label="Dark mode"
					>
						<RiMoonClearLine />
					</button>
				</div>

				<motion.div className="navbar__bottom" variants={slideDown}>
					<div className="navbar__socials">
						<Link href="https://github.com/akocero" target="__blank" className="navbar__social-link"><FiGithub /></Link>
						<Link href="https://gitlab.com/akocero" target="__blank" className="navbar__social-link"><FiGitlab /></Link>
						<Link href="https://www.linkedin.com/in/eugenebadato/" target="__blank" className="navbar__social-link"><FiLinkedin /></Link>
						<Link href="https://twitter.com/eugenebadato" target="__blank" className="navbar__social-link"><FiTwitter /></Link>
					</div>
					<p className="navbar__available">Available for freelance &amp; professional services.</p>
					<Link href="mailto:badatoeugenepaulm@gmail.com" className="navbar__email">
						badatoeugenepaulm@gmail.com
					</Link>
					<div className="navbar__bottom-divider" />
					<p className="navbar__credit">
						Built with <SiNextdotjs /> by Eugene
					</p>
				</motion.div>
			</motion.div>
		</header>
	);
};

export default Navbar;
