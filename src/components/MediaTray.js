import { TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/MediaTray';

export default function MediaTray({ mediaTrayAberta }) {
    return (
        mediaTrayAberta && (
            <View style={styles.viewMediaTray}>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="camera-outline" size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="image-outline" size={30} color='#000' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="document-text-outline" size={30} color='#000' />
                </TouchableOpacity>
            </View>
        )
    )
}