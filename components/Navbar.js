import Link from "next/link";

const Navbar = () => {
	return (
		<header className="navbar">
			<div className="name">
				<a href="http://" target="_blank" rel="noopener noreferrer">
					@eugenebadato
				</a>
			</div>
			<nav className="navbar__nav">
				<ul className="navbar__nav-list">
					<li className="navbar__item">
						{"{ "}
						<a href="" className="navbar__link">
							projects,
						</a>
					</li>
					<li className="navbar__item">
						<a href="" className="navbar__link">
							experieces,
						</a>
					</li>
					<li className="navbar__item">
						<a href="" className="navbar__link">
							about,
						</a>
					</li>
					<li className="navbar__item">
						<a href="" className="navbar__link">
							contact
						</a>
						{" }"}
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
