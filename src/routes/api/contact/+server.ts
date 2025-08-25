import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { MAIL_USER, MAIL_PASS, MAIL_TO } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, message } = await request.json();

	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: MAIL_USER,
				pass: MAIL_PASS
			}
		});

		await transporter.sendMail({
			from: MAIL_USER,
			to: MAIL_TO,
			replyTo: email,
			subject: `Novo contato de ${name}`,
			text: `
            Nome: ${name}
            Email: ${email}
            Mensagem: ${message}
        `
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err) {
		return new Response(JSON.stringify({ success: false }), { status: 500 });
	}
};
