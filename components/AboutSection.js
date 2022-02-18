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
		<section className="about">
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
						<h4 className="card__title">About</h4>
						<h5 htmlFor="" className="card__subtitle">
							what i love?
						</h5>

						<div className="card__body">
							{
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. dummy text of the printing and typesetting industry."
							}
						</div>
					</div>

					<div className="tags">
						<span className="tag">$teaching</span>
						<span className="tag">$coding</span>
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
