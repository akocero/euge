import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiExternalLink,
	FiPlus,
} from "react-icons/fi";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
				<h3 className="featured__title">{title}</h3>
				<label className="featured__subtitle">{subtitle}</label>
				<p className="featured__body">{body}</p>

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
						live website
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
