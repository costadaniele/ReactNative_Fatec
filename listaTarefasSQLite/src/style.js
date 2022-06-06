import { Dimensions, StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
    backgroundColor: '#FFFCF9',
    padding: 15
  },
  titulo: {
    paddingTop: 15,
    fontSize: 28,
    textAlign: 'center',
    color: '#340068',
    fontWeight: 'bold'
  },
  botaoAdd: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15, 
    marginBottom: 15,
    borderRadius: 50,
    color: '#ccc'
  },
  input: {
    fontSize: 16,
    borderColor: '#ccc',
    width: (Dimensions.get('window').width - 60) - 30,
    borderRadius: 5,
    borderWidth: 1,
    color: '#ccc',
  },
  botao: {
    backgroundColor: '#e9c46a',
    height: 55, 
    width: 55,
    marginLeft: 5,
    borderRadius: 50
  },
  botaoClicar: {
    backgroundColor: '#D58936',
    height: 55, 
    width: 55,
    marginLeft: 5,
    borderRadius: 50
  },
  txtBotao: {
    marginTop: 14,
    marginLeft: 21,
    fontSize: 20,
    color: '#fff'
  },
  tarefas: {
    height: Dimensions.get('window').height - 180,
    backgroundColor: '#FFFCF9',
  },
  tarefa: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1A1B41',
    padding: 12,
    borderRadius: 5,
  },
  txtTarefa: {
    width: (Dimensions.get('window').width - 160),
    marginTop: 5,
    fontSize: 16, 
    color: '#ccc',
  },
  botaoApagar: {
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    backgroundColor: '#92140C', 
    color: '#fff',
    marginLeft: 70,
    borderRadius: 50,
  },
  txtApagar: { 
    color: '#fff', 
    fontSize: 18,
    alignSelf: 'center',
  }
})

export default style