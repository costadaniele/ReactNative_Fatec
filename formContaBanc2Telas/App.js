import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Form from './src/Form/index'
import Dados from './src/Dados/index'

const Stack = createStackNavigator()

const telas = (a, b, c, d = false) => {
  return {
    title: `${a}`,
    headerStyle: { backgroundColor: `${b}` },
    headerTintColor: `${c}`,
    headerShown: d
  }
}

export default App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Form"  
          component={ Form } 
          options={ telas(
              true
            )} 
          />    
          <Stack.Screen 
          name="Dados" 
          component={ Dados } 
          options={ telas(
              'Usuário Cadastrado',
              '#2a9d8f',
              '#fff',
              true
            )} 
          />    
      </Stack.Navigator>
    </NavigationContainer>
  )
}