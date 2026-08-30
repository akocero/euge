import { motion } from 'framer-motion';
import { sectionVariants, slideUp } from '../../src/utils/animationVariants';
import useAnimateWhenViewed from '../../src/hooks/useAnimateWhenViewed';
import SectionHeading from '../SectionHeading';
import {
	FiCode,
	FiServer,
	FiLayout,
	FiZap,
	FiDatabase,
	FiMessageSquare,
} from 'react-icons/fi';

const services = [
	{
		icon: <FiCode />,
		title: 'Full-Stack Development',
		description:
			'End-to-end web applications using modern stacks like Next.js, React, and Node.js — from database to deployment.',
		tags: ['$next.js', '$react', '$node'],
		price: 'From $800',
		pricePHP: '₱46,000',
		popular: true,
		contactChip: 'Web Development',
	},
	{
		icon: <FiMessageSquare />,
		title: 'Dev on Demand',
		description:
			'Any development task you need — bug fixes, new features, quick tweaks, or one-off builds. Just tell me what needs done and I get to work.',
		tags: ['$bug-fixes', '$features', '$any-stack'],
		price: '$16 / hr',
		pricePHP: '₱960 / hr',
		badge: 'Hourly',
		contactChip: 'Web Development',
	},
	{
		icon: <FiLayout />,
		title: 'Landing Pages & Portfolios',
		description:
			'Single-page sites built to impress — personal portfolios, business landing pages, or any one-page web presence designed to convert.',
		tags: ['$portfolio', '$landing-page', '$responsive'],
		price: 'From $320',
		pricePHP: '₱18,400',
		contactChip: 'UI/UX Design',
	},
	{
		icon: <FiServer />,
		title: 'API Design & Integration',
		description:
			'RESTful APIs, third-party integrations, and backend services built for reliability and clean developer experience.',
		tags: ['$rest', '$graphql', '$integrations'],
		price: 'From $480',
		pricePHP: '₱27,600',
		contactChip: 'Web Development',
	},
	{
		icon: <FiZap />,
		title: 'Performance & SEO',
		description:
			'Auditing, Core Web Vitals improvements, and Lighthouse optimizations to make your site fast and discoverable.',
		tags: ['$lighthouse', '$core-web-vitals', '$seo'],
		price: 'From $160',
		pricePHP: '₱9,200',
		contactChip: 'Web Development',
	},
	{
		icon: <FiDatabase />,
		title: 'CMS Integration',
		description:
			'Headless CMS setup and integration with Contentful, Sanity, or similar — giving editors full control over content.',
		tags: ['$contentful', '$sanity', '$headless'],
		price: 'From $240',
		pricePHP: '₱13,800',
		contactChip: 'Web Development',
	},
];

const gridVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.1,
			when: 'beforeChildren',
		},
	},
};

function handleGetQuote(contactChip, title) {
	window.dispatchEvent(new CustomEvent('service-selected', { detail: { chip: contactChip, title } }));
	document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
}

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
				title="What I Offer"
				subtitle="Services I offer to clients and collaborators."
			/>

			<motion.div className="services__grid" variants={gridVariants}>
				{services.map((service, index) => (
					<motion.div
						key={index}
						className="card services__item"
						variants={slideUp}
					>
						{(service.popular || service.badge) && (
							<span className="services__badge">
								{service.badge ?? 'Most Popular'}
							</span>
						)}
						<h3 className="heading__3">{service.title}</h3>
						<div className="services__price">
							<span className="services__price-usd">{service.price}</span>
							<span className="services__price-php">{service.pricePHP}</span>
						</div>
						<p className="services__description">{service.description}</p>
						<div className="tags">
							{service.tags.map((tag) => (
								<span key={tag} className="tag">
									{tag}
								</span>
							))}
						</div>
						<button
							className="btn btn__dark services__cta"
							onClick={() => handleGetQuote(service.contactChip, service.title)}
						>
							Get a Quote
						</button>
					</motion.div>
				))}
			</motion.div>
		</motion.section>
	);
}
