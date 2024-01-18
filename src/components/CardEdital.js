import { View, Text } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import Styles from "../styles/CardEdital";

export default function CardEdital({ titulo, data, path, style }) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[Styles.btnEdital, style]}>
            <Link href={path}>
                <View style={Styles.viewNome}>
                    <Text style={Styles.txtTitulo}>{titulo}</Text>
                </View>
                <Text style={Styles.txtData}>{data}</Text>
            </Link>
        </TouchableOpacity>

    )
}