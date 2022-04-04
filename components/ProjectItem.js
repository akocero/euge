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
				<a className="btn btn__link" href={github} target="__blank">
					<FiGithub />
				</a>

				{website && (
					<a
						className="btn btn__link"
						href={website}
						target="__blank"
					>
						<FiExternalLink />
					</a>
				)}
			</div>
			<div className="card__content">
				<h4 className="heading__3">{title}</h4>
				<h5 htmlFor="" className="heading__5">
					{subtitle}
				</h5>

				<p className="card__body">{body}</p>
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
