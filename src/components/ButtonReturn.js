import { View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ButtonReturn({ path, style }) {
    if (!path) path = '#';
    return (
        <View style={style}>
            <Link href={path} asChild>
                <TouchableOpacity>
                    <Ionicons name='arrow-back-outline' size={35} color='black' />
                </TouchableOpacity>
            </Link>
        </View>
    )
}