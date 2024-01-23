import { useNavigation } from 'expo-router/src/useNavigation';
import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../../components/Input';
import MediaTray from '../../../components/MediaTray';
import * as FileSystem from 'expo-file-system';
import { useForm, Controller } from 'react-hook-form'
import styles from '../../../styles/Conversa';

export default function Chat() {
    const navigation = useNavigation()
    const [mediaTrayAberta, setMediaTrayAberta] = useState(false)
    const [arquivoSelecionado, setArquivoSelecionado] = useState(false)
    const [fileIcon, setFileIcon] = useState()
    const [fileName, setFileName] = useState()
    const [ateste, setAteste] = useState()
    const [mensagens, setMensagens] = useState()
    const { control, handleSubmit, reset, formState } = useForm()

    // Variáveis de teste:
    var nomeUsuario = 'Marcia'
    var nomeDestinatario = 'Vanessa'
    var falandoComEmpresa = true

    const documentDirectory = FileSystem.documentDirectory

    async function lerMensagensTemp() {
        let leitor = await FileSystem.readAsStringAsync(documentDirectory + 'armazenamento/mensagens.json')
        setMensagens(JSON.parse(leitor))
    }

    async function enviarMensagemTemp({ mensagem }) {
        let leitor = await FileSystem.readAsStringAsync(documentDirectory + 'armazenamento/mensagens.json')
        let conteudo = JSON.parse(leitor)
        let dataAtual = new Date()
        let conteudoNovo = { mensagem, origem: nomeUsuario, tempo: dataAtual }
        conteudo.push(conteudoNovo)
        await FileSystem.writeAsStringAsync(documentDirectory + 'armazenamento/mensagens.json', JSON.stringify(conteudo))
        lerMensagensTemp()
    }

    // Fim variáveis de teste

    function calcularData(dataCriacao) {
        var d1 = new Date(dataCriacao)
        var d2 = new Date()

        var diffInMs = d2 - d1
        var diffInHours = diffInMs / 3600000
        if (diffInHours < 24) {
            let hora = d1.getHours().toString()
            let minuto = d1.getMinutes().toString()
            if (hora.length == 1) hora = `0${hora}`
            if (minuto.length == 1) minuto = `0${minuto}`
            return `${hora}:${minuto}`
        }
        else {
            var diffInDays = diffInMs / 86400000
            return (Math.trunc(diffInDays) + ' dias')
        }
    }

    function handleBotaoMediaTray() {
        setMediaTrayAberta(!mediaTrayAberta)
    }

    function setIconeETextoArquivo() {
        let icon
        let txt
        if (arquivoSelecionado.length > 1) {
            icon = 'document-outline'
            txt = `${arquivoSelecionado.length} arquivos`
        } else {
            let type = arquivoSelecionado[0].mimeType || arquivoSelecionado[0].type
            if (type.includes('image')) icon = 'image-outline', txt = 'Imagem'
            else if (type.includes('video')) icon = 'videocam-outline', txt = 'Vídeo'
            else if (type.includes('pdf')) icon = 'document-text-outline', txt = 'PDF'
            else if (type.includes('audio')) icon = 'headset-outline', txt = 'Áudio'
            else icon = 'document-outline', txt = 'Documento'

            if (arquivoSelecionado[0].name) txt = arquivoSelecionado[0].name
        }
        setFileIcon(icon)
        setFileName(txt)
    }

    function handleLimparArquivos() {
        setArquivoSelecionado(false)
        setFileIcon('')
        setFileName('')
    }

    useEffect(() => {
        if (!arquivoSelecionado) return
        setIconeETextoArquivo()
        setMediaTrayAberta(false)
    }, [arquivoSelecionado])

    useEffect(() => {
        if (falandoComEmpresa) {
            navigation.setOptions({
                header: () => (<Header variant={1} navigation={navigation} style={{ backgroundColor: '#D9D9D9' }} title={nomeDestinatario} titlePath={'#'} />)
            })
        } else {
            navigation.setOptions({
                header: () => (<Header variant={1} navigation={navigation} style={{ backgroundColor: '#D9D9D9' }} title={nomeDestinatario} />)
            })
        }
        lerMensagensTemp()
    }, [])

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset()
        }
    }, [formState, reset])

    return (
        <View style={styles.viewMain}>
            <ScrollView style={styles.scrollViewMensagens} contentContainerStyle={styles.viewMensagens}>
                {mensagens && (
                    mensagens.map((item, index) => {
                        let styleView, styleTxt
                        if (item.origem == nomeUsuario) {
                            styleView = styles.viewMsgEnviada
                            styleTxt = styles.txtConteudoEnviado
                        } else {
                            styleView = styles.viewMsgRecebida
                            styleTxt = styles.txtConteudoRecebido
                        }
                        let tempo = calcularData(item.tempo)
                        return (
                            <View style={[styles.viewMsg, styleView]} key={index}>
                                <Text style={[styles.txtConteudo, styleTxt]}>
                                    {item.mensagem}
                                </Text>
                                <Text style={styles.txtTempo}>
                                    {tempo}
                                </Text>
                            </View>
                        )
                    })
                )}
            </ScrollView>

            <MediaTray mediaTrayAberta={mediaTrayAberta} setArquivoSelecionado={setArquivoSelecionado} />

            <View style={styles.viewDigitar}>
                {!arquivoSelecionado ? (
                    <>
                        <TouchableOpacity onPress={handleBotaoMediaTray}>
                            <Ionicons name="add-circle-outline" size={30} color='#000' />
                        </TouchableOpacity>
                        <Controller control={control} rules={{ required: true }} defaultValue={''}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input placeholder="Mensagem" style={{ width: '70%' }} styleIcon={{ display: 'none' }}
                                    onBlur={onBlur} onChangeText={onChange} value={value} />
                            )}
                            name="mensagem"
                        />

                    </>
                ) : (
                    <>
                        <TouchableOpacity onPress={handleLimparArquivos}>
                            <Ionicons name='close-circle-outline' size={30} color='#000' />
                        </TouchableOpacity>
                        <View style={styles.viewEnviarArquivo}>
                            <Ionicons name={fileIcon} size={30} color='#000' />
                            <Text style={styles.txtNomeArquivo} numberOfLines={1}>{fileName}</Text>
                        </View>
                    </>
                )}
                <TouchableOpacity onPress={handleSubmit(enviarMensagemTemp)}>
                    <Ionicons name="send-outline" size={30} color='#000' />
                </TouchableOpacity>
            </View>
        </View>
    )
}