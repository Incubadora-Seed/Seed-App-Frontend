import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardRequisicao from '../../components/CardRequisicao';
import Header from '../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Requisicoes';
import { Link } from 'expo-router';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=123-41&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function ListaRequisicoes() {
    // Adicionar fetch dos dados aqui

    // Variaveis temporarias de teste:
    var fetchData = [{
        titulo: 'Atualizar SO para Windows 11 nos PCs da empresa',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....',
        prazo: '23/12',
        categoria: 'Suporte Técnico',
        idRequisicao: 1
    }, {
        titulo: 'Trocar senha do Wifi',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....',
        prazo: '01/01',
        categoria: 'Suporte Técnico',
        idRequisicao: 2
    }, {
        titulo: 'Instalar software da empresa no telefone',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....',
        prazo: '15/03',
        categoria: 'Suporte Técnico',
        idRequisicao: 3
    }]

    var empresa = true

    return (
        <ScrollView>
            <Header variant={1} />
            <View style={styles.viewContainer}>
                <Text style={styles.txtTitulo}>Requisições</Text>
                {empresa && (
                    <View style={styles.viewCardCriar}>
                        <Link href='#' asChild style={styles.linkCriarRequisicao}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={styles.viewCriarRequisicao}>
                                    <Text style={styles.txtCriarRequisicao}>Criar nova requisição</Text>
                                    <Ionicons name='add-circle' size={28} color='black' />
                                </View>
                            </TouchableOpacity>
                        </Link>
                    </View>
                )}
                <View style={styles.viewCards}>
                    {fetchData && (
                        fetchData.map((item, index) => (
                            <CardRequisicao key={index} titulo={item.titulo}
                                descricao={item.descricao}
                                prazo={item.prazo} categoria={item.categoria}
                                path={'/requisicoes/' + item.idRequisicao}
                                style={{ marginBottom: 25 }}
                            />
                        ))
                    )}
                </View>
            </View>
        </ScrollView >
    )
}