import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { slideUp } from "../src/utils/animationVariants";
import Button from "./Button";

const ProjectItem = ({ project }) => {
	const { title, subtitle, body, tools, github, website } = project.fields;
	return (
		<motion.div className="card" variants={slideUp}>
			<div className="card__actions">
				{github && (
					<Button
						href={github}
						target="__blank"
						className="btn btn__link"
						text={<FiGithub />}
					/>
				)}

				{website && (
					<Button
						href={website}
						target="__blank"
						className="btn btn__link"
						text={<FiExternalLink />}
					/>
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
