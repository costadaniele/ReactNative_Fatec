import React, { Component} from 'react';
import { StyleSheet, Text, TextInput, Pressable, View, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)

    this.state =
    {
      altura: null,
      peso: null,
      resultado: '',
      resultadoText: ""
    }

    this.verificar = this.verificar.bind(this)
  }

  verificar() {
    let imc = this.state.peso / (this.state.altura * this.state.altura)
    let s = this.state
    s.resultado = imc

    if (this.state.altura == null || this.state.peso == null) {
      s.resultadoText = 'Digite todos os valores'
    }
    else if (s.resultado < 0.185) {
      s.resultadoText = 'Abaixo do Peso'
    }
    else if (s.resultado < 0.25) {
      s.resultadoText = 'Peso Normal'
    }
    else if (s.resultado < 0.30) {
      s.resultadoText = 'Sobrepeso'
    }
    else if (s.resultado < 0.35) {
      s.resultadoText = 'Obesidade Grau 1°'
    }
    else if (s.resultado <= 0.40) {
      s.resultadoText = 'Obesidade Grau 2°'
    }
    else {
      s.resultadoText = 'Obesidade Grau 3°'
    }
    this.setState(s)
  }

  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.title}>
          Cálculo do IMC
        </Text>

        <Image
          source={{ uri: 'https://img.freepik.com/vetores-gratis/ilustracao-em-vetor-conceito-abstrato-de-indice-de-massa-corporal-diagnostico-de-problemas-de-saude-programa-de-perda-de-peso-indice-de-gordura-corporal-imc-saudavel-formula-de-calculo-metafora-abstrata-do-plano-de-nutricao_335657-4039.jpg?t=st=1647721900~exp=1647722500~hmac=94ebea6be5319a017607c8ea1989b43a208018b06006fdf9b1228a36da2ce961&w=740' }}
          style={{ alignSelf: 'center', marginBottom: 30, width: 200, height: 200 }}
        />

        <TextInput style={styles.input} placeholder="Peso" keyboardType="numeric"
          onChangeText={(text) => { this.setState({ peso: text }) }} />
       
        <TextInput style={styles.input} placeholder="Altura" keyboardType="numeric" 
         onChangeText={(text) => { this.setState({ altura: text }) }} />


        <Pressable style={styles.button} onPress={this.verificar}>
          <Text style={styles.text}>Verificar</Text>
        </Pressable>

        <Text style={[styles.resultado, { fontSize: 20 }]}>{this.state.resultadoText}</Text>

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