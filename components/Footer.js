import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";
import SiteAuthor from "./SiteAuthor";
import Link from "next/link";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__links">
				<Link href="https://github.com/akocero">
					<a className="btn btn__link" target="__blank">
						<FiGithub />
					</a>
				</Link>
				<Link href="https://gitlab.com/akocero">
					<a className="btn btn__link" target="__blank">
						<FiGitlab />
					</a>
				</Link>
				<Link href="https://www.linkedin.com/in/eugenebadato/">
					<a className="btn btn__link" target="__blank">
						<FiLinkedin />
					</a>
				</Link>
				<Link href="https://twitter.com/eugenebadato">
					<a className="btn btn__link" target="__blank">
						<FiTwitter />
					</a>
				</Link>
			</div>
			<SiteAuthor />
		</footer>
	);
};

export default Footer;
