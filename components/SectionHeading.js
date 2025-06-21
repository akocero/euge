import { motion } from 'framer-motion';
import { slideUp } from '../src/utils/animationVariants';
export default function SectionHeading({ title, subtitle }) {
	return (
		<motion.div className="section__heading" variants={slideUp}>
			<h2 className="heading__2">{title}</h2>
			<label>{subtitle}</label>
		</motion.div>
	);
}
