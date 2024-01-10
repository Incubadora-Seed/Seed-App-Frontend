import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonReturn({ onPress, style }) {
    return (
        <View style={style}>
            <TouchableOpacity onPress={onPress}>
                <Ionicons name='arrow-back-outline' size={35} color='black' />
            </TouchableOpacity>
        </View>
    )
}