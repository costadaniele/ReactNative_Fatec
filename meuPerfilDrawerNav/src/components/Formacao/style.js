import { StyleSheet, Dimensions } from "react-native"

const style = StyleSheet.create({
  fundoTela: {
    height: Dimensions.get('window').height,
    backgroundColor: '#5e548e',
    padding: 20
  },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#555', textAlign: 'center', textDecorationLine: 'underline' },
  txt: { color: '#555', padding: 10, fontWeight: 'bold', fontSize: 16 },
  container: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 5,
    marginTop: 15
  },
  
})

export default style