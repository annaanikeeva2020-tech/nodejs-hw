import nodemailer from 'nodemailer';

const smtpPort = Number(process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async ({ from, to, subject, html }) => {
  try {
    return await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`, {
      cause: error,
    });
  }
};
