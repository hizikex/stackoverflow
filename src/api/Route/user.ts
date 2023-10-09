import { Router } from "express";
import * as RequestHandler from '../requestHandlers/user';
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post('/', RequestHandler.registerUser);
router.post('/login', RequestHandler.loginUser);

export { router as userRoutes };
