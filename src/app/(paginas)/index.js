import { View, ScrollView } from 'react-native';
import { useFonts, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useCallback } from 'react';
import CardOpcoes from '../../components/CardOpcoes';
import styles from '../../styles/Inicial';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// Tela: ...

export default function Inicial() {
    let [fontsLoaded, fontError] = useFonts({
        Poppins_200ExtraLight,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded, fontError])

    if (!fontsLoaded && !fontError) {
        return null
    }

    const imagens = [require('../../../assets/imgs/telaInicial/incubar.jpg'),
    require('../../../assets/imgs/telaInicial/requisicao.jpg'),
    require('../../../assets/imgs/telaInicial/estagio.jpg'),
    require('../../../assets/imgs/telaInicial/evento.jpg'),
    require('../../../assets/imgs/telaInicial/reuniao.jpg')]

    // Variáveis temporárias de teste:
    var empresa = true

    return (
        <View onLayout={onLayoutRootView}>
            <View style={styles.viewContainer}>
                <View style={styles.viewRow}>
                    {empresa && (<CardOpcoes titulo='Incube sua empresa' path='/incubar' imagem={imagens[0]} />)}
                    <CardOpcoes titulo='Traga seu problema' path='/requisicoes' imagem={imagens[1]} />
                </View>
                <View style={styles.viewRow}>
                    <CardOpcoes titulo='Vagas de estágio' path='/vagas' imagem={imagens[2]} />
                    <CardOpcoes titulo='Editais e eventos' path='/editaisEeventos' imagem={imagens[3]} />
                </View>
                <View style={styles.viewRow}>
                    <CardOpcoes titulo='Agendar reuniões' path='/agenda' imagem={imagens[4]} />
                    <CardOpcoes titulo='Fale conosco' path='/conversas' imagem={imagens[0]} />
                </View>
            </View>
        </View>
    )
}