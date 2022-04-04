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
import Link from "next/link";

const AboutSection = () => {
	return (
		<section className="about" id="about">
			{/* <div className="triangle">&nbsp;</div>
			<div className="triangle2">&nbsp;</div>
			<div className="rectangle">&nbsp;</div>
			<div className="rectangle2">&nbsp;</div> */}

			<div className="card about__content">
				<div className="card__actions">
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
							"	Moreover, he created PelikulaPH an application for movie lovers like him, and an automated monitoring system. He loves to help aspirant developers not only to help them but to learn from it as well, in his free time he enjoys building a game and learning new tech trends."
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
					<Image
						src="/images/about2.jpg"
						alt=""
						width={1503}
						height={2015}
					/>
				</div>
				<div className="about__thumbnail">
					<Image src="/images/about.jpg" alt="" layout="fill" />
				</div>
				<div className="about__thumbnail">
					<Image
						src="/images/about3.jpg"
						alt=""
						width={1880}
						height={1736}
					/>
				</div>
				<div className="about__thumbnail">
					<Image src="/images/about.jpg" alt="" layout="fill" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
