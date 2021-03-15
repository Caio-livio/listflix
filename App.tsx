import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from '../ListFlix/src/globalStyles/styles';
import MainNavigator from './src/navigations';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MainNavigator />
      </View>
    </>
  );
}


