import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from "expo-router";
import TagCategoria from './TagCategoria.js';
import styles from '../styles/CardRequisicao.js'

export default function CardRequisicao({ titulo, descricao, prazo, categoria, style, idRequisicao }) {

    return (
        <Link href={`/requisicoes/${idRequisicao}`} asChild style={style}>
            <TouchableOpacity style={styles.elevation} activeOpacity={0.5}>
                <View style={styles.viewMain}>
                    <View style={styles.viewEsquerda}>
                        <Text style={styles.txtTitulo} numberOfLines={1}>{titulo}</Text>
                        <Text style={styles.txtDescricao} numberOfLines={2}>{descricao}</Text>
                        <View style={styles.viewPrazo}>
                            <Text style={styles.txtPrazo}>Prazo: {prazo}</Text>
                            <View style={styles.viewLinha}></View>
                        </View>
                    </View>
                    <View style={styles.viewDireita}>
                        <TagCategoria categoria={categoria} />
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}