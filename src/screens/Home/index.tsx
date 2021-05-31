import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import {
  AdMobBanner, //Banner
  AdMobInterstitial, //Anuncio tela inteira
  AdMobRewarded //Anuncio com premiação ao usuario
} from 'expo-ads-admob';


import Toolbar from '../../components/toolbar';

import styles from './styles';
import { color } from 'react-native-reanimated';

export default function App() {

  const nav = useNavigation();

  const RegisterMovie = () => {
    nav.navigate('RegisterMovie')
  }
  const MovieList = () => {
    nav.navigate('MovieList')
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Toolbar title='Home' />
          <Text style={styles.textTitle}>BEM VINDO(A) AO LISTFLIX</Text>
          <Text style={styles.textSubtitle}>O que você deseja fazer?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Consultar Lista de Filmes"
            buttonStyle={styles.button}
            onPress={MovieList}
          >
          </Button>
          <Button
            title="Cadastrar Filme"
            buttonStyle={styles.button}
            onPress={RegisterMovie}
          >
          </Button>

        </View>


      </View>
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        style={{ alignSelf: 'center' }}
      />
    </>
  );
}


