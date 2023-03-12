import { createTransport } from 'nodemailer';

export default async function contact(req, res) {
	const body = JSON.parse(req.body);

	if (req.method === 'POST') {
		const transporter = createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: process.env.NEXT_PUBLIC_EMAIL,
				pass: process.env.NEXT_PUBLIC_GMAIL_TOKEN,
			},
		});

		const data = {
			from: body.email,
			to: process.env.NEXT_PUBLIC_EMAIL,
			subject: `[PORTAFOLIO] Nuevo mensaje de ${body.name} desde la página de contácto.`,
			text: `Nombre: ${body.name}\nEmail:${body.email}\nMensaje:${body.message}`,
		};

		await transporter.sendMail(data, (err, info) => {
			if (err) {
				res.status(500).json({
					message: 'There was an error',
					body: err,
				});
			} else {
				res.status(200).json(info);
			}
		});
	}
}
