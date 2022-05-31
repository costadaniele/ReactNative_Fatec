import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#505168'
    },
    textoPrincipal:{
        marginTop: 10,
        padding: 10,
        fontSize: 26,
        textAlign: 'center', 
        color: '#ccc'
    },
    viewImage:{
        alignSelf: 'center',
        borderWidth: 3,
        width:200,
        height:200,
        borderRadius: 10,
        borderColor: '#ccc'
    },
    imagemDev:{
        width:200,
        height:200,
        resizeMode: 'contain',
        borderRadius: 10,
        alignSelf: 'center',
    },
    viewEntrada:{
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputPerfil:{
        borderWidth: 2,
        borderColor: '#ccc',
        flex: 9,
        height: 50,
        borderRadius: 5,
        marginRight: 4,
        paddingLeft: 10,
        color: '#ccc',
        fontSize: 16
    },
    btnPesquisa:{
        flex: 2,
        backgroundColor: '#749c75',
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    viewResultados:{
        padding: 12
    },
    dados:{
        padding: 10,
        margin: 2,
        borderRadius: 3,
        color: '#5d4a66',
        fontWeight: 'bold',
        backgroundColor: '#B3C0A4',
        borderRadius: 3,
        width: 320,
        alignSelf: 'center',
    }
})

export {styles};