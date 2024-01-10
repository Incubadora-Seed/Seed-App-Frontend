import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../styles/Vaga';
import ButtonLong from '../../../components/ButtonLong';

// Tela: ...

export default function Vaga() {
    return (
        <ScrollView>
            <Header variant={1} />
            <View style={styles.viewMain}>
                <Text style={styles.titulo}>Programador Junior</Text>
                <View style={styles.viewEmpresa}>
                    <Image source={require('../../../../assets/imgs/logo1.jpg')} style={styles.imgEmpresa} />
                    <View style={styles.txtEmpresa}>
                        <Text>Empresa Tal Tal</Text>
                        <Text>Sapiranga, Rio Grande do Sul, Brasil</Text>
                    </View>
                </View>
                <View style={styles.viewIcons}>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="time-outline" size={20} color='#000' />
                        <Text style={styles.txtIcons}>há 6 dias</Text>
                    </View>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="cash-outline" size={20} color='#000' />
                        <Text style={styles.txtIcons}>R$ 700,00</Text>
                    </View>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="bag-outline" size={20} color="black" />
                        <Text style={styles.txtIcons}>Estagiário</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.descricao}>Descrição da vaga:</Text>
                    <Text style={styles.descSubtitulo}>Principais atividades:</Text>
                    <View>
                        <Text style={styles.descItens}>{'\u2022'} Auxiliar programadores nas diferentes rotinas de desenvolvimento</Text>
                        <Text style={styles.descItens}>{'\u2022'} Contribuir com a manutenção e melhorias de sistemas</Text>
                        <Text style={styles.descItens}> {'\u2022'} Programar e ajudar na elaboração de softwares, sistemas, sites, aplicativos e soluções para web</Text>
                        <Text style={styles.descItens}> {'\u2022'} Prestar auxílio na identificação e solução de incidentes</Text>
                    </View>
                    <Text style={styles.descSubtitulo}>Requisitos essencias:</Text>
                    <View>
                        <Text style={styles.descItens}>{'\u2022'} Experiência com C# .net</Text>
                        <Text style={styles.descItens}>{'\u2022'} Noções de javascript, , angular ou outro ui framework</Text>
                        <Text style={styles.descItens}> {'\u2022'} Conhecimento teórico e prático de bancos de dados relacionais e linguagem sql</Text>
                        <Text style={styles.descItens}> {'\u2022'} Capacidade de aprendizado rápido</Text>
                    </View>

                </View>
                <ButtonLong text="Candidatar-se" />
            </View>
        </ScrollView>
    )
}