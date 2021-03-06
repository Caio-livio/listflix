import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';
import MovieList from '../screens/MovieList';
import RegisterMovie from '../screens/RegisterMovie';

const Stack = createStackNavigator();

export const MainNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="RegisterMovie" component={RegisterMovie} />
    </Stack.Navigator>
)

export default MainNavigator