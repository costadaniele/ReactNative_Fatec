import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Vagas
        </Text>
        <View></View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.quadro}>
            <Text style={styles.titulo_vaga}>
              Desenvolvedor Backend
            </Text>
            <Text style={styles.descricao}>
              Salário: R$ 3000,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: .........
            </Text>
            <Text style={styles.descricao}>
              Contato: (99)99999-999999
            </Text>
          </View>
          <View style={styles.quadro}>
            <Text style={styles.titulo_vaga}>
              Engenheiro de Dados
            </Text>
            <Text style={styles.descricao}>
              Salário: R$ 3000,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: .........
            </Text>
            <Text style={styles.descricao}>
              Contato: (99)99999-999999
            </Text>
          </View>
          <View style={styles.quadro}>
            <Text style={styles.titulo_vaga}>
              Desenvolvedor FrontEnd
            </Text>
            <Text style={styles.descricao}>
              Salário: R$ 3000,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: .........
            </Text>
            <Text style={styles.descricao}>
              Contato: (99)99999-999999
            </Text>
          </View>
          <View style={styles.quadro}>
            <Text style={styles.titulo_vaga}>
              Analista de Teste
            </Text>
            <Text style={styles.descricao}>
              Salário: R$ 3000,00
            </Text>
            <Text style={styles.descricao}>
              Descrição: .........
            </Text>
            <Text style={styles.descricao}>
              Contato: (99)99999-999999
            </Text>
          </View>

        </ScrollView>

      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#59A5D8',
    alignItems: 'center',

  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    margin: 40,
    color: '#fff',
  },
  quadro: {
    backgroundColor: '#FFE66D',
    height: 200,
    width: 380,
    margin: 10,
    borderColor: '#000',
    borderWidth: 1,
  },
  titulo_vaga: {
    textAlign: 'center',
    fontSize: 25,
    color: '#4F7CAC',
  },
  descricao: {
    textAlign: 'left',
    fontSize: 20,
    margin: 10
  },
})
export default App;