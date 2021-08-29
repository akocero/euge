import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
	FiGithub,
	FiLinkedin,
	FiTwitter,
	FiGitlab,
	FiCode,
	FiLink,
	FiPlus,
} from "react-icons/fi";
import { GiBasketballBall } from "react-icons/gi";

export default function Home() {
	return (
		<div>
			<main>
				<section className="intro">
					<div className="intro__img">
						<img src="/images/me.png" alt="" />
					</div>
					<div className="intro__content">
						<h1 className="h1">
							Hello, It's Eugene from Philippinnes
						</h1>
						<p className="text-xl">
							Let my{" "}
							<span className="text-primary">portfolio</span>{" "}
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
						<h2 className="h2">featured project.</h2>
					</div>

					<div className="featured__projects">
						<article className="article grid">
							<div className="article__img">
								<img
									src="/images/pelikula-land.png"
									alt=""
									className="land"
								/>
							</div>
							<div className="article__content">
								<h3 className="h3">PelikulaPH</h3>
								<p className="p mb-2 mt-1">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Voluptatibus natus autem
									similique nulla, adipisci temporibus ea eos
									praesentium harum deserunt.
								</p>
								<div>
									<span className="tag tag--firebase tag--sm">
										#firebase
									</span>
									<span className="tag tag--vue tag--sm">
										#vue
									</span>
									<span className="tag tag--sass tag--sm">
										#sass
									</span>
								</div>

								<br />
								<div className="cta-container article__actions">
									<button className="btn-icon">
										<FiLink />
									</button>
									<button className="btn-icon">
										<FiGithub />
									</button>
								</div>
							</div>
						</article>
					</div>
				</section>
				<section>
					<h2 className="h2">selected projects.</h2>
					<div className="projects mt-4">
						<div className="card">
							<div className="card__info">
								<h3 className="h3">PelikulaPH</h3>
								<p className="p mt-1">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores reiciendis eos
									quisquam, totam dignissimos explicabo.
								</p>
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
									<span className="tag tag--sass tag--sm">
										#sass
									</span>
								</div>

								<div className="cta-container mt-3">
									<button className="btn-icon">
										<FiLink />
									</button>
									<button className="btn-icon">
										<FiGithub />
									</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card__info">
								<h3 className="h3">
									HxH API (Hunter x Hunter API)
								</h3>
								<p className="p mt-1">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores reiciendis eos
									quisquam, totam dignissimos explicabo.
								</p>
								<div className="card__tags">
									<span className="tag tag--laravel tag--sm">
										#laravel
									</span>
									<span className="tag tag--php tag--sm">
										#php
									</span>
								</div>

								<div className="cta-container mt-3">
									<button className="btn-icon">
										<FiLink />
									</button>
									<button className="btn-icon">
										<FiGithub />
									</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card__info">
								<h3 className="h3">
									Barangay Automated System
								</h3>
								<p className="p mt-1">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores reiciendis eos
									quisquam, totam dignissimos explicabo.
								</p>
								<div className="card__tags">
									<span className="tag tag--laravel tag--sm">
										#laravel
									</span>
									<span className="tag tag--php tag--sm">
										#php
									</span>
									<span className="tag tag--bootstrap tag--sm">
										#bootstrap
									</span>
								</div>

								<div className="cta-container mt-3">
									<button className="btn-icon">
										<FiLink />
									</button>
									<button className="btn-icon">
										<FiGithub />
									</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card__info">
								<h3 className="h3">Payroll Enterprise Cloud</h3>
								<p className="p mt-1">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores reiciendis eos
									quisquam, totam dignissimos explicabo.
								</p>
								<div className="card__tags">
									<span className="tag tag--laravel tag--sm">
										#laravel
									</span>
									<span className="tag tag--php tag--sm">
										#php
									</span>
									<span className="tag tag--vue tag--sm">
										#vue
									</span>
									<span className="tag tag--bootstrap tag--sm">
										#bootstrap
									</span>
									<span className="tag tag--sass tag--sm">
										#sass
									</span>
								</div>

								<div className="cta-container mt-3">
									<button className="btn-icon">
										<FiLink />
									</button>
									<button className="btn-icon">
										<FiGithub />
									</button>
								</div>
							</div>
						</div>

						<div className="card">
							<div className="card__info">
								<h3 className="h3">EugeCSS (CSS Framwork)</h3>
								<p className="p mt-1">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Dolores reiciendis eos
									quisquam, totam dignissimos explicabo.
								</p>
								<div className="card__tags">
									<span className="tag tag--css tag--sm">
										#css
									</span>
									<span className="tag tag--javascript tag--sm">
										#javascript
									</span>
									<span className="tag tag--sass tag--sm">
										#sass
									</span>
								</div>

								<div className="cta-container mt-3">
									<button className="btn-icon">
										<FiLink />
									</button>
									<button className="btn-icon">
										<FiGithub />
									</button>
								</div>
							</div>
						</div>
						<div className="card card--add-prodject">
							<FiPlus />
						</div>
					</div>
				</section>
				<section className="mt-7">
					<h2 className="h2">skills.</h2>
					<p className="p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam, qui rem? Modi quos eos unde, itaque sapiente
						eaque, in qui vitae alias ex natus ratione!
					</p>
					<div className="mt-3">
						<span className="tag tag--javascript">#javascript</span>
						<span className="tag tag--php">#php</span>
						<span className="tag tag--laravel">#laravel</span>
						<span className="tag tag--bootstrap">#bootstrap</span>
						<span className="tag tag--react">#react</span>
						<span className="tag tag--vue">#vue</span>
						<span className="tag tag--sass">#sass</span>
						<span className="tag tag--firebase">#firebase</span>
						<span className="tag tag--mysql">#mysql</span>
						<span className="tag tag--nextjs">#nextjs</span>
					</div>
				</section>
				<section className="mt-7">
					<h2 className="h2">experieces.</h2>
					<p className="p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam, qui rem? Modi quos eos unde, itaque sapiente
						eaque, in qui vitae alias ex natus ratione!
					</p>
				</section>
				<section className="mt-7 expi">
					<h2 className="h2">What do I love doing?.</h2>
					<p className="p">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quibusdam, qui rem? Modi quos eos unde, itaque sapiente
						eaque, in qui vitae alias ex natus ratione!
					</p>

					<ul className="expi__list">
						<li className="expi__item">
							<GiBasketballBall />
							<h3 className="h3">Basket Ball</h3>
							<p className="p">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Mollitia voluptatem alias
								quasi incidunt doloremque!
							</p>
						</li>
						<li className="expi__item">
							<GiBasketballBall />
							<h3 className="h3">Basket Ball</h3>
							<p className="p">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Mollitia voluptatem alias
								quasi incidunt doloremque!
							</p>
						</li>
						<li className="expi__item">
							<GiBasketballBall />
							<h3 className="h3">Basket Ball</h3>
							<p className="p">
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Mollitia voluptatem alias
								quasi incidunt doloremque!
							</p>
						</li>
					</ul>
				</section>
			</main>
			<footer></footer>
		</div>
	);
}
