import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const SignIn = () => {
  const { top } = useSafeAreaInsets();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [secretPassword, setSecretPassword] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { paddingTop: top * 1.4 }]}>
      {/* Header */}
      <View>
        <Text style={styles.title}>
          Sen de kulübe katıl, iyi yaşamaya başla.
        </Text>
        <Text style={styles.subTitle}>
          SADECE SPORA DEĞİL, KENDİNE GELDİĞİN YER.
        </Text>
      </View>
      {/* Form */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(e) => setEmail(e)}
          style={styles.inputBox}
        />
        <View style={styles.seperator} />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <View style={styles.passwordInput}>
            <TextInput
              placeholder='Password'
              value={password}
              onChangeText={(e) => setPassword(e)}
              style={styles.inputBox}
              secureTextEntry={secretPassword}
            />
          </View>
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setSecretPassword(!secretPassword)}
          >
            <Entypo
              name={secretPassword ? 'eye-with-line' : 'eye'}
              size={24}
              color='black'
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
          <Entypo name='login' size={24} color='#333' />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={[styles.footerContainer, { paddingBottom: top }]}>
        <Text style={[styles.text, { color: 'white' }]}>
          Henüz hesabınız yok mu
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.link, styles.text]}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24464f',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  subTitle: {
    textAlign: 'center',
    color: 'white',
    letterSpacing: 1,
    paddingTop: 16,
    fontSize: 18,
    color: '#ECA800',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 16,
    opacity: 0.8,
    marginTop: 48,
  },
  inputBox: {
    padding: 24,
  },
  passwordInput: {
    width: '90%',
  },
  eyeIcon: {
    alignItems: 'center',
    padding: '32',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECA800',
    padding: 16,
    borderRadius: 8,
  },
  seperator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#666',
  },
  buttonText: {
    color: '#333',
    fontWeight: '600',
    paddingRight: 16,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  link: {
    paddingTop: 8,
    color: '#ACE2E1',
    textDecorationLine: 'underline',
  },
});
