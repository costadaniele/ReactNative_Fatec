import React, { Component } from 'react'
import { View, Text, Switch, ScrollView, TextInput, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dia: false,
      tamanho: false,
      fraseGuardada: ' '
    }
    this.changeBoardColor = this.changeBoardColor.bind(this)
    this.changeStoredTxtColorAndSize = this.changeStoredTxtColorAndSize.bind(this)
  }

  async componentDidMount() {
    const atualizarItems = async (listaChaves) => {
      await AsyncStorage.multiGet(listaChaves, (erro, storedItems) => {
        for (let item of storedItems) {
          console.log(item)
          try {
            if (item[0] === 'frase')
              this.setState({ fraseGuardada: item[1] })
            else if (item[0] === 'diaGuardado')
              this.setState({ dia: JSON.parse(`${item[1]}`.toLowerCase()) })
            else if (item[0] === 'tamanhoGuardado')
              this.setState({ tamanho: JSON.parse(`${item[1]}`.toLowerCase()) })
          }
          catch (e) {
            console.log(e)
          }
        }
      })
    }
    atualizarItems([
      'frase',
      'diaGuardado',
      'tamanhoGuardado'
    ])
  }

  async componentDidUpdate(_, statsAnterior) {
    const frase = this.state.fraseGuardada
    const dia = this.state.dia
    const tamanhoFonte = this.state.tamanho

    try {
      if (statsAnterior.fraseGuardada != frase)
        await AsyncStorage.setItem('frase', frase)

      else if (statsAnterior.dia != dia)
        await AsyncStorage.setItem('diaGuardado', `${dia}`)

      else if (statsAnterior.tamanho != tamanhoFonte)
        await AsyncStorage.setItem('tamanhoGuardado', `${tamanhoFonte}`)
    }
    catch (e) {
      console.log(`Error -> ${e}`)
    }
  }

  changeBoardColor() {
    const estilo = {
      display: 'flex',
      height: 400,
      margin: 15,
      padding: 15,
      borderRadius: 5
    }
    this.state.dia === false ?
      estilo.backgroundColor = '#C2C1C2' :
      estilo.backgroundColor = '#42213D'
    return estilo
  }

  changeStoredTxtColorAndSize() {
    const estilo = {
      flex: 1,
    }
    const dia = this.state.dia
    const tamanho = this.state.tamanho

    dia === true ?
      estilo.color = '#fff' : estilo.color = '#555'
    tamanho == true ?
      estilo.fontSize = 25 : estilo.fontSize = 18

    return estilo
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Frases</Text>
        <View style={styles.area}>
          
          <Text style={styles.txt}>
          <Switch
            value={this.state.dia}
            onValueChange={(vlDia) => this.setState({ dia: vlDia })}
          /> {this.state.dia ? 'Noite' : 'Dia'}
          </Text>
          
          <Text style={styles.txt}> <Switch
            value={this.state.tamanho}
            onValueChange={vlSize => this.setState({ tamanho: vlSize })} />
            {this.state.tamanho ? 'Grande' : 'Pequeno'}
          </Text>

          
        </View>
        <ScrollView style={this.changeBoardColor()}>
          <TextInput
            onChangeText={txtDigitado => this.setState({ fraseGuardada: txtDigitado })}
            style={this.changeStoredTxtColorAndSize()}
            multiline={true}
            defaultValue={this.state.fraseGuardada}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dee2e6'
  },
  titulo: {
    fontSize: 30,
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    color: '#683257'
  },
  botao: {
    backgroundColor: '#B5C2B7',
    borderRadius: 3,
    textAlign: 'center',
  },
  txt: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 25,
    alignSelf: 'flex-start'
  },
  area: {
    backgroundColor: '#555',
    color: '#fff',
    margin: 15,
    padding: 10,
    borderRadius: 5

  }
});