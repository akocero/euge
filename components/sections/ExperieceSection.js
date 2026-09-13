import useAnimateWhenViewed from '../../src/hooks/useAnimateWhenViewed';
import { motion } from 'framer-motion';
import { sectionVariants } from '../../src/utils/animationVariants';
import SectionHeading from '../SectionHeading';
import ExperienceItem from '../ExperienceItem';

export default function ExperienceSection({ experiences }) {
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
			<SectionHeading
				title="Where I've Been"
				subtitle="A glimpse into my work story."
			/>

			<div className="experience__list">
				{experiences.map((experience) => (
					<ExperienceItem
						key={experience.sys.id}
						experiece={experience}
					/>
				))}
			</div>
		</motion.section>
	);
}
