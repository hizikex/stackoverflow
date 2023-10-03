import { Router, Request, Response } from "express";
import { userRoutes } from "./user";

export const routes = (): Router => {
    const router = Router();
    router.get('/', (_req: Request, res: Response) => {
        res.send('Welcome to stack_overflow');
    });

    router.use('/api/users', userRoutes)

    return router;
}
