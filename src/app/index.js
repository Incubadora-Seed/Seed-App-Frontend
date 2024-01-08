import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// Tela: ...

export default function Home() {
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

    return (
        <View onLayout={onLayoutRootView}>
            <Link href={'/autenticacao/login'}><Text style={styles.txt}>Login</Text></Link>
            <Link href={'autenticacao/cadastro'}><Text style={styles.txt}>Cadastro</Text></Link>
            <Link href={'/requisicoes'}><Text style={styles.txt}>Requisições</Text></Link>
            <Link href={'/vagas'}><Text style={styles.txt}>Vagas</Text></Link>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: 'Poppins_400Regular',
    }
})