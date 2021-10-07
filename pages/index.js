import Head from "next/head";
import Image from "next/image";
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiExternalLink,
	FiPlus,
} from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import FeaturedItem from "../components/FeaturedItem";
import ProjectItem from "../components/ProjectItem";
import ExperienceItem from "../components/ExperienceItem";
import AboutSection from "../components/AboutSection";

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const res = await client.getEntries({
		content_type: "project",
	});

	return {
		props: {
			projects: res.items,
		},
	};
}

export default function Home({ projects }) {
	useEffect(() => {
		console.log(projects);
	}, []);
	return (
		<div className="wrapper">
			<section className="intro">
				<div className="rectangle">&nbsp;</div>
				<div className="triangle">&nbsp;</div>
				<div className="triangle2">&nbsp;</div>
				<p className="intro__body">Hello, It’s Me Eugene.</p>
				<h1 className="intro__title">
					Let my <span>portfolio</span> describe me.
				</h1>

				<div className="intro__actions">
					<button className="btn btn__primary">project</button>

					<div className="intro__links ">
						<button className="btn btn__link">
							<FiGithub />
						</button>
						<button className="btn btn__link">
							<FiGitlab />
						</button>
						<button className="btn btn__link">
							<FiLinkedin />
						</button>
						<button className="btn btn__link">
							<FiTwitter />
						</button>
					</div>
				</div>
			</section>

			<section className="featured">
				<div className="section__heading">
					<h2>featured project</h2>
					<label htmlFor="">what i'm doing?</label>
				</div>
				{projects
					.filter((project) => project.fields.featured)
					.map((featuredProject) => (
						<FeaturedItem
							featuredProject={featuredProject}
							key={featuredProject.sys.id}
						/>
					))}
			</section>

			<section className="project">
				<div className="section__heading">
					<h2>noteworthy projects</h2>
					<label htmlFor="">what i have done?</label>
				</div>

				<div className="card__list">
					{projects.map((project) => (
						<ProjectItem project={project} key={project.sys.id} />
					))}
				</div>
			</section>

			<section className="experience">
				<div className="section__heading">
					<h2>experiences</h2>
					<label htmlFor="">what i have done?</label>
				</div>

				<div className="experience__list">
					{projects.map((project) => (
						<ExperienceItem key={project.sys.id} />
					))}
				</div>
			</section>

			<AboutSection />

			<section className="contact">
				<div className="card">
					<h1>Let's Work Together</h1>
					<button className="btn btn__primary">message me</button>
				</div>
				<div className="triangle">&nbsp;</div>
				<div className="triangle2">&nbsp;</div>
			</section>
			
		</div>
	);
}
