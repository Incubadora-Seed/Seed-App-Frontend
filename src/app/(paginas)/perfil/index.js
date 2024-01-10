import { View, Text } from "@bacons/react-views";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import Styles from '../../../styles/Perfil';
import CardVaga from "../../../components/CardVaga";
import CardRequisicao from "../../../components/CardRequisicao";

export default function Perfil() {

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

    return (
        <ScrollView>
            <View style={Styles.viewTopo}>
                <Ionicons name="person-circle-outline" size={100} color="black" />
                <Text style={Styles.nomeUsusario}>Nome de usuário</Text>
            </View>
            <View>
                <View>
                    <Text style={Styles.viewEditar}>Editar Informações</Text>
                    <Ionicons name="pencil-sharp" size={24} color="black" />
                </View>

                <View>
                    <View>
                        <Ionicons name="book-outline" size={24} color="black" />
                        <Text>Informática, 4º ano, manhã</Text>
                    </View>
                    <View>
                        <Ionicons name="at-outline" size={24} color="black" />
                        <Text>fulanodetal@email.com</Text>
                    </View>
                    <View>
                        <Ionicons name="call-outline" size={24} color="black" />
                        <Text>(99) 99999-9999</Text>
                    </View>
                    <View>
                        <Ionicons name="calendar-outline" size={24} color="black" />
                        <Text>dd/mm/aaaa</Text>
                    </View>
                </View>

                <View>
                    <Text>Vagas candidatadas</Text>
                    {fetchData && (
                        fetchData.map((item, index) => (
                            <CardVaga titulo={item.titulo} empresa={item.empresa}
                                endereco={item.endereco} dataCriacao={item.dataCriacao}
                                idVaga={item.idVaga} key={index}
                                style={{ marginBottom: 25 }} />
                        ))
                    )}
                </View>

                <View>
                    <Text>Requisições em aberto</Text>
                    <CardRequisicao
                        titulo = 'Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo = '23/12'
                        categoria = 'Suporte Técnico'></CardRequisicao>
                </View>
            </View>
        </ScrollView>
    )
}