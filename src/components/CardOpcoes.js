import { Link } from "expo-router"
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/CardOpcoes.js'

export default function CardOpcoes({ imagem, titulo, descricao, path, style }) {
    if (!path) path = '#'

    return (
        <Link href={path} asChild style={style}>
            <TouchableOpacity activeOpacity={0.5}style={styles.elevation}>
                <View style={styles.viewMain}>
                    <View style={styles.viewImagem}>
                        <Image source={require('../../assets/imgs/opcao1.png')} style={styles.imagem} />
                    </View>
                    <View style={styles.textos}>
                        <Text style={styles.titulo}>{titulo}</Text>
                        <Text style={styles.descricao}>{descricao}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}