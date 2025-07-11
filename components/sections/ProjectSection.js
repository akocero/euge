import useAnimateWhenViewed from '../../src/hooks/useAnimateWhenViewed';
import { motion } from 'framer-motion';
import { sectionVariants } from '../../src/utils/animationVariants';
import SectionHeading from '../SectionHeading';
import ProjectItem from '../ProjectItem';
export default function ProjectSection({ projects }) {
	const [ref, controls] = useAnimateWhenViewed(-250);
	return (
		<motion.section
			className="project"
			id="projects"
			variants={sectionVariants}
			initial="hidden"
			animate={controls}
			ref={ref}
		>
			<SectionHeading
				title="Things I’ve Built"
				subtitle="From late-night ideas to fully working apps."
			/>

			<div className="card__list">
				{projects.map((project) => (
					<ProjectItem project={project} key={project.sys.id} />
				))}
			</div>
		</motion.section>
	);
}
