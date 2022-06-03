import { StyleSheet} from "react-native"

const style = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30,
    backgroundColor: '#edf6f9'
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ccc',
    margin: 15,
    backgroundColor: '#390099',
    padding: 15, 
    borderRadius: 2
  },
  tituloInput: {
    marginTop: 20,
    color: '#ccc',
    fontSize: 16,
    backgroundColor: '#4361ee',
    borderRadius: 2,
    padding: 3,
  },
  input: {
    height: 50,
    borderRadius: 5, 
    borderWidth: 1,
    fontSize: 18,
    borderColor: "#374A67",
    color: '#555'
  },
  titulo: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#445bca'
  },
  resposta:{
    textAlign: 'center',
    fontSize: 22,
    marginTop: 30,
    backgroundColor: '#e9ecef',
    padding: 15, 
    borderRadius: 5
  },
  titulodetalhe: {
    textAlign: 'center',
    fontSize: 12,
  },
  txtResposta: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
  }
})

export default style