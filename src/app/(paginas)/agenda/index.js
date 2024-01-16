import { View, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker'
import { Ionicons } from '@expo/vector-icons';
import ButtonHorario from '../../../components/ButtonHorario';
import ButtonLong from '../../../components/ButtonLong'
import styles from '../../../styles/Agenda'

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=180-52&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Agenda() {
    const diasDaSemana = ['D.', 'S.', 'T.', 'Q.', 'Q.', 'S.', 'S.']
    const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const opcoesData = { weekday: 'long', day: 'numeric', month: 'long' }
    const formatoData = new Intl.DateTimeFormat('pt-BR', opcoesData)

    const [dataEscolhida, setDataEscolhida] = useState()
    const [dataFormatada, setDataFormatada] = useState()
    const [datasIndisponiveis, setDatasIndisponiveis] = useState([])
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([])
    const [horarioEscolhido, setHorarioEscolhido] = useState()

    // Variáveis temporárias de teste:
    useEffect(() => {
        setDatasIndisponiveis(['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05', '2024-01-06', '2024-01-07',
            '2024-01-08', '2024-01-09', '2024-01-10', '2024-01-12', '2024-01-13', '2024-01-14'])
        setHorariosDisponiveis(['13:30', '14:00', '15:30', '16:00', '18:00', '21:00', '23:00', '24:00'])
    }, [])

    function handleDataEscolhida(data) {
        setHorarioEscolhido(undefined)
        setDataEscolhida(data)
        setDataFormatada(formatoData.format(data))
        console.log('Data escolhida: ' + dataEscolhida)
        console.log('Data formatada: ' + dataFormatada)
    }

    function primeiraLetraMaiuscula(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <ScrollView contentContainerStyle={styles.viewContainer}>
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
            <Text style={styles.txtDataSelecionada}>{dataFormatada ? primeiraLetraMaiuscula(dataFormatada) : null}</Text>
            {dataEscolhida && (
                <>
                    <Text style={styles.txtHorariosDisponiveis}>Horários Disponíveis</Text>
                    <View style={styles.viewHorarios}>
                        {horariosDisponiveis && horariosDisponiveis.map((item, index) => {
                            let selecionado = false
                            if (horarioEscolhido == item) selecionado = true
                            return (
                                <ButtonHorario key={index} horario={item} set={setHorarioEscolhido} selecionado={selecionado} style={{ marginRight: 10, marginBottom: 10 }} />
                            )
                        })}
                        {horarioEscolhido && (
                            <ButtonLong text='Agendar' onPress={() => (alert('agendado'))} style={styles.btnAgendar} />
                        )}
                    </View>
                </>
            )}
        </ScrollView>
    )
}