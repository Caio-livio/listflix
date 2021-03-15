import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Register from '../screens/Register';

const Stack = createStackNavigator();

export const MainNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
            
        </Stack.Navigator>
    </NavigationContainer>
)

export default MainNavigator