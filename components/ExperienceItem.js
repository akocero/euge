const ExperienceItem = ({ experiece }) => {
	const { title, position, body } = experiece.fields;
	return (
		<div className="experience__item">
			<h4 className="experience__title">{title}</h4>
			<h5 className="experience__subtitle">{position}</h5>
			<p className="">{body}</p>
		</div>
	);
};

export default ExperienceItem;
