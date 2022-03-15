import { Button, View } from 'react-native';

const ListPage = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Button title='返回主界面' onPress={() => navigation.navigate('Start')} />
  </View>
);

export default ListPage;
