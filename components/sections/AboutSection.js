import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from 'react-icons/fi';
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
						href="https://twitter.com/eugenebadato"
						className="btn btn__link"
						target="__blank"
						text={<FiTwitter />}
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
