import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Pessoal from './src/components/Pessoal/index'
import Formacao from './src/components/Formacao/index'
import Experiencia from './src/components/Experiencia/index'

const Drawer = createDrawerNavigator()

const infoHeaderTelas = (
  a = null ,
  b = null ,
  c = null ,
  d = false
) => {
  return {
    title: `${a}`,
    headerStyle: { backgroundColor: `${b}` },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

export default App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Pessoal" 
          component={ Pessoal }
          options={ infoHeaderTelas('Perfil') } 
        />
        <Drawer.Screen 
          name="Formação" 
          component={ Formacao }
          options={ infoHeaderTelas('Formação') }
        />
        <Drawer.Screen 
          name="Experiência" 
          component={ Experiencia }
          options={ infoHeaderTelas('Experiência') }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}