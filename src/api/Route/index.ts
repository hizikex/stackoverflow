import { Router, Request, Response } from 'express';
import { userRoutes } from './user';
import { profileRoutes } from './profile';
import { questionRoutes } from './question';
import { answerRoutes } from './answer';
import { searchRoutes } from './search';
import { voteRoutes } from './vote';
import { twoFactorRoutes } from './two_factor_auth';
import { subscriptionRoutes } from './subscription';

export const routes = (): Router => {
  const router = Router();
  router.get('/', (_req: Request, res: Response) => {
    res.json('Welcome to stack_overflow');
  });

  router.use('/api/users', userRoutes);
  router.use('/api/user/profile', profileRoutes);
  router.use('/api/questions', questionRoutes);
  router.use('/api/answers', answerRoutes);
  router.use('/api/search', searchRoutes);
  router.use('/api/vote', voteRoutes);
  router.use('/api/two-factor-auth', twoFactorRoutes);
  router.use('/api/questions', subscriptionRoutes);


  return router;
};
