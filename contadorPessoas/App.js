import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);

  }

  somar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  subtrair() {
    if (this.state.contador === 0) {
      alert('Números negativos')
      return;
    }
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <View>
        <Text style={styles.texto}>Contador de Pessoas</Text>

        <View style={styles.estilocontador}>
          <Text style={styles.center}>{this.state.contador}</Text>
        </View>

        <Pressable backgroundColor='#90be6d' style={styles.botao} onPress={this.somar}>
          <Text style={styles.textoBotao}>+</Text>
        </Pressable>

        <Pressable backgroundColor='#f94144' style={styles.botao} onPress={this.subtrair}>
          <Text style={styles.textoBotao}>-</Text>
        </Pressable>


      </View>
    )
  }
}

const styles = StyleSheet.create({

  estilocontador: {
    alignItems: 'center',
    marginTop: 70,
  },
  texto: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
    color: '#f8961e',
  },
  center: {
    textAlign: 'center',
    color: '#f94144',
    fontSize: 100,
    margin: 20,
    borderWidth: 3,
    borderColor: '#222',
    height: 150,
    width: 180,
  },
  botao:{
    width: 300,
    height: 50,
    marginTop: 20,
    left: 50
    },
    textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 22,
    color: 'white',
    }
    
})

export default App;