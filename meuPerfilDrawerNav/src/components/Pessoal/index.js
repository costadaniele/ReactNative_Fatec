import React from 'react'
import { View, Text, Image, ScrollView, Pressable, Linking } from 'react-native'
import style from '../Pessoal/style'

export default Pessoal = () => {
    const profile = {
        name: "Daniele Costa",
        bio: "Entusiasta por programação e pelas possibilidades de criação pelos computadores. Artista que gosta de usar código. Estudante de código.",
        link: "https://github.com/costadaniele"
    }
    return (
        <ScrollView style={style.telaFundo}>
            <View style={style.container}>
                <View style={style.txtApresentacao}>
                    <Text style={style.nome}>{profile.name}</Text>
                    <Image
                        style={style.photo}
                        source={require('./image/danielecosta.jpg')}
                    />
                    <Text style={style.bio}>{profile.bio}</Text>
                </View>
                <Pressable
                    onPress={() => { Linking.openURL(profile.link) }}
                >
                    <Text style={style.txtLink}>
                        Github
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}