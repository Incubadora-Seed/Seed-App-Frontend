import { View, Text } from 'react-native';
import Header from '../../components/Header';
import TagCategoria from '../../components/TagCategoria';
import ResumoEmpresa from '../../components/ResumoEmpresa';
import styles from '../../styles/Requisicao';


// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=205-109&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Requisicao() {
    return (
        <View>
            <Header variant={1} returnPath={'/requisicoes'}/>
            <Text style={styles.txtTitulo}>Requisição 1 - Suporte Técnico SEED</Text>
            <TagCategoria categoria='Suporte Técnico' withText={true} />
            <ResumoEmpresa nome='Empresa Tal Tal' endereco='Sapiranga, Rio Grande do Sul, Brasil'/>
        </View>
    )
}