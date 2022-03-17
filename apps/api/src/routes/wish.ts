import Router from 'koa-router';
import { WishRepo } from '../models';

const router = new Router({
  prefix: '/wishes',
});

// TODO: order, pagination should comes from frontend
router.get('/', async (ctx) => {
  const wishes = await WishRepo.findAll({
    order: [['lastUpdateAt', 'DESC']],
  });
  ctx.body = wishes;
});

router.get('/:id', async (ctx) => {
  const id = ctx.params.id;
  const wish = await WishRepo.findOne({
    where: {
      id,
    },
  });
  ctx.body = wish ?? 'Your wish does not exist';
});

router.post('/', async (ctx) => {
  const newWish = await WishRepo.create(ctx.request.body);
  ctx.body = newWish;
});

router.put('/:id', async (ctx) => {
  const id = ctx.params.id;
  await WishRepo.update(ctx.request.body, {
    where: { id },
  });

  const updatedWish = await WishRepo.findOne({
    where: { id },
  });

  ctx.body = updatedWish;
});

router.delete('/:id', async (ctx) => {
  const id = ctx.params.id;
  await WishRepo.destroy({
    where: { id },
  });
});

export default router;
