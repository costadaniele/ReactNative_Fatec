import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Filmes extends Component {
    render() {
        const { nome, foto, sinopse } = this.props.data;
        return (
            <View style={{ backgroundColor: 'black' }}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => alert(sinopse)}>
                            <Text style={styles.textoBotao}>Leia mais</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: foto }} style={styles.capa} />

                    
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#560bad',
        marginTop: 20,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },

    titulo: {
        fontSize: 18,
        padding: 15,
        color: '#FFF',
        fontWeight: 'bold'
    },

    capa: {
        height: 280,
    },

    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -40,
        zIndex: 9
    },

    botao: {
        width: 100,
        backgroundColor: '#ffca3a',
        opacity: 1,
        padding: 8,
        marginBottom: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },

    textoBotao: {
        textAlign: 'center',
        color: '#333',
        fontWeight: 'bold'
    },
});

export default Filmes;