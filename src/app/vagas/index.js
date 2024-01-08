import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import CardVaga from '../../components/CardVaga';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Vagas';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=126-129&mode=design&t=3poWcNGhVOhOVgnn-4

export default function ListaVagas() {
    // Adicionar fetch dos dados aqui

    // Variáveis temporárias de teste:
    var fetchData = [{
        titulo: 'Programador Junior',
        empresa: 'Empresa Teste Teste',
        endereco: 'Sapiranga, RS, Brasil',
        dataCriacao: '2024-01-01',
        idVaga: '312'
    }, {
        titulo: 'Programador Senior',
        empresa: 'Empresa Teste2',
        endereco: 'Novo Hamburgo, RS, Brasil',
        dataCriacao: '2023-12-25',
        idVaga: '42'
    }]

    var empresa = true

    return (
        <ScrollView>
            <Header variant={1} />
            <View style={styles.viewContainer}>
                <Text style={styles.txtTitulo}>Vagas</Text>
                {empresa && (
                    <View style={styles.viewCardCriar}>
                        <Link href='#' asChild style={styles.linkCriarRequisicao}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={styles.viewCriarRequisicao}>
                                    <Text style={styles.txtCriarRequisicao}>Criar nova vaga</Text>
                                    <Ionicons name='add-circle' size={28} color='black' />
                                </View>
                            </TouchableOpacity>
                        </Link>
                    </View>
                )}
                <View style={styles.viewCards}>
                    {fetchData && (
                        fetchData.map((item, index) => (
                            <CardVaga titulo={item.titulo} empresa={item.empresa}
                                endereco={item.endereco} dataCriacao={item.dataCriacao}
                                idVaga={item.idVaga} key={index}
                                style={{ marginBottom: 25 }} />
                        ))
                    )}
                </View>
            </View>
        </ScrollView>
    )
}