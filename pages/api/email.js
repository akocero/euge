// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');

export default function handler(req, res) {
	const body = JSON.parse(req.body);
	console.log(body);

	let transporter = nodemailer.createTransport({
		host: 'https://eugenebadato.vercel.app/',
		service: 'gmail',
		port: 465,
		secureConnection: true,
		auth: {
			user: process.env.MAIL_EMAIL,
			pass: process.env.MAIL_PASSWORD,
		},
	});

	const message = `
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

	let mailOptions = {
		from: body.email,
		to: process.env.MAIL_EMAIL,
		subject: 'Email From My Portfolio',
		text: message,
		html: message.replace(/\r\n/g, '<br>'),
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			res.status(400).json({ status: 'Bad' });
			console.log('Error occurs', err);
			return;
		} else {
			console.log('email sent');
			res.status(200).json({ status: 'Ok' });
			return;
		}
		return console.log('Email sent!!!');
	});
}
