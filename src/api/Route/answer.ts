import { Router } from "express";
import * as RequestHandler from '../requestHandlers/answer';
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post('/:questionId', authenticate, RequestHandler.createAnswer);
router.patch('/:answerId/edit', authenticate, RequestHandler.updateAnswer);
router.get('/:questionId', authenticate, RequestHandler.getAnswers);
router.delete('/:answerId', authenticate, RequestHandler.deleteAnswer);

export { router as answerRoutes }
