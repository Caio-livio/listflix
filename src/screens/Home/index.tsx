import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Card } from 'react-native-elements'

import Toolbar from '../../components/toolbar';

import marleyEEu from '../../assets/images/marleyeEu.jpg';
import freddyXJason from '../../assets/images/freddyxJason.jpg';
import friends from '../../assets/images/friends.jpg';
import harryPotter from '../../assets/images/harryPotter.jpg';

import styles from './styles';


 type Data = Array <{
  Id: string;
  Name: string;
  Sinopse: string;
  ReleaseDate: string;
  Genre: string;
  Image: object;
}>

export default function App() {

  const moviesAndSeries: Data = [
    {
      Id: '1',
      Name: 'Marley e eu',
      Sinopse: 'Os recém-casados John e Jenny Grogan se mudam de Michigan para a Flórida, onde eles compram sua primeira casa e encontram trabalhos em competitivos jornais...',
      ReleaseDate: '31 de outubro de 2003',
      Genre: 'Comédia/Romance',
      Image: marleyEEu
    },
    {
      Id: '2',
      Name: 'Freddy x Jason',
      Sinopse: 'Decidido a reiniciar sua matança, Freddy Krueger ressuscita Jason Voorhees e o utiliza para recuperar seus poderes',
      ReleaseDate: '31 de outubro de 2003',
      Genre: 'Terror/Ação',
      Image: freddyXJason
    },
    {
      Id: '3',
      Name: 'Friends',
      Sinopse: 'Ross, Rachel, Mônica, Chandler, Joey e Phoebe formam um grupo de seis amigos que lutam para se sobressair e progredir na competitiva vida de Manhattan. Seu humor inteligente e apoio mútuo incondicional fazem com sua amizade seja cada vez mais forte, superando assim todos os obstáculos que a vida lhes apresenta',
      ReleaseDate: '22 de setembro de 1994',
      Genre: 'Comédia',
      Image: friends
    },
    {
      Id: '4',
      Name: 'Harry Potter e a pedra filosofal',
      Sinopse: 'Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos...',
      ReleaseDate: '23 de novembro de 2001',
      Genre: 'Fantasia/infantil',
      Image: harryPotter
    },
  ];


  return (
    <>
      <View style={styles.container}>
        <Toolbar title='Lista de filmes e séries' back />
        <FlatList
          data={moviesAndSeries}
          keyExtractor={Data => Data.Id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={0}
          renderItem={({ item: Data }) => (
            <Card containerStyle={[styles.cardContainer]}>
              <View style={styles.cardTitleBackground}>
              <Card.Image source={Data.Image} style={styles.cardImage} />
              </View>
              
              
              <Card.Divider style={styles.cardDivider} />
              <Text style={styles.text}>
                Nome: {Data.Name}{"\n\n"}
                Sinopse: {Data.Sinopse}{"\n\n"}
                Data de lançamento: {Data.ReleaseDate}{"\n\n"}
                Gênero: {Data.Genre}{"\n\n"}
              </Text>
            </Card>
          )}
        />
      </View>
    </>
  );
}


