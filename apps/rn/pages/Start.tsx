import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import NButton from '../components/NButton';
import { RootStackParamList } from '../rn-navigation';

type StartProps = NativeStackScreenProps<RootStackParamList, 'Start'>;

const StartPage = ({ navigation }: StartProps) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    }}
  >
    <Text
      style={{
        fontSize: 26,
        textAlign: 'center',
        lineHeight: 40,
      }}
    >
      这是你的愿望清单{'\n'}
      将每个期待播种于此{'\n'}
      日复一日的灌溉{'\n'}
      惊喜终会在某天{'\n'}
      如约而至{'\n'}
    </Text>

    <Image
      source={require('../assets/demo.png')}
      style={{
        marginBottom: 60,
      }}
    />

    <NButton
      onPress={() => navigation.navigate('WishList')}
      text='立即开启'
      sx={{
        text: {
          fontSize: 18,
        },
      }}
    />
  </View>
);

export default StartPage;
