export default function SectionHeading({ title, subtitle }) {
	return (
		<div className="section__heading">
			<h2 className="heading__2">{title}</h2>
			<label>_{subtitle}</label>
		</div>
	);
}
