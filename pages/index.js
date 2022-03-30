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
} from "react-icons/fi";
import React from "react";
import { createClient } from "contentful";
import FeaturedItem from "../components/FeaturedItem";
import ProjectItem from "../components/ProjectItem";
import ExperienceItem from "../components/ExperienceItem";
import AboutSection from "../components/AboutSection";
import SectionHeading from "../components/SectionHeading";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const res = await client.getEntries({
		content_type: "project",
	});

	const res2 = await client.getEntries({
		content_type: "experiences",
	});

	return {
		props: {
			projects: res.items,
			experieces: res2.items,
		},
		revalidate: 1,
	};
}

export default function Home({ projects, experieces }) {
	// useEffect(() => {
	// 	// console.log(projects);
	// }, []);
	return (
		<div className="wrapper">
			<Head>
				<title>@eugenebadato</title>
			</Head>
			<section className="intro" id="home">
				<div className="rectangle">&nbsp;</div>
				<div className="triangle">&nbsp;</div>
				<div className="triangle2">&nbsp;</div>
				<p className="intro__body">Hello, It’s Me Eugene Badato.</p>
				<h1 className="intro__title">
					I <span>design</span> and <span>develop</span> things for
					the web.
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
			</section>

			<section className="featured" id="featured">
				<SectionHeading
					title="featured project"
					subtitle="- latest projects"
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
					subtitle="what i have done?"
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

			<section className="contact" id="contact">
				<div className="card">
					<h1>{"Let's Work Together"}</h1>
					<button className="btn btn__primary">message me</button>
				</div>
				<div className="triangle">&nbsp;</div>
				<div className="triangle2">&nbsp;</div>
			</section>
		</div>
	);
}
