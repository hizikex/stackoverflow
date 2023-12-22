import { Router } from "express";
import * as RequestHandler from '../requestHandlers/vote';
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post('/', authenticate, RequestHandler.vote);

export { router as voteRoutes };
