import { FiStar } from 'react-icons/fi';

export default function TestimonialItem({ name, role, body, avatar }) {
	return (
		<div className="card testimonials__item">
			<div className="testimonials__stars">
				{[...Array(5)].map((_, i) => <FiStar key={i} className="testimonials__star" />)}
			</div>
			<p className="testimonials__body">&ldquo;{body}&rdquo;</p>
			<div className="testimonials__author">
				{avatar && (
					<div className="testimonials__avatar">
						<img src={avatar} alt={name} width={40} height={40} />
					</div>
				)}
				<div>
					<p className="testimonials__name">{name}</p>
					<p className="testimonials__role">{role}</p>
				</div>
			</div>
		</div>
	);
}
