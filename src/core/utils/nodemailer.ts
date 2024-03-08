import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
import { MailOptions } from "../interfaces/two_factor_auth";
import { logger } from "./logger";

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
    html: `
      <html>
        <head>
        <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0; /* Change the background color here */
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #333333;
          margin-top: 0;
        }
        p {
          color: #666666;
        }
        .token {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
          font-family: 'Times New Roman', Times, serif;
        }
      </style>
        </head>
        <body>
          <div class="container">
            <h2>${options.subject}</h2>
            <p>Your two-factor token is: <span class="token">${options.html}</span></p>
          </div>
        </body>
      </html>
    `
  };

  try {
    await transporter.sendMail(mail);
    logger.info("Email sent successfully");
  } catch (error) {
    logger.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};
