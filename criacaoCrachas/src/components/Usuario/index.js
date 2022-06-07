import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../style'

const Usuario = ({ data }) => {
  return(
    <View style={styles.usuario}>
      <View>
        <Image style={styles.imagem} 
          source={{ uri: data?.urlFoto }}
        />
      </View>
      <View style={styles.containerCad}>
        <Text style={styles.nome}>{ data?.nome }</Text>
        <Text style={styles.titulo}>{ data?.area }</Text>
      </View>
    </View>
  )
}

export default Usuario