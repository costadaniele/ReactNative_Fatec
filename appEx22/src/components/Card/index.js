import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
function Card({ data, funcCarregarTarefas }) {
    const [id, setId] = useState(data?.id)
    const [title, setTitle] = useState(data?.title)
    const [description, setDescription] = useState(data?.description)
    const excluirTarefa = async () => {
        const response = await api.delete(`/tasks/${id}`);
        await funcCarregarTarefas();
    }
    const navigation = useNavigation();
    async function irFormulario() {
        navigation.navigate('Formulario', {
            id: id, title: title,
            description: description, atualizarLista: funcCarregarTarefas
        });
    }
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.titulo}>{title}</Text>
                <Text style={styles.descricao}>{description}</Text>
                <View style={styles.botoes}>
                <TouchableOpacity style={styles.buttonEditar}
                    onPress={irFormulario}>
                    <Text>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonExcluir}
                    onPress={excluirTarefa}>
                    <Text>Excluir</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f4f1de',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
        height: 200
    },
    titulo: {
        fontSize: 18,
        padding: 10,
        backgroundColor: '#3d405b',
        color: '#fff'
    },
    descricao: {
        fontSize: 14,
        padding: 15,
        color: '#333'
    },
    buttonEditar: {
        borderRadius: 2,
        width: '15%',
        backgroundColor: "#81b29a",
        marginHorizontal: 10,
        padding: 3,
        color: '#fff'
    },
    buttonExcluir: {
        borderRadius: 2, 
        marginVertical: 5,
        marginHorizontal: 10,
        width: '15%',
        backgroundColor: "#e07a5f",
        padding: 3,
        fontWeight: "bold",
    },
    botoes: {
        marginTop: 50,
       }
});
export default Card;