import { View, Text } from 'react-native';
import Styles from '../../../styles/Incubar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import ButtonLong from '../../../components/ButtonLong';
import { Link } from 'expo-router';

export default function Incubar() {
    return (
        <View style={Styles.viewContainer}>
            <Text style={Styles.txtTitulo}>Incubar sua empresa</Text>
            <Text style={Styles.txtDesc}>A incubação na Seed oferece uma oportunidade única para startups prosperarem. A incubadora proporciona um ambiente colaborativo, acesso a mentores experientes e recursos essenciais para o crescimento sustentável do seu negócio. Ao se juntar à Seed, sua empresa terá a chance de interagir com uma rede diversificada de empreendedores, investidores e especialistas do setor. Além disso, a incubadora oferece suporte em áreas críticas, como desenvolvimento de negócios, marketing e captação de recursos. Essa parceria estratégica pode acelerar significativamente o desenvolvimento da sua empresa, proporcionando as condições ideais para inovação e sucesso a longo prazo.</Text>
            <TouchableOpacity activeOpacity={0.7} style={Styles.btnEdital}>
                <Link href={'/'}>
                    <Ionicons name="document-text-outline" size={35} color="black" />
                    <Text style={Styles.txtEdital}>Acessar o edital</Text>
                </Link>
            </TouchableOpacity>
            <ButtonLong text='Solicitar incubação' />
        </View>
    )
}