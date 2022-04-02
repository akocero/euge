import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";
import SiteAuthor from "./SiteAuthor";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__links">
				<a className="btn btn__link">
					<FiGithub />
				</a>
				<a className="btn btn__link">
					<FiGitlab />
				</a>
				<a className="btn btn__link">
					<FiLinkedin />
				</a>
				<a className="btn btn__link">
					<FiTwitter />
				</a>
			</div>
			<SiteAuthor />
		</footer>
	);
};

export default Footer;
