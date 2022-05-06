import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
export default function Pessoal() {
    return (
        <ScrollView>
            <View >
                <Text style={{ backgroundColor: '#3A1772', color: '#fff', fontSize: 18, textAlign: 'center', padding: 30 }}>Pessoal</Text>
            </View>
            <Text style={{ backgroundColor: '#D741A7', color: '#fff', fontSize: 25, textAlign: 'center' }}>Daniele Costa</Text>
            <Image
                source={{ uri: 'https://avatars.githubusercontent.com/u/54379940?s=400&u=0b862e7de10e39cc56d0546551b909336e46486d&v=4' }}
                style={{ marginLeft: 100, width: 200, height: 200, margin: 40 }}
            />
            <Text style={{ color: '#2F3E46', margin: 10, textAlign: 'center', fontSize: 16 }}>⚡ Analista de Teste Jr.

⚡ Entusiasta por programação e pelas possibilidades de criação pelos computadores.

⚡ Artista que gosta de usar código.

⚡ Estudante de código.

</Text>


        </ScrollView>

    );
}
