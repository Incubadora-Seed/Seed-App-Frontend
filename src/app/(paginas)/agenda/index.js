import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker'
import styles from '../../../styles/Agenda'
import { Ionicons } from '@expo/vector-icons';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=180-52&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Agenda() {
    const [dataEscolhida, setDataEscolhida] = useState()

    function handleDataEscolhida(data){
        setDataEscolhida(data.toString())
    }

    return (
        <View style={styles.viewContainer}>
            <Text style={styles.txtTitulo}>Agendar Reuniões</Text>
            <View>
            <CalendarPicker onDateChange={handleDataEscolhida}
                weekdays={['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.']}
                months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']}
                selectMonthTitle='Selecione o mês de ' selectYearTitle='Selecione o ano'
                showDayStragglers={true} scrollable={true}
                previousComponent={<Ionicons name='chevron-back-outline' size={23} color='black' />}
                nextComponent={<Ionicons name='chevron-forward-outline' size={23} color='black' />}
                selectedDayColor='#4D4DFF' selectedDayTextColor='#FFF' 
                textStyle={{ fontFamily: 'Poppins_500Medium', lineHeight: 23}}
            />
            </View>
            <Text>{dataEscolhida ? dataEscolhida : null}</Text>
        </View>
    )
}