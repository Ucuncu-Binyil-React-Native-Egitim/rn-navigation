import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../screens/Profile';
import { ProfileDetails } from '../screens/ProfileDetails';
import { Settings } from '../screens/Settings';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='profileDetails' component={ProfileDetails} />
      <Stack.Screen name='Settings' component={Settings} />
    </Stack.Navigator>
  );
};
