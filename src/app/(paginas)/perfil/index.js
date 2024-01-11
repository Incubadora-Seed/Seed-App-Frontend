import { View, Text } from "@bacons/react-views";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import Styles from '../../../styles/Perfil';
import CardVaga from "../../../components/CardVaga";
import CardRequisicao from "../../../components/CardRequisicao";
import { TouchableOpacity } from "react-native";

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
            <View style={Styles.viewMain}>
                <TouchableOpacity>
                    <View style={Styles.viewEditar}>
                        <Text style={Styles.txtEditar}>Editar perfil</Text>
                        <Ionicons name="pencil-sharp" size={25} color="black" />
                    </View>
                </TouchableOpacity>


                <View style={Styles.sessionInfos}>
                    <View style={Styles.viewInfos}>
                        <Ionicons name="school-outline" size={24} color="black" />
                        <Text style={Styles.txtInfos}>Informática, 4º ano, manhã</Text>
                    </View>
                    <View style={Styles.viewInfos}>
                        <Ionicons name="at-outline" size={24} color="black" />
                        <Text style={Styles.txtInfos}>fulanodetal@email.com</Text>
                    </View>
                    <View style={Styles.viewInfos}>
                        <Ionicons name="call-outline" size={24} color="black" />
                        <Text style={Styles.txtInfos}>(99) 99999-9999</Text>
                    </View>
                    <View style={Styles.viewInfos}>
                        <Ionicons name="calendar-outline" size={24} color="black" />
                        <Text style={Styles.txtInfos}>dd/mm/aaaa</Text>
                    </View>
                </View>

                <View>
                    <Text style={Styles.txtSubtitulo}>Vagas candidatadas</Text>
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
                    <Text style={Styles.txtSubtitulo}>Requisições em aberto</Text>
                    <CardRequisicao
                        titulo='Atualizar SO para Windows 11 nos PCs da empresa'
                        descricao='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....'
                        prazo='23/12'
                        categoria='Suporte Técnico'></CardRequisicao>
                </View>
            </View>
        </ScrollView>
    )
}