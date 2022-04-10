import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiExternalLink,
	FiPlus,
} from "react-icons/fi";
import Image from "next/image";

import Button from "./Button";

const AboutSection = () => {
	return (
		<section className="about" id="about">
			{/* <div className="triangle">&nbsp;</div>
			<div className="triangle2">&nbsp;</div>
			<div className="rectangle">&nbsp;</div>
			<div className="rectangle2">&nbsp;</div> */}

			<div className="card about__content">
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
					<h4 className="heading__2">about</h4>
					<h5 htmlFor="" className="heading__5">
						what i love to do?
					</h5>

					<p className="card__body">
						{
							"Eugene is a front-end developer, designer, and mentor. He’s currently a software engineer, focused on building microservices applications like payroll enterprise cloud (PEC). "
						}
						<br />
						<br />
						{
							"	Moreover, he created PelikulaPH an application for movie lovers like him, and an automated monitoring system. He loves to help aspirant developers not only to push them to become a developer but to learn from them as well, in his free time he enjoys devising a game and accumulating an understanding of new web tech trends."
						}
					</p>
				</div>

				<div className="tags">
					<span className="tag">$mentoring</span>
					<span className="tag">$coding</span>
					<span className="tag">$learning</span>
					<span className="tag">$goals</span>
				</div>
			</div>

			<div className="about__gallery">
				<div className="about__thumbnail">
					<Image src="/images/about.jpg" alt="" layout="fill" />
				</div>
				<div className="about__thumbnail">
					<Image
						src="/images/about2.jpg"
						alt=""
						width={450}
						height={600}
					/>
				</div>
				<div className="about__thumbnail">
					<Image
						src="/images/about3.jpg"
						alt=""
						width={450}
						height={430}
					/>
				</div>
				<div className="about__thumbnail">
					<Image src="/images/about4.jpg" alt="" layout="fill" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
