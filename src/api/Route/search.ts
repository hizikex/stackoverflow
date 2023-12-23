import { Router } from 'express';
import * as RequestHandler from '../requestHandlers/search';

const router = Router();

router.get('/', RequestHandler.searchQuestionOrAnswer);

export { router as searchRoutes };
