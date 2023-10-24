import { Router } from "express";
import * as RequestHandler from '../requestHandlers/answer';
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post('/:questionId', authenticate, RequestHandler.createAnswer)

export { router as answerRoutes }