import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, StatusBar, TouchableOpacity, Modal,
  Image, PermissionsAndroid, Platform, TextInput } from 'react-native'
import { RNCamera } from 'react-native-camera'
import CameraRoll from '@react-native-community/cameraroll'
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/core'
import styles from '../../style'

import { criarTabelas, addUsuario } from '../../Database'

export default Form = () => {
  const [open, setOpen] = useState(false)
  const [cameraComp, setCamera] = useState(null)
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [nome, setNome] = useState('')
  const [area, setArea] = useState('Informática')
  const [fotoUsuario, setFotoUsuario] = useState('')

  const iniciarBancoApp = async () => {
    await criarTabelas()
  }

  useEffect(() => {
    iniciarBancoApp()
  }, [])

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options)

    setCapturedPhoto(data.uri)
    setOpen(true)
    console.log('Registro:' + data.uri)

    savePicture(data.uri)
  }

  const hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    const hasPermission = await PermissionsAndroid.check(permission)
    if (hasPermission)
      return true

    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  const savePicture = async (data) => {
    if (Platform.OS === 'android' && !(await hasAndroidPermission()))
      return null

    CameraRoll.save(data, 'photo')
    .then(response => {
      pegarLocalFotoTirada(response)
      console.log('SALVO COM SUCESSO: ' + response)
    })
    .catch(error => {
      console.log('ERRO AO SALVAR: ' + error)
    })
  }

  const navigation = useNavigation()
  const openGaleria = () => {
    navigation.navigate('Galeria')
  }
  
  const tirarFotoEGaleria = () => {
    if (RNCamera.Constants.CameraStatus === 'READY')
      return null 
    return(
      <View style={styles.botoesAcesso}>
        <TouchableOpacity 
          style={styles.botaoCam} 
          onPress={ () => takePicture(cameraComp) } >
          <Text style={styles.botaoCamera}>
            Câmera
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.botaoGaleria}
          onPress={ openGaleria }
        >
          <Text style={styles.botaoCamera}>
            Galeria
          </Text>
        </TouchableOpacity>
      </View>
    ) 
  }

  const mostrarFotoTirada = () => {
    if (capturedPhoto !== null && capturedPhoto !== undefined) {
      return(
        <Modal
          animationType='slide' transparent={false}
          visible={open}>
          <View style={{
            flex:1, 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: 20
          }}>
            
            <Image
              resizeMode="contain"
              style={{width: 300, height: 300, borderRadius: 15}}
              source={{ uri: capturedPhoto }}
            />
            <TouchableOpacity
              style={{margin: 10}}
              onPress={ () => setOpen(false) }
            >
              <Text style={{fontSize: 16, backgroundColor:'#054A91', padding: 10, color: '#fff', borderRadius: 30, marginTop: 50, width: 100, textAlign: 'center'}}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )
    }
  }

  const pegarLocalFotoTirada = (fileURL) => {
    if (fileURL !== null && fileURL !== undefined)
      setFotoUsuario(fileURL)
  }

  const salvarUsuario = () => {
    const limparInput = () => setNome('')
    if (
      nome !== null && nome !== undefined && nome !== '' &&
      area !== null && area !== undefined && area !== '' &&
      fotoUsuario !== null && fotoUsuario !== undefined 
      && fotoUsuario !== ''
    ) {
      console.log({ nome: nome, area: area, foto_perfil: fotoUsuario })
      addUsuario(nome, area, fotoUsuario)
      alert('Usuário cadastrado com sucesso!')
      limparInput()
    }
    else {
      alert('Algum campo está vazio')
    }
  }

  return(
    <View style={styles.container}>
      <StatusBar hidden={ false }/>
      <Text style={styles.tituloPrincipal}>Criação de Crachás</Text>
      <RNCamera
        ratio={ '1:1' }
        style={styles.telaCam}
        type={ RNCamera.Constants.Type.front }
        ref={ rncamera => setCamera(rncamera) }
        autoFocus={ RNCamera.Constants.AutoFocus.on }
        flashMode={ RNCamera.Constants.FlashMode.auto }
        androidCameraPermissionOptions={{
          title: 'Permissao para câmera',
          message: 'Câmera precisa de permissão',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancelar'
        }}
      />

      { tirarFotoEGaleria() }

      { mostrarFotoTirada() }

      <TextInput 
        value={ nome }
        onChangeText={ (txt) => setNome(txt) }
        style={styles.inputNome}
        />

      <Picker
        style={styles.inputArea}
        selectedValue={ area }
        onValueChange={ (valorItem, index) => setArea(valorItem) }
      >
        <Picker.Item key={1} value='Informática' label='Informática' />
        <Picker.Item key={2} value='Artes' label='Artes' />
        <Picker.Item key={3} value='Cinema' label='Cinema' />
      </Picker>

      <TouchableOpacity
        style={styles.botaoSalvar}
        onPress={ () => salvarUsuario() }
      >
      <Text style={styles.txtBotaoSalvar}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}