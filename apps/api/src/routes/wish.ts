import Router from 'koa-router';
import { createWish, getAllWishes, getWishById } from '../services';

const router = new Router({
  prefix: '/wishes',
});

// TODO: order, pagination should comes from frontend
router.get('/', async (ctx) => {
  const wishes = await getAllWishes();
  ctx.body = wishes;
});

router.get('/:id', async (ctx) => {
  const id = ctx.params.id;
  const wish = await getWishById(id);

  ctx.body = wish;
});

router.post('/', async (ctx) => {
  // TODO：ctx.request.body 可以用 zod 这样的 json schema 去校验，然后抛 400 错误
  // 感觉不应该 sequelize 提供的校验，不如 json schema 校验方式，可以在前端复用
  const newWish = await createWish(ctx.request.body);
  ctx.body = newWish;
});

router.put('/:id', async (ctx) => {
  const id = ctx.params.id;
  const wish = await getWishById(id);
  await wish.update(ctx.request.body);

  await wish.reload(); // 此时 wish 应该是最新的了
  ctx.body = wish;
});

router.delete('/:id', async (ctx) => {
  const id = ctx.params.id;
  const wish = await getWishById(id);
  await wish.destroy();

  ctx.body = wish;
});

export default router;
