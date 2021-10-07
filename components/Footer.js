import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";
import SiteAuthor from "./SiteAuthor";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="intro__links ">
				<button className="btn btn__link">
					<FiGithub />
				</button>
				<button className="btn btn__link">
					<FiGitlab />
				</button>
				<button className="btn btn__link">
					<FiLinkedin />
				</button>
				<button className="btn btn__link">
					<FiTwitter />
				</button>
			</div>
			<SiteAuthor />
		</footer>
	);
};

export default Footer;
