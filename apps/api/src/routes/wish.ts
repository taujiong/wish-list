import Router from 'koa-router';

const router = new Router({
  prefix: '/wishes',
});

router.get('/', (ctx) => {
  ctx.body = 'all wishes';
});

router.get('/:id', (ctx) => {
  ctx.body = `wish ${ctx.params.id}`;
});

export default router;
