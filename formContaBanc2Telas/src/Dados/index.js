import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import styleUsuario from './style'

export default Registro = ({ route }) => {
  const navigate = useNavigation()
  return(
    <View style={styleUsuario.container}>
      <Text style={styleUsuario.txt}>Nome: { route.params?.nome }</Text>      
      <Text style={styleUsuario.txt}>Idade: { route.params?.idade }</Text>
      <Text style={styleUsuario.txt}>Sexo: { route.params?.sexo }</Text>
      <Text style={styleUsuario.txt}>Escolaridade: { route.params?.escolaridade }</Text>
      <Text style={styleUsuario.txt}>Limite: { route.params?.valorLimite }</Text>
      <Text style={styleUsuario.txt}>
        Nacionalidade: { 
          route.params?.brasileiro == true ?
            'Brasileiro' : 'Estrangeiro'
        }
      </Text>      
    </View>
  )
}