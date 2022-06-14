// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default function handler(req, res) {
	const body = JSON.parse(req.body);
	console.log(body);
	res.status(200).json({ status: "Ok" });

	let transporter = nodemailer.createTransport({
		host: "https://eugenebadato.vercel.app/",
		service: "gmail",
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
		subject: "Email From My Portfolio",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			return console.log("Error occurs", err);
		}else{
			console.log('email sent')
			return;
		}
		return console.log("Email sent!!!");
	});
}
