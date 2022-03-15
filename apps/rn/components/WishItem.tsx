import { Wish } from 'contract';
import { ListRenderItemInfo, Text, View } from 'react-native';

type WishItemProps = Wish & {
  index: number;
};

const WishItem = ({ content, lastUpdateAt, index }: WishItemProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: index === 0 ? 'red' : 'white',
      }}
    >
      <Text>{content}</Text>
      <Text>{lastUpdateAt}</Text>
    </View>
  );
};

export const renderWishItem = ({ index, item }: ListRenderItemInfo<Wish>) => (
  <WishItem index={index} {...item} />
);

export default WishItem;
