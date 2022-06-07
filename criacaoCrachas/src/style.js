import { StyleSheet } from "react-native"

const numeroIdentico = 200
const largura = numeroIdentico
const altura = numeroIdentico

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    padding: 25
  },
  tituloPrincipal: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#3E7CB1'
  },
  telaCam:{
    top: 40,
    alignSelf: 'center',
    height: altura, 
    width: largura,
  },
  botoesAcesso: {
    paddingTop: 90,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 12,
    alignSelf: 'center',
  },
  botaoCam: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    marginRight: 7,
    borderRadius: 50,
    backgroundColor: '#054A91',
    height: 50,
    width: 170
  },
  botaoGaleria: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30, 
    paddingRight: 30,
    borderRadius: 50,
    backgroundColor: '#3E7CB1',
    height: 50,
    width: 170,    
  },
  botaoCamera: { 
    color: '#fff', 
    fontSize: 16,
    textAlign: 'center'
  },
  capture:{
    flex: 0,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  inputNome: {
    borderWidth: 1,
    borderColor: '#555',
    fontSize: 16,
    borderRadius: 50,
    marginTop: 25,
  },
  inputArea: {
    marginTop: 15,
    borderWidth: 1,
    fontSize: 16,
    backgroundColor: '#586994',
    color: '#fff',
  },
  botaoSalvar: {
    padding: 12,
    backgroundColor: '#054A91',
    borderRadius: 50,
    width: 150, 
    alignSelf: 'center',
    margin: 30
  },
  txtBotaoSalvar: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  },
  usuario: {
    marginTop: 15,
    backgroundColor: '#586994',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 5
  },
  imagem: {
    backgroundColor: '#fff',
    height: 100, 
    width: 100,
    borderRadius: 50
  },
  containerCad: {
    margin: 20,
    maxWidth: 250
  },
  nome: {
    color: '#ccc',
    fontSize: 20,
  },
  titulo: {
    color: '#DACC3E',
    fontSize: 16
  }
})

export default styles