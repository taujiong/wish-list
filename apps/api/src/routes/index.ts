import Router from 'koa-router';
import wishRouter from './wish';

const router = new Router({
  prefix: '/api',
});

router.use(wishRouter.routes(), wishRouter.allowedMethods());

export default router;
