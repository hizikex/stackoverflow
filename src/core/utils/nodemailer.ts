import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';
import { MailOptions } from '../interfaces/two_factor_auth';

export const sendTwoFactorTokenByEmail = async (options: MailOptions) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });

  let mail = {
    from: process.env.USER,
    to: options.email,
    subject: options.subject,
    text: options.text
  };

  transporter.sendMail(mail);
};
