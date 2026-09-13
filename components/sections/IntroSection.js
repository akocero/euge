import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
	IntroSectionVariants,
	springRTL,
	springLTR,
	slideUp,
	fadeIn,
} from '../../src/utils/animationVariants';
import Button from '../Button';
import { useState, useEffect } from 'react';
import { FiMail, FiDownload } from 'react-icons/fi';
import { RiRobot2Line } from 'react-icons/ri';

function TerminalIcon() {
	return <span style={{ fontFamily: "'Cascadia Code','Fira Code',monospace", fontSize: '1.8rem', fontWeight: 600, letterSpacing: '-0.5px', lineHeight: 1 }}>&gt;_</span>;
}

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
	const [tip, setTip] = useState(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setTitleIndex((prev) => (prev + 1) % titles.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const two = (
		<h1 className="intro__title heading__1">
			<AnimatePresence exitBeforeEnter>
				<motion.span
					key={titleIndex}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					transition={{ duration: 0.4, ease: 'easeInOut' }}
					style={{ display: 'block', color: 'inherit' }}
				>
					{titles[titleIndex]}
				</motion.span>
			</AnimatePresence>
		</h1>
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
				whileHover={{ rotateZ: '-20deg' }}
				style={{ position: 'relative' }}
			>
				<Image
					src="/images/me.png"
					alt="Eugene Badato - AI & Software Engineer"
					width={350}
					height={396 * 0.8}
					priority
				/>
				{tip && (
					<div key={tip} className="intro__speech-wrap">
						<img
							src="/images/msg_box.png"
							alt=""
							className="intro__speech-img"
						/>
						<span className="intro__speech-text">{tip}</span>
					</div>
				)}
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
						onMouseEnter={() => setTip('check out my work!')}
						onMouseLeave={() => setTip(null)}
					/>

					<div className="intro__icon-actions">
						<a
							href="/Eugene_Badato_Resume.pdf"
							download
							className="navbar__social-link"
							onMouseEnter={() => setTip('psst.. grab my resume!')}
							onMouseLeave={() => setTip(null)}
						>
							<FiDownload />
						</a>

						<a
							href="#contact"
							className="navbar__social-link"
							onMouseEnter={() => setTip("let's build something!")}
							onMouseLeave={() => setTip(null)}
						>
							<FiMail />
						</a>

						<button
							className="navbar__social-link"
							onClick={() => window.dispatchEvent(new Event('open-chat'))}
							onMouseEnter={() => setTip('ask me anything!')}
							onMouseLeave={() => setTip(null)}
						>
							<RiRobot2Line />
						</button>

						<button
							className="navbar__social-link"
							onClick={() => window.dispatchEvent(new Event('open-terminal'))}
							onMouseEnter={() => setTip('try the terminal!')}
							onMouseLeave={() => setTip(null)}
						>
							<TerminalIcon />
						</button>
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
