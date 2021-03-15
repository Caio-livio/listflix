import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        color: 'black'
    },
    imgProps: {
        height: 300,
        width: 300,
    },
    text: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center', 
        alignItems: 'center'
    },
    scrollViewContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: 50,
    },
    cardContainer: {
        borderColor: 'red',
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    cardImage: {
        height: 300,
        width: 310,
    },
    cardTitle: {
        color: 'black',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardTitleBackground: {
        backgroundColor: 'red',
    }, 
    cardDivider: {
        backgroundColor: 'red',
        marginTop: 10,
    },
});

export default styles;