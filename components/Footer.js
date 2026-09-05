import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from 'react-icons/fi';
import SiteAuthor from './SiteAuthor';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__links">
					<Link
						href="https://github.com/akocero"
						className="btn btn__link"
						target="__blank"
					>
						<FiGithub />
					</Link>
					<Link
						href="https://gitlab.com/akocero"
						className="btn btn__link"
						target="__blank"
					>
						<FiGitlab />
					</Link>
					<Link
						href="https://www.linkedin.com/in/eugenebadato/"
						className="btn btn__link"
						target="__blank"
					>
						<FiLinkedin />
					</Link>
					<Link
						href="https://twitter.com/eugenebadato"
						className="btn btn__link"
						target="__blank"
					>
						<FiTwitter />
					</Link>
				</div>

				<SiteAuthor />
			</div>
		</footer>
	);
};

export default Footer;
