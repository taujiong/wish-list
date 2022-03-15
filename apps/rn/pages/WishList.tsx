import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Wish } from 'contract';
import { useLayoutEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import NButton from '../components/NButton';
import WishItem from '../components/WishItem';
import { RootStackParamList } from '../rn-navigation';
import { fetchWishes } from '../services';

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

  useLayoutEffect(() => {
    fetchWishes().then((data) => {
      console.log(data);
      setWishes(data);
    });
  });

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
          renderItem={({ item }) => <WishItem {...item} />}
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
