import styles from '../styles/ButtonLong.js';
import { Text, TouchableOpacity } from 'react-native';

export default function ButtonLong({ style, styleText, text, onPress }) {
    return (
        <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
            <Text style={[styles.txtBtn, styleText]}>{text}</Text>
        </TouchableOpacity>
    )
}