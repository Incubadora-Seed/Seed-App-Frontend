import { useNavigation } from 'expo-router/src/useNavigation';
import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../../components/Input';
import MediaTray from '../../../components/MediaTray';
import styles from '../../../styles/Conversa';

export default function Chat() {
    const navigation = useNavigation()
    const [mediaTrayAberta, setMediaTrayAberta] = useState(false)
    const [arquivoSelecionado, setArquivoSelecionado] = useState(false)
    const [fileIcon, setFileIcon] = useState()
    const [fileName, setFileName] = useState()

    // Variáveis de teste:
    var nomeUsuario = 'Vanessa'
    var falandoComEmpresa = true
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

    function handleBotaoMediaTray() {
        setMediaTrayAberta(!mediaTrayAberta)
    }

    function setIconeETextoArquivo() {
        let icon
        let txt
        if (arquivoSelecionado.length > 1) {
            icon = 'document-text-outline'
            txt = `${arquivoSelecionado.length} arquivos.`
        } else {
            let type = arquivoSelecionado[0].mimeType
            txt = arquivoSelecionado[0].name
            if (type.includes('image')) icon = 'image-outline'
            if (type.includes('video')) icon = 'videocam-outline'
            if (type.includes('pdf')) icon = 'document-text-outline'
            if (type.includes('audio')) icon = 'headset-outline'
        }
        setFileIcon(icon)
        setFileName(txt)
    }

    useEffect(() => {
        if (!arquivoSelecionado) return
        setIconeETextoArquivo()
    }, [arquivoSelecionado])

    useEffect(() => {
        if (falandoComEmpresa) {
            navigation.setOptions({
                header: () => (<Header variant={1} navigation={navigation} style={{ backgroundColor: '#D9D9D9' }} title={nomeUsuario} titlePath={'#'} />)
            })
        } else {
            navigation.setOptions({
                header: () => (<Header variant={1} navigation={navigation} style={{ backgroundColor: '#D9D9D9' }} title={nomeUsuario} />)
            })
        }
        // setArquivoSelecionado([{ name: 'teste', mimeType: 'image' }])
    }, [])

    return (
        <View style={styles.viewMain}>
            <ScrollView style={styles.scrollViewMensagens} contentContainerStyle={styles.viewMensagens}>
                {fetchData && (
                    fetchData.map((item, index) => {
                        let styleView, styleTxt
                        if (item.enviado) {
                            styleView = styles.viewMsgEnviada
                            styleTxt = styles.txtConteudoEnviado
                        } else {
                            styleView = styles.viewMsgRecebida
                            styleTxt = styles.txtConteudoRecebido
                        }
                        return (
                            <View style={[styles.viewMsg, styleView]} key={index}>
                                <Text style={[styles.txtConteudo, styleTxt]}>
                                    {item.conteudo}
                                </Text>
                                <Text style={styles.txtTempo}>
                                    {item.tempo}
                                </Text>
                            </View>
                        )
                    })
                )}
            </ScrollView>

            <MediaTray mediaTrayAberta={mediaTrayAberta} />

            <View style={styles.viewDigitar}>
                {!arquivoSelecionado ? (
                    <>
                        <TouchableOpacity onPress={handleBotaoMediaTray}>
                            <Ionicons name="add-circle-outline" size={30} color='#000' />
                        </TouchableOpacity>
                        <Input placeholder="Mensagem" style={{ width: '70%' }} styleIcon={{ display: 'none' }} />
                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={() => { }}>
                            <Ionicons name={fileIcon} size={30} color='#000' />
                        </TouchableOpacity>
                        <Ionicons />
                    </>
                )}
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="send-outline" size={30} color='#000' />
                </TouchableOpacity>
            </View>
        </View>
    )
}