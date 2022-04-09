import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiExternalLink,
	FiPlus,
	FiHome,
} from "react-icons/fi";
import React from "react";
import { createClient } from "contentful";
import FeaturedItem from "../components/FeaturedItem";
import ProjectItem from "../components/ProjectItem";
import ExperienceItem from "../components/ExperienceItem";
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
			<a href="#home" className="btn btn__up">
				<FiHome />
			</a>
			<section className="intro" id="home">
				{/* <div className="rectangle">&nbsp;</div> */}
				<div className="triangle">&nbsp;</div>
				<div className="triangle2">&nbsp;</div>

				<div className="intro__img">
					<Image
						src="/images/me.png"
						alt=""
						width={350}
						height={396}
						priority
						quality={100}
					/>
				</div>
				<div className="intro__content">
					<h4 className="intro__subtitle heading__4">
						Hello, It’s Me Eugene.
					</h4>
					<h1 className="intro__title heading__1">
						I <span>design</span> and <span>develop</span> things
						for the web.
					</h1>

					<div className="intro__actions">
						<Link href="#projects">
							<a className="btn btn__primary">projects</a>
						</Link>

						<div className="intro__links">
							<Link href="https://github.com/akocero">
								<a className="btn btn__link" target="__blank">
									<FiGithub />
								</a>
							</Link>
							<Link href="https://gitlab.com/akocero">
								<a className="btn btn__link" target="__blank">
									<FiGitlab />
								</a>
							</Link>
							<Link href="https://www.linkedin.com/in/eugenebadato/">
								<a className="btn btn__link" target="__blank">
									<FiLinkedin />
								</a>
							</Link>
							<Link href="https://twitter.com/eugenebadato">
								<a className="btn btn__link" target="__blank">
									<FiTwitter />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>

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
