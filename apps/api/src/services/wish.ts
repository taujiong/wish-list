import createError from 'http-errors';
import { WishRepo } from '../models';

export const getAllWishes = () => {
  return WishRepo.findAll({
    order: [['lastUpdateAt', 'DESC']],
  });
};

export const getWishById = async (id: string) => {
  const wish = await WishRepo.findOne({
    where: {
      id,
    },
  });

  if (!wish) {
    throw createError(404, '愿望不存在');
  }

  return wish;
};

export const createWish = (data: any) => {
  return WishRepo.create(data);
};
