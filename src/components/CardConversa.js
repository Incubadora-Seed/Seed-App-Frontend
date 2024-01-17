import { View, Text, Image, ImageBackground } from 'react-native';
import styles from '../styles/CardConversa';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

export default function CardConversa({ foto, usuario, msg, tempo, idConversa, bg }) {
    return (

        <Link href={`/conversas/${idConversa}`} asChild style={{ backgroundColor: bg }}>
            <TouchableOpacity>
                <View style={styles.viewContainer}>
                    <Image style={styles.img} />
                    <View style={styles.viewDireita}>
                        <View style={styles.viewCima}>
                            <Text style={styles.txtUser} numberOfLines={1}>{usuario}</Text>
                            <Text style={styles.txtTempo}>{tempo}</Text>
                        </View>
                        <View>
                            <Text style={styles.txtMsg} numberOfLines={1}>{msg}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Link >
    )
}