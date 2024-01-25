import { useNavigation } from 'expo-router/src/useNavigation';
import { useLocalSearchParams } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import MediaTray from '../../../components/MediaTray';
import CardMensagem from '../../../components/CardMensagem';
import styles from '../../../styles/Conversa';

export default function Chat() {
    const navigation = useNavigation()
    const { id } = useLocalSearchParams()
    const [mediaTrayAberta, setMediaTrayAberta] = useState(false)
    const [arquivoSelecionado, setArquivoSelecionado] = useState(false)
    const [fileIcon, setFileIcon] = useState()
    const [fileName, setFileName] = useState()
    const [conteudo, setConteudo] = useState()
    const [mensagens, setMensagens] = useState()
    const { control, handleSubmit, reset, formState } = useForm()

    // Variáveis de teste:
    var nomeUsuario = 'Marcia'
    var nomeDestinatario = 'Vanessa'
    var falandoComEmpresa = true
    // Fim variáveis de teste

    const documentDirectory = FileSystem.documentDirectory

    async function verificarCacheExiste() {
        let leitorPasta = await FileSystem.getInfoAsync(documentDirectory + 'armazenamento')
        let leitorArquivo = await FileSystem.getInfoAsync(documentDirectory + 'armazenamento/mensagens.json')

        if (!leitorPasta.exists) {
            await FileSystem.makeDirectoryAsync(documentDirectory + 'armazenamento')
        }
        if (!leitorArquivo.exists) {
            await FileSystem.writeAsStringAsync(documentDirectory + 'armazenamento/mensagens.json', JSON.stringify([]))
        }
    }

    async function lerMensagensTemp() {
        await verificarCacheExiste()

        FileSystem.readAsStringAsync(documentDirectory + 'armazenamento/mensagens.json')
            .then((valor) => {
                let arr = JSON.parse(valor)
                let obj = arr.find(v => v.id == id)
                if (obj == undefined) {
                    let conteudoNovo = { id, mensagens: [] }
                    arr.push(conteudoNovo)
                    FileSystem.writeAsStringAsync(documentDirectory + 'armazenamento/mensagens.json', JSON.stringify(arr))
                    obj = arr.find(v => v.id == id)
                }
                setConteudo(arr)
                setMensagens(obj.mensagens)
            })
            .catch((err) => {
                if (err) {
                    console.log('Erro em ler mensagens:\n', err)
                }
            })
    }

    async function enviarMensagemTemp({ mensagem }) {
        let obj = conteudo.find(v => v.id == id)
        let dataAtual = new Date()
        let conteudoNovo = { mensagem, origem: nomeUsuario, tempo: dataAtual }
        obj.mensagens.push(conteudoNovo)
        await FileSystem.writeAsStringAsync(documentDirectory + 'armazenamento/mensagens.json', JSON.stringify(conteudo))
        lerMensagensTemp()
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
                    mensagens.map((item, index) => (
                        <CardMensagem objMsg={item} nomeUsuario={nomeUsuario} key={index} />
                    ))
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