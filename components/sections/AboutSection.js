import { FiGithub, FiLinkedin, FiGitlab } from 'react-icons/fi';

function XIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" {...props}>
			<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
		</svg>
	);
}
import Image from 'next/image';
import { motion } from 'framer-motion';
import { sectionVariants, slideUp } from '../../src/utils/animationVariants';
import useAnimateWhenViewed from '../../src/hooks/useAnimateWhenViewed';

import Button from '../Button';

const AboutSection = () => {
	const [ref, controls] = useAnimateWhenViewed(-250);

	return (
		<motion.section
			className="about"
			id="about"
			variants={sectionVariants}
			initial="hidden"
			animate={controls}
			ref={ref}
		>
			<motion.div className="card about__content" variants={slideUp}>
				<div className="card__actions">
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
						href="https://x.com/eugenebadato"
						className="btn btn__link"
						target="__blank"
						text={<XIcon />}
					/>
				</div>
				<div className="card__content">
					<h4 className="heading__2">Meet the Dev</h4>
					<h5 htmlFor="" className="heading__5">
						My path, my passion, my purpose.
					</h5>

					<p className="card__body">
						I build fast, purposeful web experiences &mdash; and I&apos;ve fully integrated AI into how I design, code, and ship. From ideation to deployment, AI-assisted workflows are baked into everything I do, letting me move faster without cutting corners on quality.
						<br />
						<br />
						Outside client work, I&apos;m the creator of PelikulaPH (a community movie platform), an automated monitoring system, and a Hunter x Hunter API that anime fans actually use. I also mentor aspiring developers &mdash; not just to help them grow, but because teaching keeps me sharp too.
					</p>
				</div>

				<div className="tags">
					<span className="tag">$mentoring</span>
					<span className="tag">$coding</span>
					<span className="tag">$learning</span>
					<span className="tag">$goals</span>
				</div>
			</motion.div>

			<motion.div className="about__gallery" variants={slideUp}>
				<div className="about__thumbnail">
					<Image src="/images/about.jpg" alt="Eugene Badato" fill style={{ objectFit: 'cover' }} />
				</div>
				<div className="about__thumbnail">
					<Image
						src="/images/about2.jpg"
						alt="Eugene Badato"
						width={450}
						height={600}
					/>
				</div>
				<div className="about__thumbnail">
					<Image
						src="/images/about3.jpg"
						alt="Eugene Badato"
						width={450}
						height={430}
					/>
				</div>
				<div className="about__thumbnail">
					<Image src="/images/about4.jpg" alt="Eugene Badato" fill style={{ objectFit: 'cover' }} />
				</div>
			</motion.div>
		</motion.section>
	);
};

export default AboutSection;
