import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import CardRequisicao from '../../components/CardRequisicao';
import Header from '../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Requisicoes';
import { Link } from 'expo-router';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=123-41&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function ListaRequisicoes() {
    var empresa = true

    return (
        <ScrollView>
            <Header variant={1} />
            <View style={styles.viewContainer}>
                <Text style={styles.txtTitulo}>Requisições</Text>
                {empresa && (
                    <Link href='#' asChild style={styles.linkCriarRequisicao}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.viewCriarRequisicao}>
                                <Text style={styles.txtCriarRequisicao}>Criar nova requisição</Text>
                                <Ionicons name='add-circle' size={28} color='black' />
                            </View>
                        </TouchableOpacity>
                    </Link>
                )}
                <View style={styles.viewCards}>
                    <CardRequisicao titulo='Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='23/12' categoria='Suporte Técnico' style={{ marginBottom: 25 }} path={'/requisicoes/1'}/>
                    <CardRequisicao titulo='Trocar senha do Wifi'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='01/01' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                    <CardRequisicao titulo='Instalar software da empresa no telefone'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='15/03' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                    <CardRequisicao titulo='Erro no servidor principal'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='12/02' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                    <CardRequisicao titulo='Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='28/06' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                    <CardRequisicao titulo='Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='23/12' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                    <CardRequisicao titulo='Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='23/12' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                    <CardRequisicao titulo='Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='23/12' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                    <CardRequisicao titulo='Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='23/12' categoria='Suporte Técnico' style={{ marginBottom: 25 }} />
                </View>
            </View>
        </ScrollView>
    )
}