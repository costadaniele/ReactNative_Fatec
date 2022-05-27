import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from
  'react-native';
import api from './src/services/api';
import Tarefas from './src/Tarefas';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
      loading: true
    };
  }
  async componentDidMount() {
    const response = await api.get('/tasks');
    this.setState({
      tarefas: response.data,
      loading: false
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={{
          alignItems: 'center', justifyContent: 'center',
          flex: 1
        }}>
          <ActivityIndicator color="#09A6FF" size={40} />
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.tarefas}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Tarefas data={item} />}
          />
        </View>
      )
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
export default App;
