import { motion } from 'framer-motion';
import { sectionVariants, slideUp } from '../../src/utils/animationVariants';
import useAnimateWhenViewed from '../../src/hooks/useAnimateWhenViewed';
import SectionHeading from '../SectionHeading';
import TestimonialItem from '../TestimonialItem';

const testimonials = [
	{
		name: 'Jomar Yumul Regalario',
		role: 'Sr. Web Developer',
		body: "Being mentored by Eugene was an amazing experience. I really appreciate his guidance and patience in helping me level up my skills. He breaks down complex concepts in a way that actually sticks.",
	},
	{
		name: 'Mark Anthony Dela Cruz',
		role: 'Frontend Developer',
		body: "Eugene built our company landing page from scratch and delivered ahead of schedule. The attention to detail and performance optimization was impressive — our Lighthouse score went from 62 to 98.",
	},
	{
		name: 'Sarah Kim',
		role: 'Product Manager at Lokal',
		body: "Working with Eugene was seamless. He asked the right questions upfront, kept us informed throughout, and the final product exceeded our expectations. Will definitely hire again.",
	},
];

const gridVariants = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.12, when: 'beforeChildren' },
	},
};

export default function TestimonialsSection() {
	const [ref, controls] = useAnimateWhenViewed(-250);

	return (
		<motion.section
			className="testimonials"
			id="testimonials"
			variants={sectionVariants}
			initial="hidden"
			animate={controls}
			ref={ref}
		>
			<SectionHeading
				title="Kind Words"
				subtitle="What clients and collaborators have said."
			/>

			<motion.div className="testimonials__grid" variants={gridVariants}>
				{testimonials.map((t, i) => (
					<motion.div key={i} variants={slideUp}>
						<TestimonialItem {...t} />
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
