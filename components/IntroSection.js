import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntroSection() {
	const one = (
		<h4 className="intro__subtitle heading__4">Hello, It’s Me Eugene.</h4>
	);
	const two = (
		<h1 className="intro__title heading__1">
			I <span>design</span> and <span>develop</span> things for the web.
		</h1>
	);

	const introTexts = [one, two];

	const IntroContainerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 1,
				staggerChildren: 0.2,
				when: "beforeChildren",
			},
		},
	};

	const fadeUp = {
		hidden: {
			x: "100vw",
		},
		visible: {
			x: 0,
			transition: {
				duration: 1,
				type: "spring",
			},
		},
	};

	const slideRight = {
		hidden: {
			x: -500,
		},
		visible: {
			x: 0,
			transition: {
				duration: 1.5,
				type: "spring",
			},
		},
	};

	return (
		<motion.section
			className="intro"
			id="home"
			variants={IntroContainerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* <div className="rectangle">&nbsp;</div> */}

			<motion.div className="intro__img" variants={slideRight}>
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
					<motion.div variants={fadeUp} key={i}>
						{text}
					</motion.div>
				))}

				<motion.div className="intro__actions" variants={fadeUp}>
					<Link href="#projects">
						<a className="btn btn__primary">projects</a>
					</Link>

					<div className="social__links">
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
				</motion.div>

				<div className="triangle">&nbsp;</div>
				<div className="triangle2">&nbsp;</div>
			</div>
		</motion.section>
	);
}
