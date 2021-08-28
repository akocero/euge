const Projects = () => {
	return (
		<section className="section">
			<h4 className="text-xl">web apps projects</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Quibusdam, qui rem? Modi quos eos unde, itaque sapiente eaque,
				in qui vitae alias ex natus ratione!
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
		</section>
	);
};

export default Projects;
