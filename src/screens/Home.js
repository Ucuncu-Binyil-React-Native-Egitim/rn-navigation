import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>Ana sayfa</Text>
      <Button
        title='detaylar'
        onPress={() => navigation.navigate('HomeDetails')}
      />
    </View>
  );
};
