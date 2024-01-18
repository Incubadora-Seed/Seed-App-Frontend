import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardEdital from "../../../components/CardEdital";
import Styles from "../../../styles/EditaisEeventos";

export default function EditaisEeventos() {
    return (
        <ScrollView style={Styles.viewContainer}>
            <Text style={Styles.txtTitulo}>Editais e eventos</Text>

            <View>
                <CardEdital titulo='EDITAL PROEN Nº 02/2024 Edital De Fluxo Contínuo Para Cadastro De Projetos De Ensino Sem Fomento Do Instituto Federal De Educação, Ciência E Tecnologia Sul-Rio-Grandense' data='10/02/2021' path='/' />
            </View>
        </ScrollView>
    )
}