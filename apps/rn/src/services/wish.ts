import { Wish } from 'contract';

const API_BASE_PATH = 'http://192.168.1.185:3000/api/wishes';

export const createWish = (content: string) =>
  fetch(API_BASE_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content,
      lastUpdateAt: new Date().toISOString(),
    }),
  }).then((data) => data.json());

export const fetchWishes = () =>
  fetch(API_BASE_PATH, {
    method: 'GET',
  }).then((data) => data.json()) as any as Promise<Wish[]>;
