import React, { useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import { Input, Button } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from './styles';

interface User {
    email: string;
    password: string;
}

const Login = () => {

    const nav = useNavigation();
    const [error, setError] = useState('');

    const Register = () => {
        nav.navigate('Register')
    }

    const UserLogin = async (data: User) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(usuarioLogado => {
                if (usuarioLogado) {
                    nav.navigate('Home');
                }
            }).catch(erro => {
                Alert.alert('erro, senha ou email incorreto')
            })
    }

    return (
        <>
            <View style={styles.container}>

                <Text style={styles.textConfig}>ListFlix</Text>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required('O campo email é obrigatório!').email('Precisa ser um email válido!'),
                        password: Yup.string().required('O campo Senha é obrigatório!').min(6, 'A senha precisa ter no mínimo 6 caracteres!')
                    })}
                    onSubmit={UserLogin}
                >
                    {({ values, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur }) => (
                        <View style={{ flex: 0.7, width: '100%', padding: 30 }} >
                            <Input
                                inputStyle={styles.inputConfig}
                                placeholder="Email"
                                placeholderTextColor="red"
                                leftIcon={{ type: 'font-awesome', name: 'user', iconStyle: styles.iconColor }}
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                            />

                            { touched.email && <Text style={styles.errors}>{errors.email}</Text>}

                            <Input
                                inputStyle={styles.inputConfig}
                                placeholder="Senha"
                                placeholderTextColor="red"
                                leftIcon={{ type: 'font-awesome', name: 'lock', iconStyle: styles.iconColor }}
                                secureTextEntry={true}
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                            />

                            { touched.password && <Text style={styles.errors}>{errors.password}</Text>}

                            { isSubmitting && <ActivityIndicator size={30} />}
                            { !isSubmitting && <Button title='Login' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
                            { error != "" && <Text style={styles.errors}>{error}</Text>}
                        </View>
                    )}

                </Formik>
                <View>
                    <TouchableOpacity onPress={Register}>
                        <Text style={styles.textCreatAccount}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Login;