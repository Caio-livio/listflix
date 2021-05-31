import React from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';
import firebase from 'firebase';

import Toolbar from '../../components/toolbar';

import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './styles';

interface Data {
  name: string,
  email: string,
  password: string,
}

const Register = () => {
  const nav = useNavigation();

  const createNewUser = (values: Data) => {
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then(usuarioLogado => {
        console.log(usuarioLogado.user)
        if (usuarioLogado) {
          Alert.alert('Usuário cadastrado com sucesso!')
          nav.navigate('Home');
        }
      }).catch(erro => {
        Alert.alert('Erro ao criar o usuário, favor tente novamente!')
      })
  }

  return (
    <>
      <Toolbar title='Cadastrar usuário' back />
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('O campo nome é obrigatório!'),
          email: Yup.string().required('O campo email é obrigatório!'),
          password: Yup.string().required('O campo senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!'),
        })}
        onSubmit={values => createNewUser(values)}
      >
        {({ values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur }) => (
          <View style={styles.container}>
            <Input
              inputStyle={styles.inputConfig}
              placeholder="Nome"
              placeholderTextColor="red"
              leftIcon={{ type: 'font-awesome', name: 'user', iconStyle: styles.iconColor }}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            { touched.name && <Text style={styles.errors}>{errors.name}</Text>}

            <Input
              inputStyle={styles.inputConfig}
              placeholder="Email"
              placeholderTextColor="red"
              leftIcon={{ type: 'font-awesome', name: 'envelope-o', iconStyle: styles.iconColor }}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            { touched.email && <Text style={styles.errors}>{errors.email}</Text>}

            <Input
              inputStyle={styles.inputConfig}
              placeholder="Senha"
              placeholderTextColor="red"
              leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle: styles.iconColor }}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            { touched.password && <Text style={styles.errors}>{errors.password}</Text>}

            { isSubmitting && <ActivityIndicator size={30} />}
            { !isSubmitting && <Button title='Cadastrar' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
          </View>
        )}

      </Formik>
    </>
  )
}

export default Register