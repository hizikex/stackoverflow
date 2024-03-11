import { Router } from 'express';
import * as RequestHandler from '../requestHandlers/subscription';
import { authenticate } from '../middleware/authenticate';

const router = Router();

router.post('/:questionId/subscribe', authenticate, RequestHandler.subscribeToQuestion);

export { router as subscriptionRoutes };
