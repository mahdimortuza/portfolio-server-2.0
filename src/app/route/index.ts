import { Router } from 'express';
import { AuthRoute } from '../modules/auth/auth.route';
import { BlogRoute } from '../modules/blog/blog.route';
import { ProjectRoute } from '../modules/project/project.route';
import { TechnologyRoute } from '../modules/technology/technology.route';
import { UserRoute } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/technology',
    route: TechnologyRoute,
  },
  {
    path: '/blog',
    route: BlogRoute,
  },
  {
    path: '/project',
    route: ProjectRoute,
  },
  {
    path: '/user',
    route: UserRoute,
  },
  {
    path: '/auth',
    route: AuthRoute,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
