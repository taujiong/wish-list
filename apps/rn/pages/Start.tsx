import { Button, View } from 'react-native';

const StartPage = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button title='立即开启' onPress={() => navigation.navigate('WishList')} />
  </View>
);

export default StartPage;
