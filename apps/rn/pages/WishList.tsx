import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Wish } from 'contract';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import NButton from '../components/NButton';
import { renderWishItem } from '../components/WishItem';
import { RootStackParamList } from '../rn-navigation';

type WishListProps = NativeStackScreenProps<RootStackParamList, 'Start'>;

const EmptyWish = (
  <View
    style={{
      height: 157,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 120,
      marginBottom: 20,
    }}
  >
    <Image source={require('../assets/empty-state.png')} />
    <Text>你还没有愿望哦</Text>
  </View>
);

const ListPage = ({ navigation }: WishListProps) => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    setWishes(
      new Array(50).fill(0).map((_, index) => ({
        id: index.toString(),
        content: 'wish' + index,
        lastUpdateAt: 'time' + index,
      }))
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      }}
    >
      {wishes.length === 0 ? (
        EmptyWish
      ) : (
        <FlatList
          style={{
            width: '100%',
          }}
          data={wishes}
          keyExtractor={(item) => item.id}
          renderItem={renderWishItem}
        />
      )}

      <NButton
        onPress={() => navigation.navigate('Start')}
        text='写下你的愿望'
        sx={{
          button: {
            marginTop: 10,
            marginBottom: 32,
          },
        }}
      />
    </View>
  );
};

export default ListPage;
