import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from 'react-icons/fi';
import Image from 'next/image';

import Button from '../Button';

const AboutSection = () => {
	return (
		<section className="about" id="about">
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
					<h4 className="heading__2">Meet the Dev</h4>
					<h5 htmlFor="" className="heading__5">
						My path, my passion, my purpose.
					</h5>

					<p className="card__body">
						{
							'He’s the creator of PelikulaPH, a platform for fellow movie lovers, an automated monitoring system, and a fun Hunter x Hunter API built for fans of the anime community. Eugene is also passionate about mentoring aspiring developers — not just to help them grow, but to learn from their journeys too.'
						}
						<br />
						<br />
						{
							'	When he’s not coding, you’ll find him exploring game design, experimenting with creative ideas, or staying up to date with the latest in web tech.'
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
