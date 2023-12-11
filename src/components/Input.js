import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Input.js';

export default function Input({ placeholder, icon, inputMode, value, onChangeText }) {
    return (
        <View style={styles.viewMain}>
            <View style={styles.viewIcon}>
                <Ionicons name={icon} size={24} color='#000' />
            </View>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor='#000' value={value} onChangeText={onChangeText} inputMode={inputMode} />
        </View>
    )
}