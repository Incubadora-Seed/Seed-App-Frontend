import { View, ScrollView, Text } from 'react-native';
import Header from '../../components/Header';
import TagCategoria from '../../components/TagCategoria';
import ResumoEmpresa from '../../components/ResumoEmpresa';
import ButtonLong from '../../components/ButtonLong';
import styles from '../../styles/Requisicao';
import { Link } from 'expo-router';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=205-109&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Requisicao() {
    // Adicionar fetch dos dados aqui

    // Variaveis temporarias de teste:
    var fetchData = {
        titulo: 'Requisição 1 - Suporte Técnico SEED',
        descricao: `   Nessa requisição você devera fazer... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus fringilla urna, at cursus mi euismod in. Cras vitae felis tortor. Pellentesque aliquam neque mi, et suscipit tellus scelerisque vel. 
    Fusce cursus, augue in sagittis placerat, justo risus mattis tellus, a posuere arcu mauris ac justo. Etiam ac ligula mattis, semper purus non, luctus enim. Nunc laoreet finibus dolor.
    Morbi leo justo, tincidunt sit amet neque sit amet, ultrices tincidunt leo.    
    Etiam viverra, risus pulvinar euismod placerat, orci nibh cursus turpis, et volutpat mi neque eget sem. Praesent dictum mollis neque, eu consectetur lectus pharetra at.`,
        categoria: 'Suporte Técnico',
        idEmpresa: 1
    }

    return (
        <ScrollView>
            <Header variant={1} returnPath={'/requisicoes'} />
            <View style={styles.viewContainer}>
                <Text style={styles.txtTitulo}>{fetchData.titulo}</Text>
                <TagCategoria style={{ marginBottom: 25 }} categoria={fetchData.categoria} comTexto={true} />
                <ResumoEmpresa style={{ marginBottom: 25 }} idEmpresa={fetchData.idEmpresa} />
                <Text style={styles.txtDescricaoTitulo}>Descrição da Requisição:</Text>
                <Text style={styles.txtDescricao}>{fetchData.descricao}</Text>
                <Link href='#' asChild>
                    <ButtonLong style={styles.btnContato} text='Entrar em contato' />
                </Link>
            </View>
        </ScrollView>
    )
}