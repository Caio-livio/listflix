import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    textTitle: {
        marginTop: 40,
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        alignItems: 'center'
    },
    textSubtitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: 20,
    },
    buttonContainer: {
        marginTop: 10,
        backgroundColor: 'black',
        marginHorizontal: 10,
        justifyContent: 'center',
        borderRadius: 50
    },
    button: {
        marginTop: 10,
        backgroundColor: 'red',
        borderRadius: 100,
        width: '100%',
        height: '35%',
        fontSize: 100
    }
});

export default styles;