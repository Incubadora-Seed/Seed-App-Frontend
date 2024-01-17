import { useNavigation } from 'expo-router/src/useNavigation';
import { useEffect } from 'react';
import Header from '../../../components/Header';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../../components/Input';
import Styles from '../../../styles/Conversa';

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
            <ScrollView style={Styles.viewMensagens}>
                <View style={Styles.viewMsg}>
                    <Text style={Styles.txtConteudo}>
                        teste 1
                    </Text>
                    <Text style={Styles.txtTempo}>
                        19:40
                    </Text>
                </View>
            </ScrollView>

            <View style={Styles.viewDigitar}>
                <TouchableOpacity>
                    <Ionicons name="add-circle-outline" size={30} color='#000' />
                </TouchableOpacity>
                <Input placeholder="Mensagem" style={{ width: '70%' }} styleIcon={{ display: 'none' }} />
                <TouchableOpacity>
                    <Ionicons name="send-outline" size={30} color='#000' />
                </TouchableOpacity>
            </View>
        </View>
    )
}