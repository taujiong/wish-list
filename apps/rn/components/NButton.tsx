import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  text: string;
  sx?: {
    button?: StyleProp<ViewStyle> & object; // '& object' makes it spreadable
    text?: StyleProp<TextStyle> & object;
  };
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const NButton = ({ text, sx, onPress }: Props) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: '#FF3A3A',
      paddingHorizontal: 45,
      paddingVertical: 10,
      borderRadius: 9999,
      ...sx?.button,
    }}
  >
    <Text
      style={{
        color: 'white',
        fontSize: 16,
        ...sx?.text,
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

export default NButton;
