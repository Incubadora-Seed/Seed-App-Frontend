import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ButtonHorario'

export default function ButtonHorario({ horario, set, style, selecionado }) {

    function handlePress() {
        set(horario)
    }

    return (
        <TouchableOpacity style={[styles.btnContainer, selecionado ? ({ backgroundColor: '#4D4DFF' }) : (null), style]} onPress={handlePress}>
            <View style={styles.viewMain}>
                <Ionicons name='time-outline' size={22} color={selecionado ? ('#fff') : ('#000')} />
                <Text style={[styles.txtHorario, selecionado ? ({ color: '#fff' }) : (null)]}>{horario}</Text>
            </View>
        </TouchableOpacity>
    )
}