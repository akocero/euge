import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { slideUp } from "../src/utils/animationVariants";

const ProjectItem = ({ project }) => {
	const { title, subtitle, body, tools, github, website } = project.fields;
	return (
		<motion.div className="card" variants={slideUp}>
			<div className="card__actions">
				{github && (
					<a className="btn btn__link" href={github} target="__blank">
						<FiGithub />
					</a>
				)}

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
		</motion.div>
	);
};

export default ProjectItem;
