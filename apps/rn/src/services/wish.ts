import { Wish } from 'contract';

const API_BASE_PATH = 'http://192.168.1.185:3000/api/wishes';

// NEED_IMPROVE
// wish.lastUpdateAt in api was a string, but I need a Date
const parseDateInWish = (wish: Wish): Wish => ({
  ...wish,
  lastUpdateAt: new Date(wish.lastUpdateAt),
});

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
    .then((data) => data.json())
    .then((data) => {
      return parseDateInWish(data);
    });

export const fetchWishes = () =>
  fetch(API_BASE_PATH, {
    method: 'GET',
  })
    .then((data) => data.json())
    .then((data) => data.map(parseDateInWish)) as any as Promise<Wish[]>;

export const deleteWish = (id: string) =>
  fetch(`${API_BASE_PATH}/${id}`, {
    method: 'DELETE',
  });

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
    .then((data) => data.json())
    .then(parseDateInWish);
