const ExperienceItem = ({ experiece }) => {
	const { title, position, body } = experiece.fields;
	return (
		<div className="experience__item">
			<h3 className="heading__5">{title}</h3>
			<label className="experience__subtitle">{position}</label>
			<p className="">{body}</p>
		</div>
	);
};

export default ExperienceItem;
