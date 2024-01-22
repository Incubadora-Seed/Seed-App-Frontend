import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons';
import Styles from '../styles/CardEvento';

export default function CardEvento({ nome, desc, data, imagem, style }) {

    return (
        <View activeOpacity={0.7} style={[Styles.viewContainer, style]}>
            <Image source={imagem} style={Styles.img} />
            <View style={Styles.viewInfos}>
                <Text style={Styles.txtNome}>{nome}</Text>
                <Text style={Styles.txtDesc}>{desc}</Text>
                <View style={Styles.viewBaixo}>
                    <TouchableOpacity style={Styles.btnMarcar} activeOpacity={0.7}>
                        <Ionicons name="checkbox-outline" size={24} color="black" />
                        <Text style={Styles.txtMarcar}>Marcar na agenda</Text>
                    </TouchableOpacity>
                    <Text style={Styles.txtData}>{data}</Text>
                </View>
            </View>
        </View>
    )
}