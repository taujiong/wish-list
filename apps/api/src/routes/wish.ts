import { Wish, WishEditDto } from 'contract';
import Router from 'koa-router';

const wishes: Wish[] = [];
let id = 0;

const router = new Router({
  prefix: '/wishes',
});

router.get('/', (ctx) => {
  ctx.body = wishes;
});

router.get('/:id', (ctx) => {
  const id = ctx.params.id;
  ctx.body =
    wishes.find((wish) => wish.id === id) ?? 'Your wish does not exist';
});

router.post('/', (ctx) => {
  const data = ctx.request.body as WishEditDto;

  const newWish = {
    id: id.toString(),
    ...data,
  };
  wishes.push(newWish);
  id++;
  ctx.body = newWish;
});

router.put('/:id', (ctx) => {
  const id = ctx.params.id;
  const targetWishIndex = wishes.findIndex((wish) => wish.id === id);

  if (targetWishIndex === -1) {
    ctx.body = 'Your wish does not exist';
    return;
  }

  const data = ctx.request.body as WishEditDto;
  const updatedWish = {
    ...wishes[targetWishIndex],
    ...data,
  };
  wishes.splice(targetWishIndex, 1, updatedWish);

  ctx.body = updatedWish;
});

router.delete('/:id', (ctx) => {
  const id = ctx.params.id;
  const targetWishIndex = wishes.findIndex((wish) => wish.id === id);

  if (targetWishIndex === -1) {
    ctx.body = 'Your wish does not exist';
    return;
  }

  wishes.splice(targetWishIndex, 1);
});

export default router;
