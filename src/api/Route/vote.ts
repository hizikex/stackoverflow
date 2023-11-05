import { Router } from "express";
import * as RequestHandler from '../requestHandlers/vote';

const router = Router();

router.post('/:answerId', RequestHandler.vote);

export { router as voteRoutes };
