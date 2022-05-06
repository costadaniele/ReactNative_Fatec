import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text  style={styles.txt}>Contato</Text>
            
            <Button
                title="Home"
                onPress={() => navigation.dispatch(StackActions.popToTop())}
            />
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:  '#ffbc42',
    },
    txt: {
        color: '#000', 
        fontSize: 16,
        margin: 3,
        marginLeft: 30
        
    }
})