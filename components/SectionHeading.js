export default function SectionHeading({ title, subtitle }) {
	return (
		<div className="section__heading">
			<h2>{title}</h2>
			<label>{subtitle}</label>
		</div>
	);
}
