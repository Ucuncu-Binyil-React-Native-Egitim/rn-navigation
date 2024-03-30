import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { HomeDetails } from '../screens/HomeDetails';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='HomeDetails' component={HomeDetails} />
    </Stack.Navigator>
  );
};
