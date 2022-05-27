import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

function App (){

  const [valor, setValor] = useState()
  const [de, setDe] = useState('dolar')
  const [para, setPara] = useState('dolar')
  const [valorConvertido, setValorConvertido] = useState()

  function conversor(){
    if(de === 'dolar' && valor) {
      if(de === 'dolar' && valor) {
        if(para === 'real') {
          setValorConvertido(+valor * 4.75)
        } else if(para === 'dolar') {
          setValorConvertido(+valor)
        } else {
          setValorConvertido(+valor * 0.92)
        }
    } else if(para === 'real') {
        setValorConvertido(+valor)
      } else if(para === 'dolar') {
        setValorConvertido(+valor * 0.21)
      } else {
        setValorConvertido(+valor * 0.19)
      }
    } else if(de === 'euro' && valor) {
        if(para === 'real') {
          setValorConvertido(+valor * 5.09)
        } else if(para === 'dolar') {
          setValorConvertido(+valor * 1.09)
        } else {
          setValorConvertido(+valor)
        }
      }
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <Text style={styles.subtitle}>Dólar, Real e Euro</Text>

      <Text style={styles.text}>Valor: </Text>
      <TextInput style={styles.input}
        keyboardType='numeric'
        placeholder='Digite o valor a ser convertido'
        onChangeText={ (texto) => setValor(texto) }
      />

      <Text style={styles.text}>De: </Text>
      <Picker
        selectedValue={de}
        onValueChange={(texto) => setDe(texto)} 
        enabled={true} 
      >
        <Picker.Item label="dolar" value="dolar" />
        <Picker.Item label="real" value="real" />
        <Picker.Item label="euro" value="euro" />
      </Picker>

      <Text style={styles.text}>Para: </Text>
      <Picker
        selectedValue={para}
        onValueChange={(texto) => setPara(texto)} 
        enabled={true} 
      >
        <Picker.Item style={styles.text} label="dolar" value="dolar" />
        <Picker.Item label="real" value="real" />
        <Picker.Item label="euro" value="euro" />
      </Picker>

      <Pressable  onPress={conversor}>
        <Text style={styles.button}>
          Converter
        </Text>
      </Pressable>
      
      <Text style={styles.resposta}>Resultado: {valorConvertido}</Text>
  
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30,
    backgroundColor: '#FBF9FF'
  },
  title:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e63946',
    marginVertical: 3,
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 20,
    color: '#555',
    marginVertical: 2,
  },
  text:{
    color: '#003049',
    fontSize: 18,
    marginTop: 10,
    padding: 12
  },
  input:{
    height: 50,
    borderRadius: 5, 
    borderWidth: 2,
    marginVertical: 20,
    marginHorizontal: 6,
    fontSize: 15,
    borderColor: "#374A67",
    color: '#555'
  },
  button: {
    marginTop: 15,
    padding: 15,
    marginHorizontal: 3,
    backgroundColor: '#219ebc',
    textAlign: 'center',
    color: 'white',
  },
  resposta:{
    color: '#688B58',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 30,
  },
})

export default App;