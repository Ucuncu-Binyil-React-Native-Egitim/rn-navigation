import { Text, View } from 'react-native';

export const ProfileDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 16 }}>Doğum Tarihi: 15 Eylül, 1998</Text>
      <Text style={{ fontSize: 16 }}>Tel no: +90 0536 890 45 28</Text>
      <Text style={{ fontSize: 16 }}>İl/ilçe: İstanbul/Başakşehir</Text>
    </View>
  );
};
