import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, View, FlatList, StatusBar, Text} from 'react-native';

import api from './src/services/api';
import Filmes from './src/services/filmes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data,
      loading: false,
    });
  }

  render() {
    
    if (this.state.loading) {
      return(
        
        <View style={{alignItems:'center', justifyContent:'center', flex:1, backgroundColor:'black'}}>
          <StatusBar backgroundColor={'black'}/>
          <ActivityIndicator color="#6a4c93" size={20}/>
          <Text style={styles.topo}>App de Filmes</Text>
        </View>
      )
    } else {
      return (
        
        <View style={styles.container}>
          
          <StatusBar backgroundColor={'black'}/>
          <Text style={styles.topo}>App de Filmes</Text>
          <FlatList
            data={this.state.filmes}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <Filmes data={item} />}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topo: {
    fontSize: 20, 
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#f72585',
    fontFamily: 'Roboto',
    
  }
});

export default App;