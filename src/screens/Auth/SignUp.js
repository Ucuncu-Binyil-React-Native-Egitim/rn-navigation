import { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from "yup"


export const SignUp = () => {
  const navigation = useNavigation();
  
  const SignUpSchema = Yup.object().shape({
    username: Yup.string().min(5, "Kullanıcı adı en az 5 karakter olmalıdır.").max(32, "Kullanıcı adı çok uzun").required("Lütfen doldurunuz."),
    email: Yup.string().matches(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/, "Lütfen geçerli bir email giriniz.").required("Lütfen doldurunuz."),
    password: Yup.string().min(8, "Parola en az 8 karakterli olmalı").max(50, "Parola çok uzun").required("Lütfen doldurunuz."),
    rePassword: Yup.string().oneOf([Yup.ref('password')], "Parolalar aynı değil").required("Lütfen doldurunuz.")
  })

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
          username: "",
          email: "",
          password: "",
          rePassword: ""
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => Alert.alert(JSON.stringify(values))} // istek at, formu database'e kaydet, ...
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <View style={styles.formContainer}>
            <TextInput
              placeholder='Username'
              value={values.username}
              onChangeText={handleChange('username')}
              style={styles.inputBox}
            />
            {errors.username && touched.username && <Text style={styles.errorText}>{errors.username}</Text>}
            <View style={styles.seperator} />
            <TextInput
              placeholder='Email'
              style={styles.inputBox}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <View style={styles.seperator} />
            <TextInput
              placeholder='Password'
              style={styles.inputBox}
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry={true}
            />
            {errors.password && touched.password && <Text style={styles.errorText}>{errors.password}</Text>}
            <View style={styles.seperator} />
            <TextInput
              placeholder='Password again'
              value={values.rePassword}
              onChangeText={handleChange('rePassword')}
              style={styles.inputBox}
              secureTextEntry={true}
            />
            {errors.rePassword && touched.rePassword && <Text style={styles.errorText}>{errors.rePassword}</Text>}
            <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={[styles.link, styles.text]}>Giriş Yap</Text>
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
  errorText: {
    color: "red",
    padding: 4,
    paddingLeft: 20
  }
});


