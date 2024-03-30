import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { ProfileStack } from './ProfileStack';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='HomeTab' component={HomeStack} />
      <Tab.Screen name='ProfileTab' component={ProfileStack} />
    </Tab.Navigator>
  );
};
