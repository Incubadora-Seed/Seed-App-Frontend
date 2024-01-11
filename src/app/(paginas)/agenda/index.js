import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../../../styles/Agenda'
import { Ionicons } from '@expo/vector-icons';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=180-52&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Agenda() {
    const diasDaSemana = ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.']
    const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const opcoesData = { weekday: 'long', day: 'numeric', month: 'long' }
    const formatoData = new Intl.DateTimeFormat('pt-BR', opcoesData)

    const [dataEscolhida, setDataEscolhida] = useState()
    const [dataFormatada, setDataFormatada] = useState()
    const [datasIndisponiveis, setDatasIndisponiveis] = useState([])

    // Variáveis temporárias de teste:
    useEffect(() => {
        setDatasIndisponiveis(['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05', '2024-01-06', '2024-01-07',
            '2024-01-08', '2024-01-09', '2024-01-10', '2024-01-12', '2024-01-13', '2024-01-14'])
    }, [])

    function handleDataEscolhida(data) {
        setDataEscolhida(data)
        setDataFormatada(formatoData.format(data))
        console.log('Data escolhida: ' + dataEscolhida)
        console.log('Data formatada: ' + dataFormatada)
    }

    return (
        <View style={styles.viewContainer}>
            <Text style={styles.txtTitulo}>Agendar Reuniões</Text>
            <View style={styles.viewContainerAgenda}>
                <View style={styles.viewAgenda}>
                    <CalendarPicker onDateChange={handleDataEscolhida}
                        weekdays={diasDaSemana} months={mesesDoAno}
                        selectMonthTitle='Selecione o mês de ' selectYearTitle='Selecione o ano'
                        scrollable={true} disabledDates={datasIndisponiveis}
                        previousComponent={<Ionicons name='chevron-back-outline' size={23} color='black' />}
                        nextComponent={<Ionicons name='chevron-forward-outline' size={23} color='black' />}
                        selectedDayColor='#4D4DFF' selectedDayTextColor='#FFF'
                        textStyle={{ fontFamily: 'Poppins_500Medium', lineHeight: 23 }}
                        headerWrapperStyle={{ paddingHorizontal: 15 }} width={330}
                    />
                </View>
            </View>
            <Text>{dataFormatada ? dataFormatada : null}</Text>
        </View>
    )
}