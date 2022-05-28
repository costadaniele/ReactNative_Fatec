import React, { Component, useState } from 'react';
import { View, Pressable, Text, Button, TextInput, StyleSheet, Alert } from
    'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
export default function Form({ route }) {
    const [id, setId] = useState(route.params?.id)
    const [newTitle, setNewTitle] = useState(route.params?.title)
    const [newDescription, setNewDescription] =
        useState(route.params?.description)
    const navigation = useNavigation();
    const salvarTarefa = async () => {
        const body = JSON.stringify({
            title: newTitle, description:
                newDescription
        })
        if (id !== undefined) {
            const response = await api.put(`/tasks/${id}`, body, {
                headers:
                    { 'Content-Type': 'application/json' }
            });
            await route.params?.atualizarLista()
        }
        else {
            const response = await api.post('/tasks', body, {
                headers:
                    { 'Content-Type': 'application/json' }
            });
            await route.params?.atualizarLista()
        }
        navigation.goBack()
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                defaultValue={route.params?.title}
                onChangeText={(text) => setNewTitle(text)}
            />
            <TextInput
                style={styles.input}
                defaultValue={route.params?.description}
                onChangeText={(text) => setNewDescription(text)}
            />
             <Pressable style={styles.button} onPress={salvarTarefa}>
            <Text style={styles.text}>Salvar</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        borderColor: '#000',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10,
        borderRadius: 5,
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: 20,
        width: '80%',
    },
    button: {
        padding: 14,
        borderRadius: 2,
        backgroundColor: '#3d405b',
        alignSelf: 'center',
        marginTop: 20,
        width: '50%',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        color: 'white',
      },
});