import twilio from 'twilio';
import { logger } from './logger';
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID || 'AC12ca52fa1dc573791bea4d5e3656124a',
    process.env.TWILIO_AUTH_TOKEN || '814db6249adec2b2119eb3825eefcf00'
);
export const sendSMS = (from: string | undefined, to: string, body: string) => {
    client.messages
    .create({ from, to, body })
    .then((message) => {
        logger.info('Your 2FA Token');
    }).catch((error) => {
        logger.error(error);
    })
};
