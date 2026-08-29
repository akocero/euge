import { motion } from 'framer-motion';
import { sectionVariants, slideUp } from '../../src/utils/animationVariants';
import useAnimateWhenViewed from '../../src/hooks/useAnimateWhenViewed';
import SectionHeading from '../SectionHeading';
import {
	FiCode,
	FiServer,
	FiLayout,
} from 'react-icons/fi';

const services = [
	{
		icon: <FiCode />,
		title: 'Full-Stack Development',
		description:
			'End-to-end web applications using modern stacks like Next.js, React, and Node.js — from database to deployment.',
		tags: ['$next.js', '$react', '$node'],
	},
	{
		icon: <FiServer />,
		title: 'API Design & Integration',
		description:
			'RESTful APIs, third-party integrations, and backend services built for reliability and clean developer experience.',
		tags: ['$rest', '$graphql', '$integrations'],
	},
	{
		icon: <FiLayout />,
		title: 'UI Implementation',
		description:
			'Translating designs into pixel-perfect, responsive interfaces with smooth animations and a focus on usability.',
		tags: ['$scss', '$framer-motion', '$responsive'],
	},
];

export default function ServicesSection() {
	const [ref, controls] = useAnimateWhenViewed(-250);

	return (
		<motion.section
			className="services"
			id="services"
			variants={sectionVariants}
			initial="hidden"
			animate={controls}
			ref={ref}
		>
			<SectionHeading
				title="What I Do"
				subtitle="Services I offer to clients and collaborators."
			/>

			<div className="services__grid">
				{services.map((service, index) => (
					<motion.div
						key={index}
						className="card services__item"
						variants={slideUp}
					>
						<div className="services__icon">{service.icon}</div>
						<h3 className="heading__3">{service.title}</h3>
						<p className="services__description">{service.description}</p>
						<div className="tags">
							{service.tags.map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
}
