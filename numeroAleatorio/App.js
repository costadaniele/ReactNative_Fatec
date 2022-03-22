import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numero: '',
    };

    this.sortear = this.sortear.bind(this);
  }

  sortear() {
    let num = Math.floor(Math.random() * 10)
    this.setState({ numero: num });
  }


  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.title}> Jogo do N° Aleatório</Text>

        <Image
          source={{ uri: 'https://img.freepik.com/vetores-gratis/fonte-de-vetor-3d-em-camadas-com-ponto-de-interrogacao_53876-144121.jpg?t=st=1647908346~exp=1647908946~hmac=4470f8f2a5ff61ff1088972946693a987f7d2c9ae2d53f9a15851ca56bdbf1ee&w=740' }}
          style={{ alignSelf: 'center', marginBottom: 30, width: 200, height: 200 }}

        />
        <Text style={styles.title}> Pense em um n° de 0 a 10</Text>

        <Text style={styles.resultado}>{this.state.numero}</Text>

        <Pressable style={styles.button} onPress={this.sortear}>
          <Text style={styles.text}>Descobrir</Text>
        </Pressable>
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
    fontSize: 40,
    marginTop: 30,
    fontWeight: 'bold',
  }
});

export default App;