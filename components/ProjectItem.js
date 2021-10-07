import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiExternalLink,
	FiPlus,
} from "react-icons/fi";

const ProjectItem = ({ project }) => {
	const { title, subtitle, body, tools, github, website, image } =
		project.fields;
	return (
		<div className="card">
			<div className="card__actions">
				<button className="btn btn__link">
					<FiGithub />
				</button>
				<button className="btn btn__link">
					<FiExternalLink />
				</button>
			</div>
			<div className="card__content">
				<h4 className="card__title">{title}</h4>
				<h5 htmlFor="" className="card__subtitle">
					{subtitle}
				</h5>

				<div className="card__body">{body}</div>
			</div>

			<div className="tags">
				{tools.map((tag) => (
					<span key={tag} className="tag">
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};

export default ProjectItem;