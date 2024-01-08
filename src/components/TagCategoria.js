import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/TagCategoria.js';

export default function TagCategoria({ categoria, comTexto, style }) {
    var icon, backgroundColor

    switch (categoria) {
        case 'Suporte Técnico':
            icon = 'desktop-sharp'
            backgroundColor = '#4D4DFF'
            break;
    }

    return (
        <View style={[comTexto ? (styles.viewMain2) : (styles.viewMain1), { backgroundColor }, style]}>
            <Ionicons name={icon} size={20} color='white' />
            {comTexto && <Text style={styles.txtCategoria}>{categoria}</Text>}
        </View>
    )
}