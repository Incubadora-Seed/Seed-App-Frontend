import { View, Text } from 'react-native';
import CardRequisicao from '../../components/CardRequisicao';
import Header from '../../components/Header';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=123-41&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function ListaRequisicoes() {
    return (
        <View>
            <Header variant={1} nome={'Marcia Carla'} />
            <CardRequisicao />
        </View>
    )
}