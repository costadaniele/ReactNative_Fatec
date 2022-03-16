import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    area: {
        marginTop: 20
    },
    textoPrincipal: {
        fontSize: 28,
        color: '#000',
    },
    alinhaTexto: {
        textAlign: 'center'
    },
    container: {
        flex: 1,
        marginTop: 80,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
    },
    texto: {
        textAlign: 'center',
        fontSize: 25,
    },
    botao: {
        width: 200,
        height: 50,
        margin: 10,
        left: 50,
        backgroundColor: 'green',
       
    },
    textoBotao: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 45,
        fontSize: 16,
        color: '#fff'
    }

});

export { styles }