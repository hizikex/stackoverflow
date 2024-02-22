import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import * as RequestHandler from '../requestHandlers/two_factor_auth'

const router = Router();

router.patch('/enable', authenticate, RequestHandler.enableTwoFactorAuth);

export { router as twoFactorRoutes }