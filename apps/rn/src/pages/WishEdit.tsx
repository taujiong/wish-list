import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useLayoutEffect, useState } from 'react';
import { Button, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { createWish, handleError, updateWish } from '../services';
import { RootStackParamList } from '../types/rn-navigation';

type WishEditProps = NativeStackScreenProps<RootStackParamList, 'WishEdit'>;

const WishEdit = ({ navigation, route }: WishEditProps) => {
  const [id, setId] = useState<string>();
  const [wish, setWish] = useState('');
  const [loading, setLoading] = useState(false);

  const createOrUpdateWish = useCallback(
    id === undefined ? createWish : updateWish.bind(null, id),
    [id]
  );

  const updateParams = useCallback(() => {
    setId(route.params?.id);
    setWish(route.params?.value ?? '');
  }, [route]);

  useFocusEffect(updateParams);

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
          disabled={!wish || loading}
          onPress={() => {
            setLoading(true);
            createOrUpdateWish(wish)
              .then(() => {
                setLoading(false);
                navigation.navigate('WishList');
              })
              .catch(handleError);
          }}
        />
      ),
    });
  }, [wish, loading]);

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
        value={wish}
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
