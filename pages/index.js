import React from "react";
import { createClient } from "contentful";
import FeaturedItem from "../components/FeaturedItem";
import ProjectItem from "../components/ProjectItem";
import ExperienceItem from "../components/ExperienceItem";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import SectionHeading from "../components/SectionHeading";
import TestimonialItem from "../components/TestimonialItem";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const projects = await client.getEntries({
		content_type: "project",
		order: "fields.rank",
	});

	const experiences = await client.getEntries({
		content_type: "experiences",
		order: "fields.rank",
	});

	return {
		props: {
			projects: projects.items,
			experieces: experiences.items,
		},
		revalidate: 1,
	};
}

export default function Home({ projects, experieces }) {
	return (
		<>
			<IntroSection />
			<section className="featured" id="featured">
				<SectionHeading
					title="featured projects"
					subtitle="selected projects"
				/>
				{projects
					.filter((project) => project.fields.featured)
					.map((featuredProject) => (
						<FeaturedItem
							featuredProject={featuredProject}
							key={featuredProject.sys.id}
						/>
					))}
			</section>

			<section className="project" id="projects">
				<SectionHeading
					title="noteworthy projects"
					subtitle="what i'm capable of?"
				/>

				<div className="card__list">
					{projects.map((project) => (
						<ProjectItem project={project} key={project.sys.id} />
					))}
				</div>
			</section>

			<section className="experience" id="experiences">
				<SectionHeading
					title="experiences"
					subtitle="what i have done?"
				/>

				<div className="experience__list">
					{experieces.map((experiece) => (
						<ExperienceItem
							key={experiece.sys.id}
							experiece={experiece}
						/>
					))}
				</div>
			</section>

			<AboutSection />

			{/* <section className="testimonials">
				<SectionHeading
					title="testimonials"
					subtitle="people i work with?"
				/>
				<div className="testimonials__list">
					{[1, 2, 3, 4].map((project) => (
						<TestimonialItem key={project} />
					))}
				</div>
			</section> */}

			<ContactSection />
		</>
	);
}
