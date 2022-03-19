import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alcool: null,
      gasolina: null,
      verificar: '',
      resultado: ''
    }

    this.verificar = this.verificar.bind(this);
  }

  verificar() {
    let alcool = this.state.alcool;
    let gasolina = this.state.gasolina;

    let mensagem = '';

    if (alcool == null || gasolina == null)
      mensagem = 'Digite todos os valores';
    else {
      if (alcool / gasolina > 0.7)
        mensagem = 'Vale mais a pena usar Gasolina!';
      else
        mensagem = 'Vale mais a pena usar Álcool!';
    }

    this.setState({
      resultado: mensagem,
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Álcool ou Gasolina
        </Text>

        <Image
          source={{ uri: 'https://img.freepik.com/vetores-gratis/transporte-ecologico-combustivel-saudavel-combustivel-em-decomposicao-veiculo-sem-emissao-de-substancias-nocivas-posto-de-gasolina-amigo-do-ambiente_335657-3387.jpg?w=740' }}
          style={{ alignSelf: 'center', marginBottom: 30, width: 200, height: 200 }}
        />

        <TextInput
          style={styles.input}
          placeholder="Preço do Álcool"
          keyboardType={'numeric'}
          onChangeText={(text) => { this.setState({ alcool: text }) }}
        />

        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          placeholder="Preço da Gasolina"
          onChangeText={(text) => { this.setState({ gasolina: text }) }}
        />

        <Pressable style={styles.button} onPress={this.verificar}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>

        <Text style={styles.resultado}>{this.state.resultado}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    margin: 20,
    color: '#560bad'
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 5,
    backgroundColor: '#560bad',
    width: '100%',
    marginTop: 20
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    color: 'white',
  },
  resultado: {
    textAlign: 'center',
    color: '#f72585',
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
  }
});

export default App;