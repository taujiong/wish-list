import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Start from './pages/Start';
import WishList from './pages/WishList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Start'
          component={Start}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name='WishList'
          component={WishList}
          options={{
            title: '愿望清单',
          }}
        />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
