import { Wish } from 'contract';
import { ensureSuccessfultRes } from './error';

const API_BASE_PATH = 'http://192.168.43.205:3000/api/wishes';

// NEED_IMPROVE
// wish.lastUpdateAt in api was a string, but I need a Date
const parseDateInWish = (wish: Wish): Wish => ({
  ...wish,
  lastUpdateAt: new Date(wish.lastUpdateAt),
});

// TODO: 如果用的是 axios 的话，ensureSuccessfultRes 可以放到 interceptor 里面去
// fetch 的话需要自己封装一个类了，这里就只能傻乎乎地重复写了
export const createWish = (content: string) =>
  fetch(API_BASE_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
      lastUpdateAt: new Date(),
    }),
  })
    .then(ensureSuccessfultRes)
    .then((data) => {
      return parseDateInWish(data);
    });

export const fetchWishes = () =>
  fetch(API_BASE_PATH, {
    method: 'GET',
  })
    .then(ensureSuccessfultRes)
    .then((data) => data.map(parseDateInWish)) as any as Promise<Wish[]>;

export const deleteWish = (id: string) =>
  fetch(`${API_BASE_PATH}/${id}`, {
    method: 'DELETE',
  }).then(ensureSuccessfultRes);

export const updateWish = (id: string, content: string) =>
  fetch(`${API_BASE_PATH}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
      lastUpdateAt: new Date(),
    }),
  })
    .then(ensureSuccessfultRes)
    .then(parseDateInWish);
