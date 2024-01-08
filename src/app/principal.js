import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import CardOpcoes from '../components/CardOpcoes';
import styles from '../styles/Principal';

export default function Princial() {
    return (
        <ScrollView>
            <Header variant={2} />
            <View style={styles.viewContainer}>
                <CardOpcoes titulo='Incubar sua empresa' descricao='Incube sua empresa... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/' style={{ marginVertical: 20 }} />
                
                <CardOpcoes titulo='Requisições' descricao='Crie ou resolva requisições... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/requisicoes' style={{ marginVertical: 20 }} />

                <CardOpcoes titulo='Vagas de estágio' descricao='Crie ou se candidate para vagas... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/vagas' style={{ marginVertical: 20 }} />

                <CardOpcoes titulo='Agendar reuniões' descricao='Agende reuniões com a incubadora... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum vulputate nibh at tempor. z' path='/agenda' style={{ marginVertical: 20 }} />
             </View>
        </ScrollView>
    )
}