import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Card } from 'react-native-elements'
import firebase from 'firebase';
import 'firebase/firestore';

import Toolbar from '../../components/toolbar';

import marleyEEu from '../../assets/images/marleyeEu.jpg';
import freddyXJason from '../../assets/images/freddyxJason.jpg';
import friends from '../../assets/images/friends.jpg';
import harryPotter from '../../assets/images/harryPotter.jpg';

import styles from './styles';

type Data = Array<{
    name: string;
    sinopse: string;
    releaseDate: string;
    genre: string;
    image: string;
}>

export default function App() {
    const db = firebase.firestore()

    const [listaDeFilmes, setListaDeFilmes] = useState<Data>([] as Data);


    useEffect(() => {
        async function listarOsFilmes() {
            await db
                .collection('usuario')
                .doc(firebase.auth().currentUser?.uid)
                .get()
                .then(result => {
                    setListaDeFilmes(result.data()?.lista);
                });
        }
        listarOsFilmes();
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Toolbar title='Lista de filmes e séries' back />
                <FlatList
                    data={listaDeFilmes}
                    keyExtractor={Data => Data.name}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={0}
                    renderItem={({ item: Data }) => (
                        <Card containerStyle={[styles.cardContainer]}>
                            <View style={styles.cardTitleBackground}>
                                <Card.Image source={{ uri: Data.image }} style={styles.cardImage} />
                            </View>
                            <Card.Divider style={styles.cardDivider} />
                            <Text style={styles.text}>
                                Nome: {Data.name}{"\n\n"}
                                Sinopse: {Data.sinopse}{"\n\n"}
                                Data de lançamento: {Data.releaseDate}{"\n\n"}
                                Gênero: {Data.genre}{"\n\n"}
                            </Text>
                        </Card>
                    )}
                />
            </View>
        </>
    );
}


