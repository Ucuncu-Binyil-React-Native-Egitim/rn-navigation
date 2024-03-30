import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Tabs } from './src/navigation/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
