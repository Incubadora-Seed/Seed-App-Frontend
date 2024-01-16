import { View, Text, Image, ImageBackground } from 'react-native';
import Styles from '../styles/CardConversa';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CardConversa({ foto, usuario, msg, tempo, idConversa, bg }) {
    return (
        <TouchableOpacity>
            <View style={[Styles.viewContainer, { backgroundColor: bg }]}>
                <Image style={Styles.img} />
                <View style={Styles.viewTexto}>
                    <Text style={Styles.txtUser}>{usuario}</Text>
                    <Text style={Styles.txtMsg}>{msg}</Text>
                </View>
                <View>
                    <Text style={Styles.txtTempo}>{tempo}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}