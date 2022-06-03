import React from 'react'
import { View, Text } from 'react-native'
import style from '../Experiencia/style'

export default Experiencia = () => {
  return(
    <View style={style.fundoTela}>
      <View style={style.container}>
        <Text style={style.titulo}>Experiência</Text>
        <Text style={style.txt}>Analista de Teste Jr - Timepix Interactive Studio</Text>
        <Text style={style.txt}>Testadora de software - Timepix Interactive Studio - Estágio</Text>
        <Text style={style.txt}>Redatora - Fatec Baixada Santista Rubens Lara - Estágio</Text>
        <Text style={style.txt}>Pesquisadora SONatório</Text>
        <Text style={style.titulo}>Projetos</Text>
        <Text style={style.txt}>Obra de arte sonora e web arte Cápsulas Sonoras</Text>
        <Text style={style.txt}>Performance Audiovisual Memória Err0</Text>
      </View>
    </View>
  )
}
