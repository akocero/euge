import Image from "next/image";

export default function ContactSection() {
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = {};
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return;
			formData[field.name] = field.value;
		});

		fetch("/api/email", {
			method: "post",
			body: JSON.stringify(formData),
		});
		console.log(formData);
	};
	return (
		<section className="contact" id="contact">
			<div className="contact__img">
				<Image
					src="/images/me.png"
					alt=""
					width={350}
					height={396}
					priority
					quality={100}
				/>
			</div>
			<div className="card">
				<h2 className="heading__2">{"Let's Work Together"}</h2>
				<form action="post" onSubmit={handleSubmit}>
					<label>
						<span>Your Email</span>
						<input
							type="email"
							placeholder="Email..."
							name="email"
							required
						/>
					</label>
					<label>
						<span>Message</span>
						<textarea
							name="message"
							id=""
							cols="30"
							rows="5"
							placeholder="Message..."
							required
						></textarea>
					</label>
					<button type="submit" className="btn btn__primary">
						message me
					</button>
				</form>
			</div>
			<div className="triangle">&nbsp;</div>
			<div className="triangle2">&nbsp;</div>
		</section>
	);
}
