import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch, TextInput, ScrollView, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.mostrarDados.bind
    this.state = {
      nome: '',
      idade: 0,
      sexo: 'Outro',
      escolaridade: '',
      brasileiro: false,
      valor: 0,
      dados: '',
      nacionalidade: ''
    };


  };


  mostrarDados() {
    if (this.state.brasileiro == true) {
      this.state.nacionalidade = 'Brasileiro'
    }
    else {
      nacionalidade = 'Estrangeiro'
    }
    this.setState({
      dados:

        'Nome: ' + this.state.nome + '\n'
        + 'Idade: ' + this.state.idade + '\n'
        + 'Sexo: ' + this.state.sexo + '\n'
        + 'Escolaridade: ' + this.state.escolaridade + '\n'
        + 'Nacionalidade: ' + this.state.nacionalidade + '\n'
        + 'Limite: R$' + this.state.valor + ',00'
    })
  }

  render() {

    return (
      <ScrollView>

        <View style={styles.container}>

          <Text style={styles.txtPrincipal}>Abertura de Conta</Text>
          <View style={styles.boxCont}>
            <Text style={styles.txtTitulo}>Nome: </Text>
            <TextInput
              style={styles.entrada}
              onChangeText={(texto) => this.setState({ nome: texto })}
            />
          </View>

          <View style={styles.boxCont}>
            <Text style={styles.txtTitulo}>Idade: </Text>
            <TextInput
              style={styles.entrada}
              onChangeText={(texto) => this.setState({ idade: texto })}
            />
          </View>

          <View style={styles.boxCont}>
            <Text style={styles.txtTitulo}>Sexo: </Text>
            <Picker
              style={{
                marginLeft: 30
              }
              }
              selectedValue={this.state.sexo}
              //onChangeText={(texto) => this.setState({ sexo: texto })}
              onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}
            >
              <Picker.Item key={1} value={"Outro"} label="Outro" style={styles.txtOp} />
              <Picker.Item key={2} value={"Masculino"} label="Masculino" style={styles.txtOp} />
              <Picker.Item key={3} value={"Feminino"} label="Feminino" style={styles.txtOp} />
            </Picker>

          </View>


          <View style={styles.boxCont}>
            <Text style={styles.txtTitulo}>Escolaridade: </Text>
            <Picker style={{
              marginLeft: 30
            }
            }
              selectedValue={this.state.escolaridade}

              //onChangeText={(texto) => this.setState({ sexo: texto })}
              onValueChange={(itemValue, itemIndex) => this.setState({ escolaridade: itemValue })}
            >
              <Picker.Item key={1} value={"Ensino Fundamental"} label="Ensino Fundamental" style={styles.txtOp} />
              <Picker.Item key={2} value={"Ensino Médio"} label="Ensino Médio" style={styles.txtOp} />
              <Picker.Item key={3} value={"Ensino Superior"} label="Ensino Superior" style={styles.txtOp} />
            </Picker>
          </View>

          <View style={styles.boxCont}>
            <Text style={styles.txtTitulo}>Limite: </Text>

            <Slider
              style={
                { marginLeft: 10 }
              }
              minimumValue={100}
              maximumValue={1000}
              onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
              value={this.state.valor}
              step={10}
              minimumTrackTintColor='#fb5607'
              maximumTrackTintColor='#ccc'
              thumbTintColor='#fca311'
            />

            <View style={styles.boxCont}>
              <Text style={styles.txtTitulo}>Brasileiro: </Text>
              <Switch
                style={
                  {
                    marginLeft: 30
                  }
                }
                value={this.state.brasileiro}
                onValueChange={(valorSwitch) => this.setState({ brasileiro: valorSwitch })}
                thumbColor='#fca311'
                onChangeText={(texto) => this.setState({ brasileiro: texto })}

              />
            </View>
          </View>
        </View>

        <Pressable
          style={styles.botao}
          onPress={() => this.mostrarDados()}
        >
          <Text style={styles.textoBtn}>Confirmar</Text>
        </Pressable>
        <Text style={styles.header}>Dados Informados: </Text>
        <Text style={styles.txtDados}>{this.state.dados}</Text>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#306BAC'
  },
  entrada: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 22,
    fontSize: 16,
    marginLeft: 30,
    padding: 12

  },
  txtPrincipal: {
    fontSize: 25,
    margin: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  txtTitulo: {
    fontSize: 14,
    margin: 8,
    color: '#22223b'

  },
  txtOp: {
    fontSize: 15,
    margin: 20,
    color: '#fca311'
  },
  botao: {
    backgroundColor: '#fca311',
    color: 'white',
    width: 150,
    textAlign: 'center',
    borderRadius: 22,
    marginTop: 40,
    padding: 12,
    alignSelf: 'center'
  },
  textoBtn: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  boxCont: {
    backgroundColor: "#306BAC",
    borderRadius: 2,
    margin: 20,
    padding: 10,
    color: '#555'
  },
  header: {
    fontSize: 18,
    textAlign: 'left',
    margin: 22,
    color: '#555',
    fontWeight: 'bold'
  },
  txtDados: {
    fontSize: 16,
    textAlign: 'left',
    margin: 22,
    color: '#306BAC',
    fontWeight: 'bold'
  }
});