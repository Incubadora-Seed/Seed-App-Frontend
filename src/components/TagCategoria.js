import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/TagCategoria.js';

export default function TagCategoria({ categoria, withText }) {
    var icon, backgroundColor

    switch (categoria) {
        case 'Suporte Técnico':
            icon = 'desktop-sharp'
            backgroundColor = '#4D4DFF'
            break;
    }

    return (
        <View style={[withText ? (styles.viewMain2) : (styles.viewMain1), { backgroundColor }]}>
            <Ionicons name={icon} size={20} color='white' />
            {withText && <Text style={styles.txtCategoria}>{categoria}</Text>}
        </View>
    )
}