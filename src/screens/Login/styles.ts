import React from 'react';
import { StyleSheet } from 'react-native';
import { withTheme } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    placeHolderColor: {
        color: 'red',
    },
    
    iconColor: {
        color: 'red',
    },
    buttonColor: {
        backgroundColor: 'red',
        marginTop: 20,
    },
    textConfig: {
        color: 'red',
        fontSize: 30,
        marginBottom: 10,
    },
    imageConfig: {
        width: 150,
        height: 150,
        marginTop: -70
    },
    // remover depois
    inputConfig: {
        marginTop: 10,
        paddingLeft: 10,
        color: 'red',
        width: '100%',
        height: 60,
    },
    textCreatAccount: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        marginTop: 30,
    },
    textColor: {
        color: 'red',
        textAlign: 'right',
        fontSize: 15,
    },
    errors: {
        color:"red", 
        fontSize: 15, 
        textAlign:"right",
        // backgroundColor: '#3CB371',
    }
});

export default styles;