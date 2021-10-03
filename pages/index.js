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
			<div className="d-flex">
				<button className="btn btn__primary">Project</button>
				<div className="d-flex">
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
			<div className="d-grid">
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
						<h3 className="card__title">PelikulaPH</h3>
						<h4 className="card__subtitle">
							IMDB + Mobilarian Alternative
						</h4>
						<p className="card__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's.
						</p>
					</div>
					<div className="tags">
						<span>$javascript</span>
						<span>$vue</span>
						<span>$firebase</span>
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
						<h3 className="card__title">PelikulaPH</h3>
						<h4 className="card__subtitle">
							IMDB + Mobilarian Alternative
						</h4>
						<p className="card__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's.
						</p>
					</div>
					<div className="tags">
						<span>$javascript</span>
						<span>$vue</span>
						<span>$firebase</span>
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
						<h3 className="card__title">PelikulaPH</h3>
						<h4 className="card__subtitle">
							IMDB + Mobilarian Alternative
						</h4>
						<p className="card__body">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's.
						</p>
					</div>
					<div className="tags">
						<span>$javascript</span>
						<span>$vue</span>
						<span>$firebase</span>
					</div>
				</div>
			</div>
		</div>
	);
}
