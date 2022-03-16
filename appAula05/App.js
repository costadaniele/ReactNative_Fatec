import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Button, TextInput, Pressable } from 'react-native';
import { styles } from './styles';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saudacao: 'Olá',
            nome: ''
        };
        this.entrar = this.entrar.bind(this);
        this.pegaNome = this.pegaNome.bind(this);
    }

    pegaNome(texto) {
        if (texto.length > 0) {
            this.setState({ nome: 'Bem vinda(o)!: ' + texto });
        }
        else {
            this.setState({ nome: texto });
        }
    }


    entrar(nomeEnviado) {
        this.setState({
            saudacao: nomeEnviado
        });
    }

    clicou() {
        alert('Clicou aqui!');
    }



    render() {

        let nome = 'Criado por Daniele Costa';
        return (

            <View style={styles.area}>
                <ScrollView>
                    <View style={styles.area}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome?"
                            onChangeText={this.pegaNome}
                        />
                        <Text style={styles.texto}> {this.state.nome} </Text>
                    </View>

                    <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Fatec - Rubens Lara</Text>
                    <Text style={styles.alinhaTexto}>Sistemas para Internet</Text>
                    <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
                        React Native
                    </Text>
                    <View style={{ marginTop: 20 }}>
                        <Button title="Clique aqui" onPress={() => this.entrar('Bem-vindo!')} />
                        < Text style={{
                            fontSize: 28, color: 'red', textAlign:
                                'center'
                        }}>
                            {this.state.saudacao}
                        </Text>
                    </View>
                    <Macgyver />
                    <Macgyver />
                    <Text style={{ fontSize: 15 }}>{nome}</Text>
                    <Teste largura={500} altura={200} nome='Macgyver Profissão Perigo!' />

                    <View style={styles.container}>
                        <Button color='green' title='Teste Button' onPress={() =>
                            this.clicou()} />
                        <Pressable style={styles.botao} onPress={() => this.clicou()}>
                            <Text style={styles.textoBotao}>Teste Pressable</Text>
                        </Pressable>
                    </View>


                </ScrollView>
            </View>
        )
    }
}
class Macgyver extends Component {
    render() {
        let img =
            'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
        return (
            <Image
                source={{ uri: img }}
                style={{ width: 100, height: 100, margin: 10, }}

            />
        )
    }
}

class Teste extends Component {
    render() {
        let img =
            'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
        return (
            <View>
                <Image
                    source={{ uri: img }}
                    style={{
                        width: this.props.largura, height:
                            this.props.altura
                    }}
                />
                <Text>{this.props.nome}</Text>
            </View>
        )
    }
}

export default App;