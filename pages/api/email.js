import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ status: 'Method not allowed' });
	}

	const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

	// Honeypot check — bots fill this, humans don't see it
	if (body.website) {
		return res.status(200).json({ status: 'Ok' });
	}

	// Turnstile verification
	const token = body.turnstileToken;
	if (!token) {
		return res.status(400).json({ status: 'Missing captcha token' });
	}

	const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			secret: process.env.TURNSTILE_SECRET_KEY,
			response: token,
		}),
	});

	const verifyData = await verifyRes.json();
	if (!verifyData.success) {
		return res.status(400).json({ status: 'Captcha failed' });
	}

	try {
		const services = Array.isArray(body.services) && body.services.length
			? body.services.join(', ')
			: 'Not specified';

		const message = body.message || '';
		const cleanMessage = message.startsWith('Reason for contacting:')
			? message.replace(/^Reason for contacting:[^\n]*\n\n/, '')
			: message;

		await resend.emails.send({
			from: process.env.RESEND_FROM,
			to: ['badatoeugenepaulm@gmail.com'],
			subject: `New message from ${body.name || body.email}`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; background: #0a0a0a; color: #e0e0e0; padding: 32px; border-radius: 12px;">
					<div style="border-left: 4px solid #00e676; padding-left: 16px; margin-bottom: 28px;">
						<p style="margin: 0; font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px;">Portfolio Contact</p>
						<h2 style="margin: 4px 0 0; color: #00e676; font-size: 22px;">New Message</h2>
					</div>

					<table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
						<tr>
							<td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px; width: 110px;">Name</td>
							<td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; font-weight: 600;">${body.name || 'N/A'}</td>
						</tr>
						<tr>
							<td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e; color: #888; font-size: 13px;">Email</td>
							<td style="padding: 10px 0; border-bottom: 1px solid #1e1e1e;"><a href="mailto:${body.email}" style="color: #00e676; text-decoration: none;">${body.email}</a></td>
						</tr>
						<tr>
							<td style="padding: 10px 0; color: #888; font-size: 13px;">Services</td>
							<td style="padding: 10px 0;">${services}</td>
						</tr>
					</table>

					<div style="background: #111; border-radius: 8px; padding: 20px;">
						<p style="margin: 0 0 10px; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
						<p style="margin: 0; white-space: pre-wrap; line-height: 1.7;">${cleanMessage}</p>
					</div>
				</div>
			`,
		});
		res.status(200).json({ status: 'Ok' });
	} catch (err) {
		console.error('Resend error:', err);
		res.status(400).json({ status: 'Bad' });
	}
}
