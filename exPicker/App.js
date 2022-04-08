import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        { nome: 'Strogonoff', valor: 35.90 },
        { nome: 'Calabresa', valor: 59 },
        { nome: 'Quatro queijos', valor: 37 },
        { nome: 'Brigadeiro', valor: 25.70 },
        { nome: 'Portuguesa', valor: 70 },
      ]
    }
  }
  render() {
    let pizzasItem = this.state.pizzas.map((valor, chave) => {
      return <Picker.Item key={chave} value={chave} label={valor.nome} />
    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>
        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue, itemIndex) => this.setState({
            pizza:
              itemValue
          })}
        >
          {pizzasItem}
        </Picker>
        <Text style={{
          textAlign: 'center', fontSize:
            30
        }}>{this.state.pizza}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});