import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: '',
      n2: '',
      resultado: ''
    };

    this.calcular = this.calcular.bind(this);
  }

  calcular() {
    if ((this.state.n1 === '') || (this.state.n2 === '')) {
      alert('Campos vazios')
      return;
    }
    var r = this.state.n1 * this.state.n2
    this.setState({ resultado: 'Resultado: ' + r });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.area} >

        <View  style={styles.area} >
          <Text style={styles.texto2}>Multiplicador de números</Text>
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Digite o 1° número"
            onChangeText={(texto) => this.setState({ n1: texto })}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite o 2° número"
            onChangeText={(texto) => this.setState({ n2: texto })}
          />
        </View>

        <Pressable style={styles.botao} onPress={this.calcular}>
          <Text style={styles.textoBotao}>Calcular</Text>
        </Pressable>

        <View>
          <Text style={styles.texto}> {this.state.resultado} </Text>
        </View>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#3d405b"
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#2A2B2A',
    margin: 20,
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: 300,
    left: 25,
    backgroundColor: '#f4f1de'
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    color: '#f9c74f',
    margin: 30,
  },
  texto2: {
    textAlign: 'center',
    fontSize: 26,
    color: '#f9c74f',
  },
  area: {
    marginTop: 40,
    marginBottom: 80,
    backgroundColor:"#3d405b"
  },
  botao: {
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    left: 70,
    margin: 30,
    backgroundColor: '#e07a5f'
  },

  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 18,
    color: '#fff'
  }

})

export default App;