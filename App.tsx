import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { firebaseConfig } from './src/config/firebase-config';
import firebase from 'firebase';

import Navigations from './src/navigations';

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Navigations />
    </NavigationContainer>
  );
}


