// import { WishEditDto } from 'contract';
import { WishEditDto } from 'contract';
import { WishRepo } from './wish';

export * from './sequelize';
export * from './wish';

/**
 * mock seed data
 */
const getSeedData = (): WishEditDto[] => {
  const now = new Date();

  return [
    {
      content: '很希望能去听场张学友的演唱会，将生活的烦恼抛在脑后',
      lastUpdateAt: new Date(now.getTime() - 24 * 60 * 60 * 1000), // yesterday
    },
    {
      content: '参加一场音乐节，若还有他，便是锦上添花🌸',
      lastUpdateAt: new Date('2022-01-22T08:02:18.600Z'),
    },
    {
      content: '看一次音乐剧《摇滚红与黑》',
      lastUpdateAt: new Date('2022-01-20T08:02:18.600Z'),
    },
    {
      content: '想收到一张林俊杰的签名新专辑🥳',
      lastUpdateAt: new Date('2022-01-18T08:02:18.600Z'),
    },
    {
      content: '爬山、逛集市、听音乐会',
      lastUpdateAt: new Date('2020-12-21T08:02:18.600Z'),
    },
    {
      content: '参加一场音乐节，若还有他，便是锦上添花',
      lastUpdateAt: new Date('2020-10-14T08:02:18.600Z'),
    },
  ];
};

export const createOrSeedDatabase = async () => {
  await WishRepo.sync();
  const wishCount = await WishRepo.count();
  if (wishCount <= 0) {
    await WishRepo.bulkCreate(
      getSeedData().map((wish) => ({
        ...wish,
        lastUpdateAt: wish.lastUpdateAt.toISOString(),
      }))
    );
  }
};
