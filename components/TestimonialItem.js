import Image from "next/image";

export default function TestimonialItem() {
	return (
		<div className="card testimonials__item">
			<div className="testimonials__profile-img">
				<Image
					src="/images/me.png"
					alt=""
					width={350}
					height={396}
					priority
					quality={100}
				/>
			</div>
			<div className="card__content testimonials__content">
				<p className="lead ">
					Jomar Yumul Regalrio <br /> <span>Sr. Web Developer</span>{" "}
				</p>

				<p className="card__body">
					As a Mentee of sir eugene is an amazing experience, I really
					appreciate your mentorship and guidance. Thank you so much
					Master Yujin.
				</p>
			</div>
		</div>
	);
}
