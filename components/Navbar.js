import Link from "next/link";

const Navbar = () => {
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
							<a className="navbar__link">conatct</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
