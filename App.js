import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Tabs } from './src/navigation/Tabs';
import { AuthStack } from './src/navigation/AuthStack';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'default'} />
      <Tabs />
      {/* <AuthStack /> */}
    </NavigationContainer>
  );
}
