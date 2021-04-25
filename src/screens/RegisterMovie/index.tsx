import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, Platform, ToastAndroid, Image } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Toolbar from '../../components/toolbar';
import defaultImageMovie from '../../assets/images/defaultImage.png';

import { Formik } from 'formik';
import * as Yup from 'yup';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';

import styles from './styles';

type Data = Array<{
    Id: string;
    Name: string;
    Sinopse: string;
    ReleaseDate: string;
    Genre: string;
    Image: string;
}>

const RegisterMovie = (() => {
    const [imageDefaultMovie, setImageDefaultMovie] = useState<any>(defaultImageMovie);

    const createMovie = () => {
        Alert.alert('Filme cadastrado com sucesso!')
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
                        <Image source={imageDefaultMovie}
                            style={styles.imageConfig}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.imageInputText}>Selecionar imagem</Text>
                <Formik
                    initialValues={{ Id: '', Name: '', Sinopse: '', ReleaseDate: '', Genre: '', image: '' }}
                    validationSchema={Yup.object().shape({
                        Name: Yup.string().required('Informe o nome do filme'),
                        Sinopse: Yup.string().required('Informe a sinopse do filme'),
                        ReleaseDate: Yup.string().required('Informe a data de lançamento do filme'),
                        Genre: Yup.string().required('Informe o gênero do filme'),
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
                                    onChangeText={handleChange("Name")}
                                    onBlur={handleBlur("Name")}
                                />
                                {touched.Name && <Text style={styles.errors}>{errors.Name}</Text>}

                                <Input
                                    inputStyle={styles.inputConfig}
                                    placeholder="Sinopse"
                                    placeholderTextColor="white"
                                    onChangeText={handleChange("Sinopse")}
                                    onBlur={handleBlur("Sinopse")}
                                />
                                {touched.Sinopse && <Text style={styles.errors}>{errors.Sinopse}</Text>}

                                <Input
                                    inputStyle={styles.inputConfig}
                                    placeholder="Data de Lançamento"
                                    placeholderTextColor="white"
                                    onChangeText={handleChange("ReleaseDate")}
                                    onBlur={handleBlur("ReleaseDate")}
                                />
                                {touched.ReleaseDate && <Text style={styles.errors}>{errors.ReleaseDate}</Text>}

                                <Input
                                    inputStyle={styles.inputConfig}
                                    placeholder="Gênero"
                                    placeholderTextColor="white"
                                    onChangeText={handleChange("Genre")}
                                    onBlur={handleBlur("Genre")}
                                />
                                {touched.Genre && <Text style={styles.errors}>{errors.Genre}</Text>}
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