const companies = [
	{ src: '/images/cw/fb_cw.png', alt: 'Facebook' },
	{ src: '/images/cw/mssc_cw.png', alt: 'MSSC' },
	{ src: '/images/cw/pami_cw.jpg', alt: 'PAMI' },
	{ src: '/images/cw/pr_cw.png', alt: 'PR' },
	{ src: '/images/cw/sti_cw.png', alt: 'STI' },
];

const track = [...companies, ...companies];

export default function LogoMarqueeSection() {
	return (
		<section className="marquee-section">
			<p className="marquee-section__label">People &amp; Orgs I&apos;ve Built For</p>
			<div className="marquee-section__track-wrapper">
				<div className="marquee-section__fade marquee-section__fade--left" />
				<div className="marquee-section__track">
					{track.map((company, i) => (
						<div className="marquee-section__item" key={i}>
							<img
								src={company.src}
								alt={company.alt}
								className="marquee-section__logo"
							/>
						</div>
					))}
				</div>
				<div className="marquee-section__fade marquee-section__fade--right" />
			</div>
		</section>
	);
}
