import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
class App extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        {/*travar scroll*/}
        {/*<ScrollView scrollEnabled={false}>*/}
        {/* Não mostrar scroll */}
        <ScrollView /*showsVerticalScrollIndicator={false}*/>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.box5}></View>
          <View style={styles.box6}></View>
          <View style={styles.box7}></View>
          <View style={styles.box8}></View>
          <View style={styles.box5}></View>
          <View style={styles.box6}></View>
          <View style={styles.box7}></View>
          <View style={styles.box8}></View>
        </ScrollView>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box1: {
    backgroundColor: 'red',
    height: 250,
  },
  box2: {
    backgroundColor: 'green',
    height: 250,
  },
  box3: {
    backgroundColor: 'yellow',
    height: 250,
  },
  box4: {
    backgroundColor: 'blue',
    height: 250,
  },
  box5:{
    backgroundColor: 'red',
    height: 250,
    width: 100,
    },
    box6:{
    backgroundColor: 'green',
    height: 250,
    width: 100,
    },
    box7:{
    backgroundColor: 'yellow',
    height: 250,
    width: 100,
    },
    box8:{
    backgroundColor: 'blue',
    height: 250,
    width: 100,
    }
})
export default App;

