import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { MailOptions } from "../interfaces/two_factor_auth";

export const sendTwoFactorTokenByEmail = async (options: MailOptions) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE || "gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL || "hizikex@gmail.com",
      pass: process.env.APP_PASSWORD || "lmpjwcwkemwpmtak",
    },
  });

  let mail = {
    from: {
      name: "STACKOVERFLOW",
      address: process.env.USER || "hizikex@gmail.com",
    },
    to: options.email,
    subject: options.subject,
    text: options.text,
  };

  try {
    await transporter.sendMail(mail);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
