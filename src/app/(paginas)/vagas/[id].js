import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Vaga';

// Tela: ...

export default function Vaga() {
    return (
        <ScrollView>
            <Header variant={1} />
            <View style={styles.viewMain}>
                <Text style={styles.titulo}>Programador Junior</Text>
                <View style={styles.viewEmpresa}>
                    <Image source={require('../../../assets/imgs/logo1.jpg')} style={styles.imgEmpresa} />
                    <View style={styles.txtEmpresa}>
                        <Text>Empresa Tal Tal</Text>
                        <Text>Sapiranga, Rio Grande do Sul, Brasil</Text>
                    </View>
                </View>
                <View style={styles.viewIcons}>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="time-outline" size={24} color='#000' />
                        <Text style={styles.txtIcons}>há 6 dias</Text>
                    </View>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="cash-outline" size={24} color='#000' />
                        <Text style={styles.txtIcons}>R$ 700,00</Text>
                    </View>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="bag-outline" size={24} color="black" />
                        <Text style={styles.txtIcons}>Estagiário</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.descricao}>Descrição da vaga:</Text>
                    <Text style={styles.descSubtitulo}>Principais atividades:</Text>
                    <Text style={styles.descSubtitulo}>Requisitos essencias:</Text>

                </View>
            </View>
        </ScrollView>
    )
}