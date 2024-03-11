import ConflictError from "../errors/ConflictError";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";
import { QuestionSubscriptionResponse, QuestionUnsubscriptionResponse } from "../interfaces/subscription";
import { Question } from "../models/question";
import { Subscription } from "../models/subscriptions";
import { User } from "../models/users";
import { logger } from "../utils/logger";
import { MailOptions, sendMail } from "../utils/nodemailer";

export const processQuestionSubscription = async (
  userId: number,
  questionId: number
): Promise<QuestionSubscriptionResponse> => {
  const user = await User.findOne({ where: { id: userId } });
  
  if (!user) {
    throw new ResourceNotFoundError("User not found", null);
  }

  const question = await Question.findOne({ where: { id: questionId } });

  if (!question) {
    throw new ResourceNotFoundError("Question not found", null);
  }

  const subscribe = await Subscription.create({
    user_id: user.id,
    question_id: question.id,
  });

  const options: MailOptions = {
    to: user.email,
    subject: "Subscribe to question",
    html: `
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Subscription Confirmation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f0f0;
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
                    font-size: 16px;
                    line-height: 1.5;
                }
                .username {
                    font-weight: bold;
                    color: #007bff;
                }
                .question-id {
                    font-weight: bold;
                    color: #28a745;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Subscription Confirmation</h2>
                <p>Hi <span class="username">${user.username}</span>!</p>
                <p>Your subscription to question with ID: <span class="question-id">${question.id}</span> was successful.</p>
            </div>
        </body>
        </html>        
  `,
  };
  
  try {
    await sendMail(options);
    logger.info("Subscription to question was successful");
  } catch (error) {
    logger.error("Mail not sent");
    throw new ConflictError("Mail not sent", null);
  }

  return {
    message: `Hi ${user.username}! Your subscription to question with id: ${question.id} was successful`,
    data: subscribe,
  };
};
