import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FiGithub, FiLinkedin, FiTwitter, FiGitlab } from "react-icons/fi";

export default function Home() {
	return (
		<main>
			<section className="intro">
				<div className="intro__img">
					<img src="/images/me.png" alt="" />
				</div>
				<div className="intro__content">
					<h1 className="h1">Hello, It's Eugene from Philippinnes</h1>
					<p className="text-xl">
						Let my <span className="text-primary">portfolio</span>{" "}
						describe me.
					</p>
					<div className="cta-container mt-4">
						<button className="btn mr-3">Projects</button>
						<button className="btn-icon">
							<FiGithub />
						</button>
						<button className="btn-icon">
							<FiGitlab />
						</button>
						<button className="btn-icon">
							<FiTwitter />
						</button>
						<button className="btn-icon">
							<FiLinkedin />
						</button>
					</div>
				</div>
			</section>
			<section className="featured">
				<div className="heading">
					<h1 className="h1">What am i doing now ?</h1>
					<h2 className="h2">Featured Projects</h2>
				</div>

				<div className="featured__projects">
					<article className="article grid">
						<div className="article__img">
							<img src="" alt="" />
						</div>
						<div className="article__content">
							<h3 className="h3">PelikulaPH</h3>
							<p className="p">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Voluptatibus natus autem
								similique nulla, adipisci temporibus ea eos
								praesentium harum deserunt! Nobis error cum,
								distinctio nemo sint ullam modi fugiat
								doloremque quas rerum quisquam eius neque
								molestias eum soluta odio. Corrupti?
							</p>
						</div>
					</article>
					<article className="article grid">
						<div className="article__img">
							<img src="" alt="" />
						</div>
						<div className="article__content">
							<h3 className="h3">PelikulaPH</h3>
							<p className="p">
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Voluptatibus natus autem
								similique nulla, adipisci temporibus ea eos
								praesentium harum deserunt! Nobis error cum,
								distinctio nemo sint ullam modi fugiat
								doloremque quas rerum quisquam eius neque
								molestias eum soluta odio. Corrupti?
							</p>
						</div>
					</article>
				</div>
			</section>
			<div className="projects mt-4">
				<div className="card">
					<img
						src="./images/projects/pelikula/pelikula.webp"
						alt=""
					/>

					<div className="card__info">
						<label className="card__header">
							<strong>Pelikula</strong> - Movie Web Application
						</label>
						<div className="card__tags">
							<span className="tag tag--firebase tag--sm">
								#firebase
							</span>
							<span className="tag tag--react tag--sm">
								#react
							</span>
							<span className="tag tag--javascript tag--sm">
								#javascript
							</span>
							<span className="tag tag--sass tag--sm">#sass</span>
						</div>
					</div>
				</div>

				<div className="card">
					<img
						src="./images/projects/brgy-system/brgy-system.png"
						alt=""
					/>

					<div className="card__info">
						<label className="card__header">
							<strong>Pelikula</strong> - Movie Web Application
						</label>
						<div className="card__tags">
							<span className="tag tag--firebase tag--sm">
								#firebase
							</span>
							<span className="tag tag--react tag--sm">
								#react
							</span>
							<span className="tag tag--javascript tag--sm">
								#javascript
							</span>
							<span className="tag tag--sass tag--sm">#sass</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
