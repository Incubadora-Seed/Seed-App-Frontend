import { View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import styles from "../styles/CardEdital";

export default function CardEdital({ titulo, desc, data, path, style, onPress }) {
    return (
        <Link asChild style={[styles.btnEdital, style]} href={path}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} >
                <View style={styles.viewTitulo}>
                    <Ionicons name="document-text-outline" size={30} color="black" />
                    <Text style={styles.txtTitulo}>{titulo}</Text>
                </View>
                <Text style={styles.txtDesc}>{desc}</Text>
                <Text style={styles.txtData}>{data}</Text>
            </TouchableOpacity>
        </Link>

    )
}