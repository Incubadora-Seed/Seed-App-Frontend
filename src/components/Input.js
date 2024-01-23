import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Input.js';

export default function Input({ placeholder, icon, style, styleIcon, inputMode, secureTextEntry, value, onChangeText, onBlur}) {
    return (
        <View style={[styles.viewMain, style]}>
            <View style={[styles.viewIcon, styleIcon]}>
                <Ionicons name={icon} size={24} color='#000' />
            </View>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#000' inputMode={inputMode} secureTextEntry={secureTextEntry} 
            value={value} onChangeText={onChangeText} onBlur={onBlur} />
        </View>
    )
}