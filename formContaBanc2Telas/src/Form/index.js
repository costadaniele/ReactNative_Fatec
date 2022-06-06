import React, { Component } from 'react'
import { 
  Text, 
  View, 
  ScrollView, 
  TextInput, 
  Switch, 
  Pressable 
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'
import styleFormulario from './style'

class Formulario extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario: false,
      nome: null,
      idade: null,
      sexo: 'Feminino',
      escolaridade: 'Ensino fundamental incompleto',
      valorLimite: 0,
      brasileiro: true,
      nacionalidade: null
    }
    this.pegaNome = this.pegaNome.bind(this)
    this.pegaIdade = this.pegaIdade.bind(this)
    this.pegaSexo = this.pegaSexo.bind(this)
    this.pegaEscolaridade = this.pegaEscolaridade.bind(this)
    this.pegaLimite = this.pegaLimite.bind(this)
    this.pegaNacionalidade = this.pegaNacionalidade.bind(this)
    this.enviarDados = this.enviarDados.bind(this)
    this.avaliarSituacao = this.avaliarSituacao.bind(this)
  }

  pegaNome(valorDigitado) { this.setState({ nome:  valorDigitado}) }
  pegaIdade(valorDigitado) { this.setState({ idade:  valorDigitado}) }
  pegaSexo(valorDigitado) { this.setState({ sexo:  valorDigitado}) }
  pegaEscolaridade(valorDigitado) { this.setState({ escolaridade:  valorDigitado}) }
  pegaLimite(valorDigitado) { this.setState({ valorLimite:  valorDigitado}) }
  pegaNacionalidade(valorDigitado) { this.setState({ brasileiro:  valorDigitado}) }

  enviarDados() {
    this.props.navigation.navigate('Dados', {
      nome: this.state.nome,
      idade: this.state.idade,
      sexo: this.state.sexo,
      escolaridade: this.state.escolaridade,
      valorLimite: this.state.valorLimite,
      brasileiro: this.state.brasileiro,
      nacionalidade: this.state.nacionalidade
    })
  }

  avaliarSituacao() {
    if (
      this.state.nome != null          &&
      this.state.idade != null         &&
      this.state.sexo != null    &&
      this.state.escolaridade != null  &&
      this.state.valorLimite > 0       &&
      this.state.brasileiro != null
    ) { 
      this.setState({ usuario: true })
      if (this.state.usuario == true)
        if (!isNaN(this.state.idade))
          this.enviarDados()
    }  
    else {
      console.log(this.state) 
    }
  }

  render() {
    return(
      <ScrollView>
        <View style={styleFormulario.formulario}>
          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            color: "#264653",
            marginBottom: 5,
            textDecorationLine: 'underline'
          }}>
            Abertura de Conta
          </Text>
          <Text style={styleFormulario.inputTitulo}>Nome</Text>
          <TextInput
            onChangeText={ this.pegaNome }
            placeholder=" Digite o nome"
            style={styleFormulario.inputs}
          />
          <Text style={styleFormulario.inputTitulo}>Idade</Text>
          <TextInput
            onChangeText={ this.pegaIdade }
            placeholder=" Digite sua idade"
            style={styleFormulario.inputs}
          />
          <Text style={styleFormulario.inputTitulo}>Sexo</Text>
          <Picker 
            selectedValue={this.state.sexo}
            onValueChange={ (itemValue, itemIndex) => { 
              this.setState({ sexo: itemValue }) 
            }}>
            <Picker.Item key={1} value={"Feminino"} label="Feminino"/>
            <Picker.Item key={2} value={"Masculino"} label="Masculino"/>
            <Picker.Item key={3} value={"Outro"} label="Outro"/>
          </Picker>
          <Text style={styleFormulario.inputTitulo}>Escolaridade</Text>
          <Picker
            selectedValue={this.state.escolaridade}
            onValueChange={ (itemValue, itemIndex) => {
              this.setState({ escolaridade: itemValue })
            }}>
            <Picker.Item key={1} value={"Ensino fundamental incompleto"} label="Ensino fundamental incompleto"/>
            <Picker.Item key={2} value={"Ensino fundamental completo"} label="Ensino fundamental completo"/>
            <Picker.Item key={3} value={"Ensino médio incompleto"} label="Ensino médio incompleto"/>
            <Picker.Item key={4} value={"Ensino médio completo"} label="Ensino médio completo"/>
            <Picker.Item key={5} value={"Ensino superior incompleto"} label="Ensino superior incompleto"/>
            <Picker.Item key={6} value={"Ensino superior completo"} label="Ensino superior completo"/>
          </Picker>
          <Text style={styleFormulario.inputTitles}>Limite</Text>
          <Slider 
            minimumValue={50}
            maximumValue={200}
            step={1}
            minimumTrackTintColor='#264653'
            maximumTrackTintColor='#ccc'
            thumbTintColor='#264653'
            onValueChange={ 
              (valorSelecionado) => { 
                this.setState({ valorLimite: valorSelecionado })
              }
            }
            value={ this.state.valorLimite }
          />
          <Text style={{ marginTop: 15, textAlign: 'center', fontSize: 18 }}>
            { this.state.valorLimite.toFixed(0) }
          </Text>
          <Text style={styleFormulario.inputTitulo}>Nacionalidade</Text>
          <Switch 
            trackColor={{ false: "#ccc", true: "#264653" }}
            thumbColor={'#264653'}
            value={ this.state.brasileiro }
            onValueChange={
              (valorSelecionado) => {
                this.setState({ brasileiro: valorSelecionado })
              }
            }
          />
          <Text style={{ textAlign: 'center', fontSize: 18}}>
            { (this.state.brasileiro) ? "Brasileiro" : "Estrangeiro" }
          </Text>
          <Pressable 
              onPress={ this.avaliarSituacao }
              style={ ({pressed}) => [
                styleFormulario.baseBtn,
                pressed ? 
                  styleFormulario.btnPressed 
                  : styleFormulario.btn  
            ]}>
            <Text style={styleFormulario.btnTxt}>
              Confirmar
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    )
  }
}

export default Formulario