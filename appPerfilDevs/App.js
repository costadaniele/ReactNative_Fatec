import React, {useState, useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard} from 'react-native';
import api from'./src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepDigite, setCepDigite] = useState(null);

  async function buscar(){
    if(cep == ''){
      alert("Digite o CEP:");
      setCep('');
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      setCepDigite(response.data);
      Keyboard.dismiss(); 
    } catch (error) {
      console.log('ERROR: ' + error);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Busca CEP</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite o CEP ... Ex. 48880000"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity 
          style={[styles.botao, { backgroundColor: '#3a86ff'}]}
          onPress={ buscar }
          >
          <Text style={styles.botaoText}> ➔ </Text>
        </TouchableOpacity>
      </View>
      
      { cepDigite && 
          <View style={styles.resultado}>
            <Text style={styles.itemText}>CEP: {cepDigite.cep}</Text>
            <Text style={styles.itemText}>Logradouro: {cepDigite.logradouro}</Text>
            <Text style={styles.itemText}>Bairro: {cepDigite.bairro}</Text>
            <Text style={styles.itemText}>Cidade: {cepDigite.localidade}</Text>
            <Text style={styles.itemText}>Estado: {cepDigite.uf}</Text>
          </View>
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text:{
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#473bf0',
    borderRadius: 5,
    width: '60%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent:  'center'
  },
  botao:{
    height: 50,
    width: 70,
    alignItems: 'center',
    padding: 15,
    borderRadius: 2,
  },
  botaoText:{
    fontSize: 16,
    color: '#FFF'
  },
  resultado:{
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText:{
    fontSize: 18,
    padding: 10,
    color: '#555',
    fontWeight: 'bold'
  },
})