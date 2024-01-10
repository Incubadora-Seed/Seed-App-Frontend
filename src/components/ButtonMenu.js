import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonMenu({ onPress, style }) {
    return (
        <View style={style}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name='menu-outline' size={40} color='black' />
            </TouchableOpacity>
        </View>
    )
}