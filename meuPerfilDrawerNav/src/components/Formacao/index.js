import React from 'react'
import { View, Text } from 'react-native'
import style from '../Formacao/style'

export default Formacao = () => {
  return(
    <View style={style.fundoTela}>
      <View style={style.container}>
        <Text style={style.titulo}>Formação</Text>
        <Text style={style.txt}>
        Graduada em Artes Visuais pela UFRB - Universidade Federal do Recôncavo da Bahia
        </Text>
        <Text style={style.txt}>Estudante de Sistemas para Internet pela Fatec - Rubens Lara da Baixada Santista</Text>
      </View>
    </View>
  )
}