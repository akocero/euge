import { motion } from "framer-motion";
import { slideUp } from "../src/utils/animationVariants";

const ExperienceItem = ({ experiece }) => {
	const { title, position, body } = experiece.fields;
	return (
		<motion.div className="experience__item" variants={slideUp}>
			<h3 className="heading__5">{title}</h3>
			<label className="experience__subtitle">{position}</label>
			<p className="">{body}</p>
		</motion.div>
	);
};

export default ExperienceItem;
