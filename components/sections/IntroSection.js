import Image from 'next/image';
import { motion } from 'framer-motion';
import {
	IntroSectionVariants,
	springRTL,
	springLTR,
	slideUp,
	fadeIn,
} from '../../src/utils/animationVariants';
import Button from '../Button';
import { useState, useEffect } from 'react';

export default function IntroSection() {
	const one = <h4 className="intro__subtitle heading__4">Hey, I’m Eugene</h4>;

	const titles = [
		<>
			Design comes <span>naturally</span>. Code comes with{' '}
			<span>effort</span>. I do both.
		</>,
		<>
			Pixels, logic, and a bit of <span>magic</span>.
		</>,
		<>
			Designs that catch the <span>eye</span>. Code that keeps it{' '}
			<span>smooth</span>.
		</>,
		<>
			I don&apos;t just ship <span>features</span>, I craft{' '}
			<span>experiences</span>.
		</>,
		<>
			Creative by <span>nature</span>, coder by <span>choice</span>.
		</>,
	];

	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const two = (
		<h1 className="intro__title heading__1">{titles[titleIndex]}</h1>
	);

	const introTexts = [one, two];

	return (
		<motion.section
			className="intro"
			id="home"
			variants={IntroSectionVariants}
			initial="hidden"
			animate="visible"
		>
			{/* <div className="rectangle">&nbsp;</div> */}

			<motion.div
				className="intro__img"
				variants={springLTR}
				whileHover={{
					rotateZ: '-20deg',
				}}
			>
				<Image
					src="/images/me.png"
					alt=""
					width={350}
					height={396 * 0.8}
					priority
				/>
			</motion.div>
			<div className="intro__content">
				{introTexts.map((text, i) => (
					<motion.div variants={slideUp} key={i}>
						{text}
					</motion.div>
				))}

				<motion.div className="intro__actions" variants={slideUp}>
					<Button
						href="#projects"
						className="btn btn__primary"
						text="projects"
					/>

					<Button
						href="#contact"
						className="btn btn__dark"
						text="let's talk"
					/>
				</motion.div>
			</div>

			<motion.div className="triangle" variants={fadeIn}>
				&nbsp;
			</motion.div>
			<motion.div className="triangle2" variants={fadeIn}>
				&nbsp;
			</motion.div>
		</motion.section>
	);
}
