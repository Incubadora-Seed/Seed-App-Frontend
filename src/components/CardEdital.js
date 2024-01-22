import { View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import Styles from "../styles/CardEdital";

export default function CardEdital({ titulo, desc, data, path, style, onPress }) {
    return (
        <Link asChild style={[Styles.btnEdital, style]} href={path}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} >
                <View style={Styles.viewTitulo}>
                    <Ionicons name="document-text-outline" size={30} color="black" />
                    <Text style={Styles.txtTitulo}>{titulo}</Text>
                </View>
                <Text style={Styles.txtDesc}>{desc}</Text>
                <Text style={Styles.txtData}>{data}</Text>
            </TouchableOpacity>
        </Link>

    )
}