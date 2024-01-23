import { Image, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/MediaTray';
import { useEffect } from 'react';

export default function MediaTray({ mediaTrayAberta, setArquivoSelecionado }) {
    const [cameraPermissionStatus, requestCameraPermission] = ImagePicker.useCameraPermissions();
    const [libraryPermissionStatus, requestLibraryPermission] = ImagePicker.useMediaLibraryPermissions();

    useEffect(() => {
        if (libraryPermissionStatus && libraryPermissionStatus.granted == false) {
            requestLibraryPermission()
        }
        if (cameraPermissionStatus && cameraPermissionStatus.granted == false) {
            requestCameraPermission()
        }
    }, [])

    async function handleSelecionarArquivo() {
        try {
            let resposta = await DocumentPicker.getDocumentAsync({ multiple: true })
            if (resposta.canceled) return
            setArquivoSelecionado(resposta.assets)
        }
        catch (e) { console.log('Erro na escolha de arquivo:\n', e) }
    }

    async function handleSelecionarFoto() {
        try {
            let resposta = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsMultipleSelection: true,
                quality: 1
            })
            if (resposta.canceled) return
            setArquivoSelecionado(resposta.assets)
        } catch (e) { console.log('Erro na escolha de foto:\n', e) }
    }

    async function handleTirarFoto() {
        try {
            let resposta = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1
            })
            if (resposta.canceled) return
            setArquivoSelecionado(resposta.assets)
        } catch (e) { console.log('Erro em tirar foto:\n', e) }
    }

    return (
        mediaTrayAberta && (
            <View style={styles.viewMediaTray}>
                <TouchableOpacity onPress={handleTirarFoto}>
                    <Ionicons name="camera-outline" size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSelecionarFoto}>
                    <Ionicons name="image-outline" size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSelecionarArquivo}>
                    <Ionicons name="document-text-outline" size={30} color='#000' />
                </TouchableOpacity>
            </View>
        )
    )
}