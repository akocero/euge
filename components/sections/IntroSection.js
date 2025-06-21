import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from 'react-icons/fi';
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
			From whiteboard to <span>web</span>, I make it <span>real</span>.
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
					height={396}
					priority
					quality={100}
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

					<div className="social__links">
						<Button
							href="https://github.com/akocero"
							className="btn btn__link"
							target="__blank"
							text={<FiGithub />}
						/>
						<Button
							href="https://gitlab.com/akocero"
							className="btn btn__link"
							target="__blank"
							text={<FiGitlab />}
						/>
						<Button
							href="https://www.linkedin.com/in/eugenebadato/"
							className="btn btn__link"
							target="__blank"
							text={<FiLinkedin />}
						/>
						<Button
							href="https://twitter.com/eugenebadato"
							className="btn btn__link"
							target="__blank"
							text={<FiTwitter />}
						/>
					</div>
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
