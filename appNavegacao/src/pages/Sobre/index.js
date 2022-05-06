/* 
Primeira parte

import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Sobre() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>Sobre</Text>
            <Button
                title='Voltar para tela Home'
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}
 */

import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Sobre({ route }) {
    const navigation = useNavigation();
    navigation.setOptions({
        title: `Sobre ${route.params?.nome}`
    })
    return (
        <View  style={styles.container}>
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Contato"
                onPress={() => navigation.navigate('Contato')}
            />
            <Text style={styles.txt}>Nome: {route.params?.nome}</Text>
            <Text style={styles.txt}>Email: {route.params?.email}</Text>
            <Text style={styles.txt}>RA: {route.params?.ra}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#ffbc42',
    },
    txt: {
        color: '#000', 
        fontSize: 16,
        margin: 3,
        marginLeft: 30
        
    }
})



