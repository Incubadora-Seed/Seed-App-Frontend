import { View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonPerfil({ onPress, style }) {
    return (
        <View style={style}>
            <Link href={'#'} asChild>
                <TouchableOpacity onPress={onPress}>
                    <Ionicons name='person-outline' size={35} color='black' />
                </TouchableOpacity>
            </Link>
        </View>
    )
}