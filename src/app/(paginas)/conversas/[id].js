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

    var fetchData = [
        {
            conteudo: 'teste 1',
            tempo: 'Ontem',
            enviado: true
        },
        {
            conteudo: 'teste 2',
            tempo: '19:40',
            enviado: false
        },
        {
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat ipsum non elit consectetur tristique. Nulla facilisi. Vestibulum ac elementum orci, quis vulputate lorem. Aliquam erat volutpat. Nulla ex odio, sagittis ut nibh a, rhoncus luctus massa. Donec sit amet sollicitudin ipsum, quis dignissim era',
            tempo: '19:40',
            enviado: true
        },
        {
            conteudo: 'teste 1',
            tempo: '19:40',
            enviado: true
        },
        {
            conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat ipsum non elit consectetur tristique. Nulla facilisi. Vestibulum ac elementum orci, quis vulputate lorem. Aliquam erat volutpat. Nulla ex odio, sagittis ut nibh a, rhoncus luctus massa. Donec sit amet sollicitudin ipsum, quis dignissim era',
            tempo: '19:40',
            enviado: false
        },

    ]

    const styleMensagem = (enviado) => {
        if (enviado) {
            return Styles.viewMsgEnviada
        }
        else {
            return Styles.viewMsgRecebida
        }
    }

    return (
        <View>
            <ScrollView style={Styles.viewMensagens}>
                {fetchData && (
                    fetchData.map((item, index) => (
                        <View style={[Styles.viewMsg, styleMensagem(item.enviado)]} key={index}>
                            <Text style={Styles.txtConteudo}>
                                {item.conteudo}
                            </Text>
                            <Text style={Styles.txtTempo}>
                                {item.tempo}
                            </Text>
                        </View>
                    ))
                )}
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