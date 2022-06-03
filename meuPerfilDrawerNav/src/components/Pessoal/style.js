import { StyleSheet } from "react-native"

const style = StyleSheet.create({
  telaFundo: {
    backgroundColor: '#5e548e',
    padding: 20
  },
  container: {
    backgroundColor: '#231942',
    borderRadius: 5,
    textAlign: 'center',
    alignItems: 'center'
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 500,
    margin: 40
  },

  txtApresentacao: 
  { margin: 20 },
  nome: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#ccc', margin: 10 },
  bio: { margin: 10, fontSize: 16, color: '#ccc', textAlign: 'center' },
  txtLink: { margin: 15, color: '#d9ed92', fontSize: 16, textDecorationLine: 'underline', fontWeight: 'bold' }
})

export default style