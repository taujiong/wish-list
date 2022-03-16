import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect, useState } from 'react';
import { Button, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { createWish } from '../services';
import { RootStackParamList } from '../types/rn-navigation';

type WishEditProps = NativeStackScreenProps<RootStackParamList, 'WishEdit'>;

const WishEdit = ({ navigation }: WishEditProps) => {
  const [wish, setWish] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title='取消'
          onPress={() => {
            navigation.navigate('WishList');
          }}
        />
      ),
      headerRight: () => (
        <Button
          title='确认'
          disabled={!wish}
          onPress={() => {
            createWish(wish).then(() => {
              navigation.navigate('WishList');
            });
          }}
        />
      ),
    });
  }, [wish]);

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={{
        flex: 1,
        padding: 8,
        justifyContent: 'space-between',
      }}
    >
      <TextInput
        autoFocus
        multiline
        textAlignVertical='top'
        placeholder='将你的愿望说给云听'
        onChangeText={(e) => setWish(e)}
        style={{
          fontSize: 16,
        }}
      />
      <Text
        style={{
          alignSelf: 'flex-end',
          marginBottom: 8,
          color: '#ccc',
        }}
      >
        {140 - wish.length}
      </Text>
    </KeyboardAvoidingView>
  );
};

export default WishEdit;
