// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default function handler(req, res) {
	const body = JSON.parse(req.body);
	console.log(body);
	res.status(200).json({ status: "Ok" });

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const message = `
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

	let mailOptions = {
		from: body.email,
		to: process.env.EMAIL,
		subject: "Email From My Portfolio",
		text: message,
		html: message.replace(/\r\n/g, "<br>"),
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			return console.log("Error occurs", err);
		}
		return console.log("Email sent!!!");
	});
}
