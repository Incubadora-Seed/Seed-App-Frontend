import { View, Text } from 'react-native';
import CardConversa from '../../../components/CardConversa';
import { ScrollView } from 'react-native-gesture-handler';
import Styles from '../../../styles/Conversas';

export default function Conversas() {

    var fetchData = [{
        idConversa: 1,
        foto: '',
        usuario: 'Incubadora Seed',
        msg: 'Lorem ipsum dolor sit amet, consectetur.....',
        tempo: '16:40',
        bg: '#d9d9d9'
    },
    {
        idConversa: 2,
        foto: '',
        usuario: 'João da Silva',
        msg: 'Lorem ipsum dolor sit amet, consectetur.....',
        tempo: '07:00',
        bg: 'white'
    },
    {
        idConversa: 3,
        foto: '',
        usuario: 'Maria da Silva',
        msg: 'Lorem ipsum dolor sit amet, consectetur.....',
        tempo: 'Ontem',
        bg: '#d9d9d9'
    },
    {
        idConversa: 4,
        foto: '',
        usuario: 'José da Silva',
        msg: 'Lorem ipsum dolor sit amet, consectetur.....',
        tempo: 'Ontem',
        bg: 'white'
    },
    {
        idConversa: 5,
        foto: '',
        usuario: 'Joana da Silva',
        msg: 'Lorem ipsum dolor sit amet, consectetur.....',
        tempo: '14/01',
        bg: '#d9d9d9'
        },
        {
            idConversa: 6,
            foto: '',
            usuario: 'Ana da Silva',
            msg: 'Lorem ipsum dolor sit amet, consectetur.....',
            tempo: '14/01',
            bg: 'white'
        },
        {
            idConversa: 7,
            foto: '',
            usuario: 'Pedro da Silva',
            msg: 'Lorem ipsum dolor sit amet, consectetur.....',
            tempo: '10/01',
            bg: '#d9d9d9'
        }
    ]

    return (
        <ScrollView>
            <Text style={Styles.txtTitulo}>Conversas ativas</Text>
            {fetchData && (
                fetchData.map((item, index) => (
                    <CardConversa foto={item.foto} usuario={item.usuario} msg={item.msg} tempo={item.tempo} idConversa={item.idConversa} key={index} bg={item.bg} />
                ))
            )}
        </ScrollView>
    )
}