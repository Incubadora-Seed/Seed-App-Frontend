import { View, Text } from "@bacons/react-views";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import Styles from '../../../styles/Perfil';

export default function Perfil() {
    return (
        <ScrollView>
            <View>
                <Ionicons name="person-circle-outline" size={100} color="black" />
                <Text style={Styles.nome}>Nome de usuário</Text>
            </View>
        </ScrollView>
    )
}