import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Form from './src/components/Form/index'
import Galeria from './src/components/Galeria/index'

const Stack = createStackNavigator()

const infoHeaderTelas = (a, b, c, d = false) => {
  return {
    title: `${a}`,
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 20, color: '#fff',  fontSize: 22 },
    headerStyle: { 
      backgroundColor: `${b}`, 
      elevation: 0
    },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Formulario"
          component={ Form } 
          options={
            infoHeaderTelas(
              'Formulário',
              '#054A91',
              '#ccc',
              false
            )
          }
        />
        <Stack.Screen 
          name="Galeria"
          component={ Galeria }
          options={
            infoHeaderTelas(
              'Galeria',
              '#054A91',
              '#ccc',
              true
            )
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}