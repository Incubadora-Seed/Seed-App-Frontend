import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/CardEvento';

export default function CardEvento({ nome, desc, data, imagem, style }) {

    return (
        <View activeOpacity={0.7} style={[styles.viewContainer, style]}>
            <Image source={imagem} style={styles.img} />
            <View style={styles.viewInfos}>
                <Text style={styles.txtNome}>{nome}</Text>
                <Text style={styles.txtDesc}>{desc}</Text>
                <View style={styles.viewBaixo}>
                    <TouchableOpacity style={styles.btnMarcar} activeOpacity={0.7}>
                        <Ionicons name="checkbox-outline" size={24} color="black" />
                        <Text style={styles.txtMarcar}>Marcar na agenda</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtData}>{data}</Text>
                </View>
            </View>
        </View>
    )
}