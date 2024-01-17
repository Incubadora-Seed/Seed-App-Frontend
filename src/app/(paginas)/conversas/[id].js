import { useNavigation } from 'expo-router/src/useNavigation';
import { useEffect } from 'react';
import Header from '../../../components/Header';
import { View, Text } from 'react-native';

export default function Chat() {
    const navigation = useNavigation()
    // Variáveis de teste:
    var nomeUsuario = 'Vanessa'

    useEffect(() => {
        navigation.setOptions({
            header: () => (<Header variant={1} navigation={navigation} style={{ backgroundColor: '#D9D9D9' }} title={nomeUsuario} />)
        })
    })

    return (
        <View>
            <Text>Chat</Text>
        </View>
    )
}