import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Pressable, FlatList } from 'react-native'
import { openDatabase } from 'react-native-sqlite-storage'
import style from './src/style'

const myDB = openDatabase({ name: 'listaDeCompras' })

export default App = () => {
  const [nmProduto, setNmProduto] = useState('')
  const [qtProduto, setQtProduto] = useState(0)
  const [produtosComp, setProdutosComp] = useState([])

  const msgConsole = (txt) => {
    console.log(`- ${txt} -`)
  }

  const criarTabelas = () => {
    myDB.transaction(txn => { 
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tb_compras (
          id INTEGER PRIMARY KEY AUTOINCREMENT, 
          nm_produto VARCHAR(20) NOT NULL,
          qt_produto INTEGER DEFAULT 1
        )`,
        [],
        (sqlTxn, response) => {
          msgConsole('Tabela criada com sucesso!')
        },
        error => {
          msgConsole(`Erro ao criar tabela: ${error.message}`)
        }
      )
    })
  }

  const deleteCompra = (id) => {
    myDB.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tb_compras WHERE id = ?`, [id],
        (sqlTxn, response) => {
          msgConsole(`Compra com ID = ${id} deletada com Sucesso!`)
          setProdutosComp('')
          getCompras()
        },
        error => {
          msgConsole(`Erro ao deletar compra com ID = ${id}: ${error.message}`)
        }
      )
    })
  }

  const addCompra = () => {
    if(!nmProduto && !qtProduto) {
      alert('Informe a quantidade e o Produto!')
      return false
    }

    else if(!nmProduto) {
      alert('Informe o Produto!')
      return false
    }

    else if(!qtProduto) {
      alert('Informe a quantidade do produto!')
      return false
    }

    myDB.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tb_compras (nm_produto, qt_produto) VALUES (?,?)`,
        [nmProduto, qtProduto],
        (sqlTxn, response) => {
          msgConsole(`"${qtProduto}(s) ${nmProduto}(s)" adicionado(s) com sucesso!`)
          getCompras()
          setNmProduto('')
          setQtProduto(0)
        },
        error => {
          msgConsole(`Erro ao adicionar produto. Erro: ${error.message}`)
        }
      )
    })
  }

  const getCompras = () => {
    myDB.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tb_compras ORDER BY id`,
        [],
        (sqlTxn, response) => {
          msgConsole('Produtos lidos com sucesso!')
          const len = response.rows.length

          if (len > 0) {
            const comprasLidas = []
            for (let i = 0; i < len; i++) {
              const compra = response.rows.item(i)
              comprasLidas.push({ 
                id: compra.id, 
                nome: compra.nm_produto,
                quantidade: compra.qt_produto
              })
            }
            setProdutosComp(comprasLidas)
          }
        },
        error => {
          msgConsole(`Erro ao obter produto para o component: ${error.message}`)
        }
      )
    })
  }

  const renderCompra = ({ item }) => {
    return(
      <View style={style.tarefa}>
        <Text style={style.txtTarefa}>
          { item.id } - { item.nome } ({ item.quantidade })
        </Text>
        <Pressable style={style.botaoApagar}
          onPress={ () => { deleteCompra(item.id) }}
        >
          <Text style={style.txtApagar}> x </Text>
        </Pressable>
      </View>
    )
  }

  useEffect(async () => {
    await criarTabelas()
    await getCompras()
  }, [])

  return(
    <View style={style.container}>
      <Text style={style.titulo}>Lista de Compras</Text>
      <View style={style.botaoAdd}>
        <TextInput
          value={ qtProduto }
          onChangeText={ setQtProduto }
          style={style.inputQtd}
          placeholder=' Qtd. '
        />
        <TextInput
          value={ nmProduto }
          onChangeText={ setNmProduto }
          style={style.inputProd}
          placeholder=' Produto '
        />
        <Pressable 
          onPress={ addCompra }
          style={
            ({ pressed }) => [
              pressed ? style.botaoClicar : style.botao
            ]}
          >
          <Text style={style.txtBotao}>+</Text>
        </Pressable>
      </View>


      <FlatList 
        scrollEnabled
        style={style.tarefas}
        data={ produtosComp }
        renderItem={ renderCompra }
        key={ produtoLido => produtoLido.id }
      />

    </View>
  )
}