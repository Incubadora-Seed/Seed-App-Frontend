import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

// Tela: ...

export default function Home() {
    let [fontsLoaded, fontError] = useFonts({
        Poppins_400Regular,
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
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontFamily: 'Poppins_400Regular',
    }
})