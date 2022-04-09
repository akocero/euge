import { FiGithub } from "react-icons/fi";
import Image from "next/image";

const FeaturedItem = ({ featuredProject }) => {
	const { title, subtitle, body, tools, github, website, image } =
		featuredProject.fields;

	return (
		<article className="featured__item">
			<div className="featured__img-container">
				{image && (
					<Image
						src={"https:" + image.fields.file.url}
						alt={title}
						width={image.fields.file.details.image.width}
						height={image.fields.file.details.image.height}
					/>
				)}
			</div>
			<div className="featured__content">
				<h2 className="heading__2">{title}</h2>
				<h5 className="heading__5">{subtitle}</h5>
				<p className="">{body}</p>

				<div className="tags">
					{tools.map((tag) => (
						<span key={tag} className="tag">
							{tag}
						</span>
					))}
				</div>

				<div className="featured__actions">
					<a
						className="btn btn__primary"
						href={website}
						target="__blank"
					>
						take a look
					</a>
					<a className="btn btn__link" href={github} target="__blank">
						<FiGithub />
					</a>
				</div>
			</div>
		</article>
	);
};

export default FeaturedItem;
