import { Link } from "expo-router"
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import styles from '../styles/CardOpcoes.js'

export default function CardOpcoes({ imagem, titulo, path, style }) {
    if (!path) path = '#'

    return (
        <Link href={path} asChild style={styles.link}>
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.viewMain}>
                    <ImageBackground source={imagem} style={styles.imgBackground}>
                        <Text style={styles.txtTitulo}>{titulo}</Text>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </Link>
    )
}