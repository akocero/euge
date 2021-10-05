import Head from "next/head";
import Image from "next/image";
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiExternalLink,
	FiPlus,
} from "react-icons/fi";

export default function Home() {
	return (
		<div className="wrapper">
			<section className="intro">
				<div className="triangle">&nbsp;</div>
				<div className="triangle2">&nbsp;</div>
				<p className="intro__body">Hello, It’s Me Eugene.</p>
				<h1 className="intro__title">
					Let my <span>portfolio</span> describe me.
				</h1>

				<div className="intro__actions">
					<button className="btn btn__primary">project</button>

					<div className="intro__links ">
						<button className="btn btn__link">
							<FiGithub />
						</button>
						<button className="btn btn__link">
							<FiGitlab />
						</button>
						<button className="btn btn__link">
							<FiLinkedin />
						</button>
						<button className="btn btn__link">
							<FiTwitter />
						</button>
					</div>
				</div>
			</section>

			<section className="featured">
				<div className="section__heading">
					<h2>featured project</h2>
					<label htmlFor="">what i'm doing?</label>
				</div>

				<article className="featured__item">
					<div className="featured__img-container">
						<img src="./images/pelikula.png" alt="" />
					</div>
					<div className="featured__content">
						<h3 className="featured__title">PelikulaPH</h3>
						<label className="featured__subtitle">
							IMDB + Mobilarian Alternative
						</label>
						<p className="featured__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's.
						</p>

						<div className="tags">
							<span className="tag">$javascript</span>
							<span className="tag">$vue</span>
							<span className="tag">$firebase</span>
							<span className="tag">$tmdbApi</span>
							<span className="tag">$scss</span>
						</div>

						<div className="featured__actions">
							<button className="btn btn__primary">
								view website
							</button>
							<button className="btn btn__link">
								<FiGithub />
							</button>
						</div>
					</div>
				</article>

				<article className="featured__item">
					<div className="featured__img-container">
						<img src="./images/pelikula.png" alt="" />
					</div>
					<div className="featured__content">
						<h3 className="featured__title">PelikulaPH</h3>
						<label className="featured__subtitle">
							IMDB + Mobilarian Alternative
						</label>
						<p className="featured__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's.
						</p>

						<div className="tags">
							<span className="tag">$javascript</span>
							<span className="tag">$vue</span>
							<span className="tag">$firebase</span>
							<span className="tag">$api</span>
							<span className="tag">$scss</span>
						</div>

						<div className="featured__actions">
							<button className="btn btn__primary">
								view website
							</button>
							<button className="btn btn__link">
								<FiGithub />
							</button>
						</div>
					</div>
				</article>
			</section>
			<section className="project">
				<div className="section__heading">
					<h2>noteworthy projects</h2>
					<label htmlFor="">what i have done?</label>
				</div>

				<div className="card__list">
					<div className="card">
						<div className="card__actions">
							<button className="btn btn__link">
								<FiGithub />
							</button>
							<button className="btn btn__link">
								<FiExternalLink />
							</button>
						</div>
						<div className="card__content">
							<h4 className="card__title">Pelikula PH</h4>
							<h5 htmlFor="" className="card__subtitle">
								IMDB + Mobilarian Alternative
							</h5>

							<div className="card__body">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's.
							</div>
						</div>

						<div className="tags">
							<span className="tag">$javascript</span>
							<span className="tag">$vue</span>
							<span className="tag">$firebase</span>
						</div>
					</div>
					<div className="card">
						<div className="card__actions">
							<button className="btn btn__link">
								<FiGithub />
							</button>
							<button className="btn btn__link">
								<FiExternalLink />
							</button>
						</div>
						<div className="card__content">
							<h4 className="card__title">HxH API</h4>
							<h5 htmlFor="" className="card__subtitle">
								IMDB + Mobilarian Alternative
							</h5>

							<div className="card__body">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's.
							</div>
						</div>

						<div className="tags">
							<span className="tag">$javascript</span>
							<span className="tag">$vue</span>
							<span className="tag">$firebase</span>
						</div>
					</div>
					<div className="card">
						<div className="card__actions">
							<button className="btn btn__link">
								<FiGithub />
							</button>
							<button className="btn btn__link">
								<FiExternalLink />
							</button>
						</div>
						<div className="card__content">
							<h4 className="card__title">
								Payroll Cloud Enterprise
							</h4>
							<h5 htmlFor="" className="card__subtitle">
								IMDB + Mobilarian Alternative
							</h5>

							<div className="card__body">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's.
							</div>
						</div>

						<div className="tags">
							<span className="tag">$javascript</span>
							<span className="tag">$vue</span>
							<span className="tag">$firebase</span>
						</div>
					</div>
					<div className="card">
						<div className="card__actions">
							<button className="btn btn__link">
								<FiGithub />
							</button>
							<button className="btn btn__link">
								<FiExternalLink />
							</button>
						</div>
						<div className="card__content">
							<h4 className="card__title">Pelikula PH</h4>
							<h5 htmlFor="" className="card__subtitle">
								IMDB + Mobilarian Alternative
							</h5>

							<div className="card__body">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's.
							</div>
						</div>

						<div className="tags">
							<span className="tag">$javascript</span>
							<span className="tag">$vue</span>
							<span className="tag">$firebase</span>
						</div>
					</div>

					<div className="card">
						<div className="card__actions">
							<button className="btn btn__link">
								<FiGithub />
							</button>
							<button className="btn btn__link">
								<FiExternalLink />
							</button>
						</div>
						<div className="card__content">
							<h4 className="card__title">Pelikula PH</h4>
							<h5 htmlFor="" className="card__subtitle">
								IMDB + Mobilarian Alternative
							</h5>

							<div className="card__body">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's.
							</div>
						</div>

						<div className="tags">
							<span className="tag">$javascript</span>
							<span className="tag">$vue</span>
							<span className="tag">$firebase</span>
						</div>
					</div>
				</div>
			</section>
			<section className="experience">
				<div className="section__heading">
					<h2>experiences</h2>
					<label htmlFor="">what i have done?</label>
				</div>

				<div className="experience__list">
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle">Web Developer</h5>
						<p className="experience__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting. (1 Year)
						</p>
					</div>
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle">Web Developer</h5>
						<p className="experience__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting. (1 Year)
						</p>
					</div>
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle">Web Developer</h5>
						<p className="experience__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting. (1 Year)
						</p>
					</div>
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle">Web Developer</h5>
						<p className="experience__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting. (1 Year)
						</p>
					</div>
				</div>
			</section>
			<section className="about">
				<div className="section__heading">
					<h2>about</h2>
					<label htmlFor="">what i love?</label>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
			</section>
		</div>
	);
}
