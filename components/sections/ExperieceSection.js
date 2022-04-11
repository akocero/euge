import useAnimateWhenViewed from "../../src/hooks/useAnimateWhenViewed";
import { motion } from "framer-motion";
import { sectionVariants } from "../../src/utils/animationVariants";
import SectionHeading from "../SectionHeading";
import ExperienceItem from "../ExperienceItem";

export default function ExperieceSection({ experieces }) {
	const [ref, controls] = useAnimateWhenViewed(-250);
	return (
		<motion.section
			className="experience"
			id="experiences"
			variants={sectionVariants}
			initial="hidden"
			animate={controls}
			ref={ref}
		>
			<SectionHeading title="experiences" subtitle="what i have done?" />

			<div className="experience__list">
				{experieces.map((experiece) => (
					<ExperienceItem
						key={experiece.sys.id}
						experiece={experiece}
					/>
				))}
			</div>
		</motion.section>
	);
}
