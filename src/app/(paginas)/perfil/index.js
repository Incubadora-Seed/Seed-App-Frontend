import { View, ScrollView, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../styles/Perfil';
import CardVaga from "../../../components/CardVaga";
import CardRequisicao from "../../../components/CardRequisicao";
import { TouchableOpacity } from "react-native";

export default function Perfil() {

    var fetchData = {
        nome: 'Carlos Julio Andrade da Cunha',
        curso: 'Informática',
        anoCurso: '4',
        turnoCurso: 'manhã',
        email: 'fulanodetal@email.com',
        telefone: '(99) 99999-9999',
        nascimento: '12/04/2005',
        vagas: [{
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
        }],
        requisicoes: [{
            titulo: 'Atualizar SO para Windows 11 nos PCs da empresa',
            descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ....',
            prazo: '23/12',
            categoria: 'Suporte Técnico'
        }]
    }

    return (
        <ScrollView>
            <View style={styles.viewTopo}>
                <Ionicons name="person-circle-outline" size={100} color="black" />
                <Text style={styles.nomeUsusario}>{fetchData.nome}</Text>
            </View>
            <View style={styles.viewMain}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.viewEditar}>
                        <Text style={styles.txtEditar}>Editar perfil</Text>
                        <Ionicons name="pencil-sharp" size={25} color="black" />
                    </View>
                </TouchableOpacity>

                <View style={styles.viewContainerInfos}>
                    <View style={styles.viewInfos}>
                        <Ionicons name="school-outline" size={24} color="black" />
                        <Text style={styles.txtInfos}>{`${fetchData.curso}, ${fetchData.anoCurso}º ano, ${fetchData.turnoCurso}`}</Text>
                    </View>
                    <View style={styles.viewInfos}>
                        <Ionicons name="at-outline" size={24} color="black" />
                        <Text style={styles.txtInfos}>{fetchData.email}</Text>
                    </View>
                    <View style={styles.viewInfos}>
                        <Ionicons name="call-outline" size={24} color="black" />
                        <Text style={styles.txtInfos}>{fetchData.telefone}</Text>
                    </View>
                    <View style={styles.viewInfos}>
                        <Ionicons name="calendar-outline" size={24} color="black" />
                        <Text style={styles.txtInfos}>{fetchData.nascimento}</Text>
                    </View>
                </View>

                <View style={styles.viewVagas}>
                    <Text style={styles.txtSubtitulo}>Vagas candidatadas</Text>
                    {fetchData && (
                        fetchData.vagas.map((item, index) => (
                            <CardVaga titulo={item.titulo} empresa={item.empresa}
                                endereco={item.endereco} dataCriacao={item.dataCriacao}
                                idVaga={item.idVaga} key={index}
                                style={{ marginBottom: 25 }} />
                        ))
                    )}
                </View>

                <View style={styles.viewRequisicoes}>
                    <Text style={styles.txtSubtitulo}>Requisições em aberto</Text>
                    {fetchData && (
                        fetchData.requisicoes.map((item, index) => (
                            <CardRequisicao
                                key={index} titulo={item.titulo}
                                descricao={item.descricao}
                                prazo={item.prazo}
                                categoria={item.categoria} />
                        ))
                    )}
                </View>
            </View>
        </ScrollView>
    )
}