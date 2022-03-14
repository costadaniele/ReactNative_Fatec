import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
  return(
   
    <View style={{backgroundColor: '#13293D'}}>
     
      <Text style={{backgroundColor: '#799496', color: '#fff', fontSize: 25, margin: 15}}>Fatec</Text>
      <Text style={{backgroundColor: '#799496', color: '#fff', fontSize: 25, margin: 15}}>Sistemas para Internet!</Text>

     <Image
          source={{ uri: 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg'}}
          style={{ width: 300, height: 300, margin: 15}}
     />
     
    </View>
 
  )
}
 
export default App;

/*import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
class App extends Component {
  render() {
    let nome = 'Meu Primeiro App';
    let img =
      'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
    return (
      <View>
        <Text>Olá Turma novamente!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          React Native

        </Text>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontSize: 30 }}>{nome}</Text>
      </View>
    )
  }
}
export default App;*/

/*import React, { Component } from 'react';
import { View, Text} from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View>
        <Text>Olá Turma novamente!</Text>
        <Text>Meu Primeiro App</Text>
      </View>
    )
  }
}
 
export default App;*/

