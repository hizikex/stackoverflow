import { Router } from "express";
import * as RequestHandler from '../requestHandlers/question';
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post('/', authenticate, RequestHandler.createQuestion);
router.get('/questionList', authenticate, RequestHandler.ListQuestions);
router.delete('/:questionId', authenticate, RequestHandler.deleteQuestion);

export { router as questionRoutes };
