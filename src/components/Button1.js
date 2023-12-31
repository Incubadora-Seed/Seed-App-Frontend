import styles from '../styles/Button1.js';
import { Text, TouchableOpacity } from 'react-native';

export default function Button1({ style, styleText, text, onPress }) {
    return (
        <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
            <Text style={[styles.txtBtn, styleText]}>{text}</Text>
        </TouchableOpacity>
    )
}