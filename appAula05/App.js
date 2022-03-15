import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: 'Daniele'
        };
        this.entrar = this.entrar.bind(this);
    }
    entrar() {
        this.setState({
            nome: 'Daniele Costa'
        });
    }
    render() {
        return (
            <View style={{ marginTop: 20 }}>
                <Button title="Entrar" onPress={this.entrar} />
                <Text style={{
                    fontSize: 28, color: 'green', textAlign:
                        'center'
                }}>
                    {this.state.nome}
                </Text>
            </View>
        )
    }
}
export default App;



/*import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
class App extends Component {
    render() {
        let nome = 'Criado por Daniele Costa';
        return (
            <View>
                <Text>Fatec Rubens Lara</Text>
                <Text>Sistemas para Internet</Text>
                <Text style={{ color: '#FF0000', fontSize: 25, margin: 20 }}>
                    React Native - Nacgyver
                </Text>
                <Macgyver />
                <Macgyver largura={500} altura={200} nome='Macgyver' />
                <Macgyver largura={150} altura={200} nome='Macgyver' />
                <Text style={{ fontSize: 15 }}>{nome}</Text>
            </View>
        )
    }
}
class Macgyver extends Component {
    render() {
        let img =
            'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
        return (
            <Image
                source={{ uri: img }}
                style={{ width: this.props.largura, height: this.props.altura}}
            />
        )
    }
}
export default App; */

