import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, Platform, ToastAndroid, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';
import 'firebase/firestore';

import Toolbar from '../../components/toolbar';
import defaultImageMovie from '../../assets/images/defaultImage.png';

import { Formik } from 'formik';
import * as Yup from 'yup';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import styles from './styles';

interface Data {
    name: string;
    sinopse: string;
    releaseDate: string;
    genre: string;
    image: string;
}

const RegisterMovie = (() => {
    const db = firebase.firestore()
    const [imageDefaultMovie, setImageDefaultMovie] = useState<ImagePicker.ImagePickerResult>();

    const createMovie = async (values: Data) => {

        let novoFilme: Data;

        if (!imageDefaultMovie?.cancelled) {


            const imagem = await fetch(imageDefaultMovie?.uri || '');

            const blobImagem = await imagem.blob();
            const imagemRef = firebase.storage()
                .ref()
                .child(`imagens/${firebase.auth().currentUser?.uid}/${Math.random().toString()}`);

            await imagemRef.put(blobImagem);

            let linkImage = '';

            await imagemRef.getDownloadURL().then(link => {
                if (link) {
                    linkImage = link;
                }
            });

            novoFilme = {
                name: values.name,
                sinopse: values.sinopse,
                releaseDate: values.releaseDate,
                genre: values.genre,
                image: linkImage,
            };
        } else {
            novoFilme = {
                name: values.name,
                sinopse: values.sinopse,
                releaseDate: values.releaseDate,
                genre: values.genre,
                image: defaultImageMovie.uri,
            };
        }


        db.collection('usuario').doc(firebase.auth().currentUser?.uid).get().then(resultado => {
            if (resultado.exists) {
                db.collection('usuario').doc(firebase.auth().currentUser?.uid).update({
                    lista: firebase.firestore.FieldValue.arrayUnion(novoFilme),
                }).then(() => {
                    Alert.alert(
                        "Filme foi cadastrado com sucesso!",
                        '',
                        [
                            { text: "OK" }
                        ]
                    );
                }).catch(() => {
                    Alert.alert(
                        "Erro ao cadastrar filme, por favor tente novamente!",
                        '',
                        [
                            { text: "OK" }
                        ]
                    );
                });
            } else {
                db.collection('usuario').doc(firebase.auth().currentUser?.uid).set({
                    lista: [
                        {
                            name: novoFilme.name,
                            sinopse: novoFilme.sinopse,
                            releaseDate: values.releaseDate,
                            genre: novoFilme.genre,
                            image: novoFilme.image,
                        }
                    ]

                }).then(() => {
                    Alert.alert(
                        "Filme foi cadastrado com sucesso!",
                        '',
                        [
                            { text: "OK" }
                        ]
                    );
                }).catch(() => {
                    Alert.alert(
                        "Erro ao cadastrar filme, por favor tente novamente!",
                        '',
                        [
                            { text: "OK" }
                        ]
                    );
                });
            }
        });
    }

    const openPhotoLibrary = async () => {

        const response = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)

        if (Platform.OS == 'web' || response.granted) {

            const img = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 4],
                base64: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            });

            setImageDefaultMovie(img);
        } else {
            ToastAndroid.show('Permissão necessária para acessar a galeria de fotos',
                ToastAndroid.LONG);
        }
    }

    return (
        <>
            <Toolbar title='Cadastrar Filme' back />
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => openPhotoLibrary()}>
                        <Image source={imageDefaultMovie ? imageDefaultMovie : defaultImageMovie}
                            style={styles.imageConfig}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.imageInputText}>Selecionar imagem</Text>
                <Formik
                    initialValues={{ name: '', sinopse: '', releaseDate: '', genre: '' }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Informe o nome do filme'),
                        sinopse: Yup.string().required('Informe a sinopse do filme'),
                        releaseDate: Yup.string().required('Informe a data de lançamento do filme'),
                        genre: Yup.string().required('Informe o gênero do filme'),
                    })}
                    onSubmit={createMovie}
                >
                    {({ values, setFieldValue, handleChange, errors, handleSubmit, isSubmitting, isValid, touched, handleBlur }) => (
                        <View style={styles.formikView}>
                            <View style={styles.inputView}>
                                <Input
                                    inputStyle={styles.inputConfig}
                                    placeholder="Nome"
                                    placeholderTextColor="white"
                                    onChangeText={handleChange("name")}
                                    onBlur={handleBlur("name")}
                                />
                                {touched.name && <Text style={styles.errors}>{errors.name}</Text>}

                                <Input
                                    inputStyle={styles.inputConfig}
                                    placeholder="Sinopse"
                                    placeholderTextColor="white"
                                    onChangeText={handleChange("sinopse")}
                                    onBlur={handleBlur("sinopse")}
                                />
                                {touched.sinopse && <Text style={styles.errors}>{errors.sinopse}</Text>}

                                <Input
                                    inputStyle={styles.inputConfig}
                                    placeholder="Data de Lançamento"
                                    placeholderTextColor="white"
                                    onChangeText={handleChange("releaseDate")}
                                    onBlur={handleBlur("releaseDate")}
                                />
                                {touched.releaseDate && <Text style={styles.errors}>{errors.releaseDate}</Text>}

                                <Input
                                    inputStyle={styles.inputConfig}
                                    placeholder="Gênero"
                                    placeholderTextColor="white"
                                    onChangeText={handleChange("genre")}
                                    onBlur={handleBlur("genre")}
                                />
                                {touched.genre && <Text style={styles.errors}>{errors.genre}</Text>}
                            </View>
                            {isSubmitting && <ActivityIndicator size={30} />}
                            {!isSubmitting && <Button title='Salvar' disabled={!isValid} buttonStyle={styles.buttonColor} onPress={() => handleSubmit()}></Button>}
                        </View>
                    )}
                </Formik>
            </View>
        </>
    )
})

export default RegisterMovie