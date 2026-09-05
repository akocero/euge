import { motion } from 'framer-motion';
import { slideUp } from '../src/utils/animationVariants';
import { FiMapPin } from 'react-icons/fi';

const formatDate = (dateStr) => {
	if (!dateStr) return null;
	const date = new Date(dateStr);
	return date.toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric',
	});
};

const formatDuration = (startStr, endStr) => {
	if (!startStr) return null;
	const start = new Date(startStr);
	const end = endStr ? new Date(endStr) : new Date();
	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth();
	if (months < 0) {
		years--;
		months += 12;
	}
	const parts = [];
	if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
	if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
	return parts.length ? parts.join(' ') : '< 1 mo';
};

const ExperienceItem = ({ experiece }) => {
	const fields = experiece.fields;
	const { title, position, body, tags, logo, location } = fields;

	const start_date = fields.start_date || fields.startDate;
	const end_date = fields.end_date || fields.endDate;

	const startLabel = formatDate(start_date);
	const endLabel = formatDate(end_date);
	const isCurrent = !end_date;
	const duration = formatDuration(start_date, end_date);

	return (
		<motion.div className="experience__item" variants={slideUp}>
			<div className="experience__logo-wrap">
				{logo && (
					<img
						src={'https:' + logo.fields.file.url}
						alt={title + ' logo'}
						className="experience__logo"
					/>
				)}
			</div>

			<h3 className="heading__5 experience__company">{title}</h3>

			{location && (
				<span className="experience__location">
					<FiMapPin size={12} />
					{location}
				</span>
			)}

			<p className="experience__position">{position}</p>

			{startLabel && (
				<div className="experience__info">
					<span className="experience__date">
						{startLabel} –{' '}
						{isCurrent ? (
							<span className="experience__current">Current</span>
						) : (
							endLabel
						)}
						{duration && (
							<span className="experience__duration">
								{' '}
								· {duration}
							</span>
						)}
					</span>
				</div>
			)}

			<span className="experience__body">{body}</span>

			{tags && tags.length > 0 && (
				<div className="tags">
					{tags.map((tag) => (
						<span key={tag} className="tag">
							{tag}
						</span>
					))}
				</div>
			)}
		</motion.div>
	);
};

export default ExperienceItem;
