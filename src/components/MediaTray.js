import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../styles/MediaTray';
import { useState } from 'react';

export default function MediaTray({ mediaTrayAberta, setArquivoSelecionado }) {
    const [arquivosResposta, setArquivosResposta] = useState()

    async function handleSelecionarArquivo() {
        try {
            const resposta = await DocumentPicker.getDocumentAsync()
            if (resposta.canceled) return
            setArquivosResposta(resposta.assets)
            console.log(resposta)
        }
        catch (e) { console.log('Erro na escolha de arquivo:\n', e) }
    }

    return (
        mediaTrayAberta && (
            <View style={styles.viewMediaTray}>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="camera-outline" size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="image-outline" size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSelecionarArquivo}>
                    <Ionicons name="document-text-outline" size={30} color='#000' />
                </TouchableOpacity>
            </View>
        )
    )
}