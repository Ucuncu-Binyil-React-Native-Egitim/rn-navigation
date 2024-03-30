import { useNavigation } from '@react-navigation/native';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
export const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24 }}>Bedirhan Giden</Text>
      <TouchableOpacity onPress={() => navigation.navigate('profileDetails')}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          Detayları gör
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settingsIcon}
        onPress={() => navigation.navigate('Settings')}
      >
        <Feather name='settings' size={32} color='black' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  settingsIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});
