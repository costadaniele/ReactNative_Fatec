import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Tarefas extends Component {
    render() {
        const { title, description } = this.props.data;
        return (
            <View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{title}</Text>
                    <Text style={styles.descricao}>{description}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#FFF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },
    titulo: {
        fontSize: 18,
        padding: 15,
    },
    descricao: {
        fontSize: 10,
        padding: 15,
    },
});
export default Tarefas;