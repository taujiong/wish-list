import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Wish } from 'contract';
import { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NButton from '../components/NButton';
import WishItem from '../components/WishItem';
import { deleteWish, fetchWishes } from '../services';
import { RootStackParamList } from '../types/rn-navigation';

type WishListProps = NativeStackScreenProps<RootStackParamList, 'WishList'>;

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
    <Image source={require('../../assets/empty-state.png')} />
    <Text>你还没有愿望哦</Text>
  </View>
);

const ListPage = ({ navigation }: WishListProps) => {
  const [wishes, setWishes] = useState<Wish[]>([]);

  const refreshWishes = useCallback(() => {
    fetchWishes().then((data) => {
      setWishes(data);
    });
  }, []);

  const deleteWishInternal = (id: string) => {
    deleteWish(id).then(() => {
      fetchWishes().then((data) => {
        setWishes(data);
      });
    });
  };

  const askForDelete = (id: string) =>
    Alert.alert('放弃愿望', '你确定要放弃这个愿望吗？', [
      {
        text: '坚持一下',
        style: 'cancel',
      },
      {
        text: '忍痛放弃',
        style: 'destructive',
        onPress: () => deleteWishInternal(id),
      },
    ]);

  // ATTENTION: route navigation in react native is not the same as it in web
  // when navigate back, it will not refresh its state and call useEffect() method
  // solution see https://reactnavigation.org/docs/navigation-lifecycle
  useFocusEffect(refreshWishes);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
      }}
    >
      {wishes.length === 0 ? (
        EmptyWish
      ) : (
        <FlatList
          style={{
            width: '100%',
            marginTop: 16,
          }}
          data={wishes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('WishEdit', {
                  id: item.id,
                  value: item.content,
                })
              }
              onLongPress={() => askForDelete(item.id)}
              delayLongPress={1500} // response later to avoid an unexpected click
            >
              <WishItem {...item} />
            </TouchableOpacity>
          )}
        />
      )}

      <NButton
        onPress={() => navigation.navigate('WishEdit')}
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
