import { View, Text } from 'react-native';
import Conversa from '../../../components/Conversa';
import { ScrollView } from 'react-native-gesture-handler';

export default function Conversas() {
    return (
        <ScrollView>
            <Text>Conversas ativas</Text>
            <Conversa/>
        </ScrollView>
    )
}