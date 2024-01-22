import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardEdital from "../../../components/CardEdital";
import CardEvento from "../../../components/CardEvento";
import Styles from "../../../styles/EditaisEeventos";

export default function EditaisEeventos() {

    var fetchData = {
        editais: [
            {
                titulo: 'EDITAL PROEN Nº 02/2024',
                desc: 'Edital De Fluxo Contínuo Para Cadastro De Projetos De Ensino Sem Fomento Do Instituto Federal De Educação, Ciência E Tecnologia Sul-Rio-Grandense',
                data: '10/02/2021',
                path: '/'
            },
            {
                titulo: 'EDITAL PROEN Nº 02/2024',
                desc: 'Edital De Fluxo Contínuo Para Cadastro De Projetos De Ensino Sem Fomento Do Instituto Federal De Educação, Ciência E Tecnologia Sul-Rio-Grandense',
                data: '10/02/2021',
                path: '/',
            }
        ],
        eventos: [
            {
                imagem: require('../../../../assets/imgs/evento.png'),
                nome: 'Evento 1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque ligula vitae augue consectetur lacinia at eget mauris',
                data: '10/02'
            },
            {
                imagem: require('../../../../assets/imgs/evento.png'),
                nome: 'Evento 2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque ligula vitae augue consectetur lacinia at eget mauris',
                data: '10/02'
            }
        ]
    }

    return (
        <ScrollView style={Styles.viewContainer}>
            <Text style={Styles.txtTitulo}>Editais e eventos</Text>

            <View style={Styles.teste}>
                {fetchData.editais && (
                    fetchData.editais.map((item, index) => (
                        <CardEdital titulo={item.titulo} desc={item.desc} data={item.data} path={item.path} style={item.style} key={index}/>
                    ))
                )}

                {fetchData.eventos && (
                    fetchData.eventos.map((item, index) => (
                        <CardEvento imagem={item.imagem} nome={item.nome} desc={item.desc} data={item.data}  key={index}/>
                    ))
                )}
            </View>
        </ScrollView>
    )
}