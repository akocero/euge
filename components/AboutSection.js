import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiExternalLink,
	FiPlus,
} from "react-icons/fi";
const AboutSection = () => {
	return (
		<section className="about" id="about">
			<div className="triangle">&nbsp;</div>
			<div className="triangle2">&nbsp;</div>
			<div className="rectangle">&nbsp;</div>
			<div className="rectangle2">&nbsp;</div>
			<img
				src="../images/about2.jpg"
				alt=""
				className="about__float-img-1"
			/>

			<img
				src="../images/about3.jpg"
				alt=""
				className="about__float-img-2"
			/>
			<div className="about__wrapper">
				<div className="card about__content">
					<div className="card__actions">
						<button className="btn btn__link">
							<FiGithub />
						</button>
						<button className="btn btn__link">
							<FiExternalLink />
						</button>
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
				<div className="about__img-container">
					<img src="../images/about.jpg" alt="" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
