/* Primeira parte da Aula

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aula de React Native</Text>
      <FontAwesome name='home' size={45} color='#11118c' />
      <Feather name='activity' size={35} color='#54a300' />


      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome name='youtube' size={25} color='#FFF' />
        <Text style={styles.btnText}>Acessar YouTube</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnYoutube: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    marginTop: 10
  },
  btnText: {
    paddingLeft: 10,
    color: '#FFF'
  }
}) */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#7A306C'
            },
            headerTintColor: '#FFF',
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            title: 'Sobre',
            headerStyle: {
              backgroundColor: '#7A306C'
            },
            headerTintColor: '#FFF',
            //headerShown: false,
          }}
        />

        <Stack.Screen
          name="Contato"
          component={Contato}
          options={{
            title: 'Sobre',
            headerStyle: {
              backgroundColor: '#7A306C'
            },
            headerTintColor: '#FFF',
            //headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


