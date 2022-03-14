import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {
  return (
    <View>
      <ScrollView>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/54379940?s=400&u=0b862e7de10e39cc56d0546551b909336e46486d&v=4' }}
          style={{ marginLeft: 100, width: 200, height: 200 }}
        />

        <Text style={{ backgroundColor: '#799496', color: '#fff', fontSize: 25, margin: 10 }}>Dados Pessoais</Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Daniele Costa</Text>
        <Text style={{ backgroundColor: '#799496', color: '#fff', fontSize: 25, margin: 10 }}>Formação</Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Graduada em Artes Visuais e estudante de Sistemas para Internet</Text>
        <Text style={{ backgroundColor: '#799496', color: '#fff', fontSize: 25, margin: 10 }}>Experiência</Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Analista de Teste Jr - Timepix Interactive Studio
        </Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Testadora de software - Timepix Interactive Studio - Estágio</Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Redatora - Fatec Baixada Santista Rubens Lara - Estágio</Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Pesquisadora SONatório</Text>
        <Text style={{ backgroundColor: '#799496', color: '#fff', fontSize: 25, margin: 10 }}>Projetos</Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Obra de arte sonora e web arte Cápsulas Sonoras</Text>
        <Text style={{ color: '#000', fontSize: 18, margin: 5 }}>Performance Audiovisual Memória Err0</Text>
      </ScrollView>

    </View>

  )
}

export default App;
