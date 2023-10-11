import { Router } from "express";
import * as RequestHandler from '../requestHandlers/question';
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post('/', authenticate, RequestHandler.createQuestion);

export { router as questionRoutes };
