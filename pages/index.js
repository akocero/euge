import React from "react";
import { createClient } from "contentful";

import IntroSection from "../components/sections/IntroSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import FeaturedSection from "../components/sections/FeaturedSection";
import ProjectSection from "../components/sections/ProjectSection";
import ExperienceSection from "../components/sections/ExperieceSection";
import ServicesSection from "../components/sections/ServicesSection";
import LogoMarqueeSection from "../components/sections/LogoMarqueeSection";

export async function getServerSideProps() {
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
			experiences: experiences.items,
		},
	};
}

export default function Home({ projects, experiences }) {
	return (
		<>
			<IntroSection />

			<FeaturedSection projects={projects} />

			<ProjectSection projects={projects} />

			<ExperienceSection experiences={experiences} />

			<LogoMarqueeSection />

			<ServicesSection />

			<AboutSection />

			<ContactSection />
		</>
	);
}
