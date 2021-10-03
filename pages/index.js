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
				<p>Hello, It’s Me Eugene.</p>
				<h1>Let my portfolio describe me.</h1>

				<div className="intro__actions d-flex">
					<button className="btn btn__primary">project</button>

					<div classNam="intro__links ">
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
					<h2>feature project</h2>
					<label htmlFor="">what i'm doing?</label>
				</div>

				<article className="featured__item">
					<div>
						<div className="featured__img-container">
							<img src="" alt="" />
						</div>
						<div className="featured__content">
							<h3 className="featured__title">Pelikula PH</h3>
							<label htmlFor="featured__subtitle">
								IMDB + Mobilarian Alternative
							</label>
							<p className="feature_body">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's.
							</p>
							<div className="tags">
								<span className="tag">$javascript</span>
								<span className="tag">$vue</span>
								<span className="tag">$firebase</span>
							</div>
						</div>
					</div>
				</article>

				<article className="featured__item">
					<div>
						<div className="featured__img-container">
							<img src="" alt="" />
						</div>
						<div className="featured__content">
							<h3 className="featured__title">Pelikula PH</h3>
							<label htmlFor="featured__subtitle">
								IMDB + Mobilarian Alternative
							</label>
							<p className="feature_body">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's.
							</p>
							<div className="tags">
								<span className="tag">$javascript</span>
								<span className="tag">$vue</span>
								<span className="tag">$firebase</span>
							</div>
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

				<div className="experiece__list">
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle"></h5>
						<p className="experience__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting. (1 Year)
						</p>
					</div>
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle"></h5>
						<p className="experience__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting. (1 Year)
						</p>
					</div>
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle"></h5>
						<p className="experience__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting. (1 Year)
						</p>
					</div>
					<div className="experience__item">
						<h4 className="experience__title">
							Mustard Seed Systems Corp.
						</h4>
						<h5 className="experience__subtitle"></h5>
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
