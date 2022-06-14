import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailSent, setIsEmailSent] = useState(null);

	const handleSubmit = async (e) => {
		setIsLoading(true);
		e.preventDefault();

		const formData = {};
		Array.from(e.currentTarget.elements).forEach((field) => {
			if (!field.name) return;
			formData[field.name] = field.value;
		});

		const res = await fetch('/api/email', {
			method: 'post',
			body: JSON.stringify(formData),
		});
		const data = await res.json();

		e.target.reset();
		setIsLoading(false);
		emailIsSent();
	};

	const emailIsSent = () => {
		setIsEmailSent("I've received your message! Thank you :)");

		setTimeout(() => {
			setIsEmailSent(null);
		}, 5000);
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
				{isEmailSent && <div className="mb-2">{isEmailSent}</div>}
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
					{isLoading && (
						<button
							type="submit"
							className="btn btn__primary"
							disabled
						>
							Sending..
						</button>
					)}
					{!isLoading && (
						<button type="submit" className="btn btn__primary">
							message me
						</button>
					)}
				</form>
			</div>
			<div className="triangle">&nbsp;</div>
			<div className="triangle2">&nbsp;</div>
		</section>
	);
}
