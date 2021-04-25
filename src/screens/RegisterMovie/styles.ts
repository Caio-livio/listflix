import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'black',
        // marginTop: 50
    },
    placeHolderColor: {
        color: 'white',
    },
    // remover depois
    iconColor: {
        color: 'red',
    },
    buttonColor: {
        backgroundColor: 'red',
        borderRadius: 10,
        marginHorizontal: 20
    },
    textConfig: {
        color: 'white',
        fontSize: 30,
        marginBottom: 30,
    },
    secondaryContainer: {
        justifyContent: 'center',
        color: 'white',
    },
    imageConfig: {
        width: 200,
        height: 200,
    },
    // remover depois
    inputConfig: {
        paddingLeft: 10,
        color: 'white',
        width: '100%',
        marginHorizontal: 10,
        borderRadius: 10
    },
    textCreatAccount: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    textColor: {
        color: 'white',
        textAlign: 'right',
        fontSize: 15,
    },
    errors: {
        color:"red", 
        fontSize: 15, 
        textAlign:"right"
    },
    viewInputConfig: {
        flex:0.5, 
        width: '100%', 
        padding: 30,
    },
    inputView: {
        backgroundColor: 'black', 
        marginTop: 20, 
        marginBottom: 10, 
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    formikView: {
        flex: 1, 
        justifyContent: 'space-evenly', 
        marginTop: 20
    },
    imageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 400,
    },
    imageContainerText: {
        fontSize: 20
    }
});

export default styles