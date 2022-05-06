/*
Primeira parte

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
    const navigation = useNavigation();
    function irSobre() {
        navigation.navigate('Sobre');
    }
    return (
        <View>
            <Text style={styles.txt}>Home</Text>
            <Text style={styles.txt}>Bem vindo a tela Home!</Text>
            <Button
                title="Ir para tela Sobre"
                onPress={irSobre}
            />
        </View>
    )
} */

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Home() {
    const navigation = useNavigation();
    function irSobre() {
        navigation.navigate('Sobre',
            {nome:'Daniele Costa',
            email:'santoscostadaniele@gmail.com', 
            ra: '789456123'
        });
    }
    return (
        <View style={styles.container}>
            <Button
                title="Ir para tela Sobre"
                onPress={irSobre}
            />
            <Text style={styles.txt}>Bem vindo(a) a tela de apresentação!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:  '#ffbc42'
    },
    txt: {
        paddingLeft: 10,
        color: '#000', 
        fontSize: 16,
        margin: 20,
        textAlign: 'center'
    }
})
