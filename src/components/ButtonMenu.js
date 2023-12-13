import { View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonReturn({ path, style }) {
    return (
        <View style={style}>
            <TouchableOpacity>
                <Ionicons name='menu-outline' size={40} color='black' />
            </TouchableOpacity>
        </View>
    )
}