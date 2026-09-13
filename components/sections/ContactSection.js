import { useRef, useState, useEffect } from 'react';
import { FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { Turnstile } from '@marsidev/react-turnstile';

const SERVICES = ['Web Development', 'AI Integration', 'UI/UX Design', 'Consulting', 'Other'];

const makePrefix = (services) =>
	services.length ? `Reason for contacting: ${services.join(', ')}\n\n` : '';

export default function ContactSection() {
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailSent, setIsEmailSent] = useState(false);
	const [formData, setFormData] = useState({ name: '', email: '', services: [], message: '' });
	const [turnstileToken, setTurnstileToken] = useState(null);
	const [quoteFor, setQuoteFor] = useState(null);
	const [turnstileTheme, setTurnstileTheme] = useState('dark');
	const turnstileRef = useRef(null);

	useEffect(() => {
		const getTheme = () => document.body.className === 'light' ? 'light' : 'dark';
		setTurnstileTheme(getTheme());
		const observer = new MutationObserver(() => setTurnstileTheme(getTheme()));
		observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const handler = (e) => {
			const { chip, title } = e.detail;
			setQuoteFor(title);
			if (SERVICES.includes(chip)) {
				setFormData((prev) => ({
					...prev,
					services: prev.services.includes(chip) ? prev.services : [...prev.services, chip],
					message: '',
				}));
			}
		};
		window.addEventListener('service-selected', handler);
		return () => window.removeEventListener('service-selected', handler);
	}, []);

	const handleChange = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleChipClick = (s) => {
		setFormData((prev) => {
			const prevPrefix = makePrefix(prev.services);
			const baseMsg = prev.message.startsWith(prevPrefix)
				? prev.message.slice(prevPrefix.length)
				: prev.message;

			const newServices = prev.services.includes(s)
				? prev.services.filter((x) => x !== s)
				: [...prev.services, s];

			return { ...prev, services: newServices, message: makePrefix(newServices) + baseMsg };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!turnstileToken) return;

		setIsLoading(true);

		const res = await fetch('/api/email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ ...formData, turnstileToken }),
		});

		setIsLoading(false);
		if (res.ok) {
			setIsEmailSent(true);
			setFormData({ name: '', email: '', services: [], message: '' });
			setQuoteFor(null);
			setTurnstileToken(null);
			turnstileRef.current?.reset();
			setTimeout(() => setIsEmailSent(false), 6000);
		}
	};

	return (
		<section className="contact" id="contact">
			<div className="contact__inner">
				<div className="contact__left">
<h2 className="heading__2">
						{"Let's Build Something"} <span>Together</span>
					</h2>

					<p className="contact__desc">
						Got a project in mind? Want to collaborate on something ambitious?
						{"I'd love to hear from you."}
					</p>

					<div className="contact__info-list">
						<div className="contact__info-item">
							<FiClock />
							<span>Usually responds within 24 hours</span>
						</div>
						<div className="contact__info-item">
							<FiMapPin />
							<span>Based in the Philippines</span>
						</div>
						<a href="mailto:badatoeugenepaulm@gmail.com" className="contact__info-item contact__info-item--link">
							<FiMail />
							<span>badatoeugenepaulm@gmail.com</span>
						</a>
					</div>
				</div>

				<div className="card contact__right">
					{isEmailSent ? (
						<div className="contact__success">
							<FiCheckCircle className="contact__success-icon" />
							<h3 className="heading__2">Message sent!</h3>
							<p>{"Thanks for reaching out. I'll get back to you soon."}</p>
						</div>
					) : (
						<form className="contact__form" onSubmit={handleSubmit}>
							{/* Honeypot — hidden from humans, bots fill it */}
							<input
								type="text"
								name="website"
								tabIndex={-1}
								autoComplete="off"
								style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
								aria-hidden="true"
							/>

							<div className="contact__form-row">
								<label>
									<span>Your Name</span>
									<input
										type="text"
										name="name"
										placeholder="Eugene Badato"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</label>
								<label>
									<span>Your Email</span>
									<input
										type="email"
										name="email"
										placeholder="hello@example.com"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</label>
							</div>

							{quoteFor && (
								<div className="contact__quote-for">
									<span>Quoting for:</span>
									<span className="tag contact__chip contact__chip--active contact__chip--quote">
										{quoteFor}
									</span>
									<button type="button" className="contact__quote-clear" onClick={() => setQuoteFor(null)}>
										&times;
									</button>
								</div>
							)}

							{!quoteFor && (
								<div className="contact__service-field">
									<span>{"What are you looking for?"}</span>
									<div className="tags contact__chips">
										{SERVICES.map((s) => (
											<button
												key={s}
												type="button"
												className={`tag contact__chip${formData.services.includes(s) ? ' contact__chip--active' : ''}`}
												onClick={() => handleChipClick(s)}
											>
												{s.toLowerCase().replace(/ /g, '-')}
											</button>
										))}
									</div>
								</div>
							)}

							<label>
								<span>Your Message</span>
								<textarea
									name="message"
									rows="5"
									placeholder="Tell me about your project or idea..."
									value={formData.message}
									onChange={handleChange}
									required
								/>
							</label>

							<Turnstile
								ref={turnstileRef}
								siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
								onSuccess={setTurnstileToken}
								onExpire={() => setTurnstileToken(null)}
								options={{ theme: turnstileTheme }}
							/>

							<button
								type="submit"
								className="btn btn__primary contact__submit"
								disabled={isLoading || !turnstileToken}
							>
								{isLoading ? 'sending...' : 'send message'}
							</button>
						</form>
					)}
				</div>
			</div>

			<div className="triangle">&nbsp;</div>
			<div className="triangle2">&nbsp;</div>
		</section>
	);
}
