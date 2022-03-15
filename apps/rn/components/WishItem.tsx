import { Wish } from 'contract';
import { Text, View } from 'react-native';

type WishItemProps = Wish;

const WishItem = ({ content, lastUpdateAt }: WishItemProps) => {
  const dotPosition = 24;

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
      }}
    >
      {/* connector */}
      <View>
        {/* dot */}
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 9999,
            backgroundColor: '#0000001a',
            top: dotPosition,
          }}
        />

        {/* line */}
        <View
          style={{
            width: 2,
            height: '100%',
            position: 'absolute',
            left: 3,
            top: dotPosition + 8,
            backgroundColor: '#0000001a',
          }}
        />
      </View>

      {/* content */}
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginBottom: 8,
          marginLeft: 16,
          padding: 18,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: '#ccc',
            marginBottom: 8,
          }}
        >
          {lastUpdateAt}
        </Text>

        <Text
          style={{
            fontSize: 18,
            lineHeight: 24,
          }}
        >
          {content}
        </Text>
      </View>
    </View>
  );
};

export default WishItem;
