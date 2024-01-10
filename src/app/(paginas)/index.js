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

    // Variáveis temporárias de teste:
    var empresa = true

    return (
        <View onLayout={onLayoutRootView}>
            <ScrollView>
                <View style={styles.viewContainer}>
                    {empresa && (<CardOpcoes titulo='Incubar sua empresa' descricao='Incube sua empresa... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/' style={{ marginVertical: 25 }} />)}
                    <CardOpcoes titulo='Requisições' descricao='Crie ou resolva requisições... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/requisicoes' style={{ marginBottom: 25 }} />
                    <CardOpcoes titulo='Vagas de estágio' descricao='Crie ou se candidate para vagas... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/vagas' style={{ marginBottom: 25 }} />
                    {empresa && (<CardOpcoes titulo='Agendar reuniões' descricao='Agende reuniões com a incubadora... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/agenda' style={{ marginBottom: 25 }} />)}
                </View>
            </ScrollView>
        </View>
    )
}