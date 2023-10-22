import { Router } from "express";
import * as RequestHandler from '../requestHandlers/tag';
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.get('/:tagName', authenticate, RequestHandler.getTag);
router.patch('/edit/:tagName', authenticate, RequestHandler.updateTag);

export { router as tagRoutes };
