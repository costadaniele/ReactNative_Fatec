import { StyleSheet } from "react-native";

const styleFormulario = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  formulario: {
    width: 400,
    backgroundColor: '#fff',
    borderRadius: 22,
    fontSize: 16,
    padding: 12,
    alignSelf: 'center',
    marginTop: 20,
    
  },
  inputTitulo: {
    marginTop: 12,
    color: '#3d405b'
  },
  inputs: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#cecece',
    borderRadius: 20
  },
  baseBtn: {
    marginTop: 25,
    padding: 10,
    alignItems: 'center',
    borderRadius: 2
  },
  btn: {
    backgroundColor: '#2a9d8f',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
  },
  btnPressed: {
    backgroundColor: '#81b29a',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 16 
  }
})

export default styleFormulario