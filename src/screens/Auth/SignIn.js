import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from "yup"

export const SignIn = () => {
  const [secretPassword, setSecretPassword] = useState(true);
  const navigation = useNavigation();

  const SignInSchema = Yup.object().shape({
    email: Yup.string().matches(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/, "Lütfen geçerli bir email giriniz."),
    password: Yup.string().required("Lütfen şifre giriniz")
  });

  return (
    <View style={[styles.container, { paddingTop: 60 }]}>
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
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={SignInSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched, handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <View style={styles.formContainer}>
              <TextInput
                placeholder='Email'
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                style={styles.inputBox}
              />
              {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
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
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    style={styles.inputBox}
                    secureTextEntry={secretPassword}
                  />
                  {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
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
              <TouchableOpacity disabled={!isValid} activeOpacity={0.6} style={[styles.button, {backgroundColor: isValid ?'#ECA800' : '#ccc',}]} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
                <Entypo name='login' size={24} color='#333' />
              </TouchableOpacity>
            </View>
          )}
        </Formik> 
      {/* Footer */}
      <View style={[styles.footerContainer, { paddingBottom: 45 }]}>
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
  errorText: {
    color: "red",
    padding: 4,
    paddingLeft: 20
  }
});
