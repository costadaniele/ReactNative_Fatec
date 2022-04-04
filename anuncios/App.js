import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Anúncios
        </Text>
        <View></View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/ilustracao-do-novo-conceito-de-produto_114360-6721.jpg?t=st=1649093947~exp=1649094547~hmac=2cc3b17d595849bb76ac9d5e8393640b71499385259f38a90ad6c6b43fd19bb1&w=740' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/crescimento-da-receita-freelancer-sentado-nas-moedas-e-trabalhando-com-o-personagem-de-desenho-animado-do-laptop-ganhar-dinheiro-vendas-virtuais-estrategia-de-marketing-ilustracao-vetorial-de-metafora-de-conceito-isolado_335657-2755.jpg?w=740&t=st=1649094654~exp=1649095254~hmac=796b43935f1e5ccf111720ad1a052c72aa2f099a88bbcb0e1d6388e1abf0d19a' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/estrategia-de-vendas-de-funil-monetizacao-de-lucro-publico-alvo-geracao-de-leads-marketing-de-conversao-personagem-de-desenho-animado-do-marketologist-negocio-online_335657-390.jpg?w=740&t=st=1649094659~exp=1649095259~hmac=8d2ea5004d5e904f099c751f08c6a1985f9c95a0c4f59bccf80401304e3bfbb3' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/funil-de-vendas-geracao-de-leads-gestao-de-clientes-estrategia-de-marketing-elemento-de-design-plano-de-conversao-de-comercio-plano-de-venda-ilustracao-do-conceito-de-filtro-de-clientes_335657-2009.jpg?w=740&t=st=1649094670~exp=1649095270~hmac=99253ddd96775b3508c29a7fbc81fae1ac00292ae4fe16ff87373905fc63d50f' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/abordagem-de-venda-personalizada-estrategia-de-marketing-moderna-interacao-com-vendedor-e-comprador-comunicacao-de-mercado-o-vendedor-oferece-mercadorias-ao-cliente-ilustracao-vetorial-de-metafora-de-conceito-isolado_335657-2767.jpg?w=740&t=st=1649094867~exp=1649095467~hmac=e7d6a7e3e49eb6d58e86537c6f683359f1eab2b313135230ec4cbe29069e515d' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/crescimento-da-receita-freelancer-sentado-nas-moedas-e-trabalhando-com-o-personagem-de-desenho-animado-do-laptop-ganhar-dinheiro-vendas-virtuais-estrategia-de-marketing-ilustracao-vetorial-de-metafora-de-conceito-isolado_335657-2755.jpg?w=740&t=st=1649094654~exp=1649095254~hmac=796b43935f1e5ccf111720ad1a052c72aa2f099a88bbcb0e1d6388e1abf0d19a' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/ilustracao-isometrica-de-supermercado-loja-online-com-carrinho-de-transporte-de-personagens-com-compras_1284-63637.jpg?w=740&t=st=1649094942~exp=1649095542~hmac=b91ae401cf1cbc864d41cf4b20a3eeb0a9fbbe1f01352b5803132b526b5ae0ef' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
          <Image
            source={{ uri: 'https://img.freepik.com/vetores-gratis/crescimento-da-receita-freelancer-sentado-nas-moedas-e-trabalhando-com-o-personagem-de-desenho-animado-do-laptop-ganhar-dinheiro-vendas-virtuais-estrategia-de-marketing_335657-2334.jpg?w=740&t=st=1649094667~exp=1649095267~hmac=6171b6f4ce1029626eca2e19abfbc4584de6486c452e63e35c1638246e642324' }}
            style={{ width: 200, height: 250, margin:10 }}
          />
         
        </ScrollView>
        
          <Text style={styles.title}>
          ← 	→ 
        </Text>
        
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECDC4',
    alignItems: 'center',
    
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    margin: 80,
    color: '#FF6B6B',
    backgroundColor: '#FFE66D',
  },
})
export default App;

