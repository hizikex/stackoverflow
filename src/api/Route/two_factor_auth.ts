import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import * as RequestHandler from '../requestHandlers/two_factor_auth';

const router = Router();

router.patch('/enable-disable', authenticate, RequestHandler.enableTwoFactorAuth);
router.post('/send-token', authenticate, RequestHandler.sendTwoFactorAuthToken);
router.post('/verify', authenticate, RequestHandler.verifyTwoFactorAuth);

export { router as twoFactorRoutes }
