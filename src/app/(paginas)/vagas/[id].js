import { View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import ButtonLong from '../../../components/ButtonLong';
import ResumoEmpresa from '../../../components/ResumoEmpresa';
import { useState, useEffect } from 'react';
import styles from '../../../styles/Vaga';

// Tela: ...

export default function Vaga() {
    var [data, setData] = useState(undefined)

    function calcularData(dataCriacao) {
        var d1 = dataCriacao
        var d2 = new Date()

        var diffInMs = d2 - (new Date(d1))
        var diffInDays = diffInMs / (1000 * 60 * 60 * 24)
        setData(Math.trunc(diffInDays))
    }

    useEffect(() => {
        calcularData(fetchData.dataCriacao)
    }, [])

    // Variáveis temporárias de teste:
    var fetchData = {
        titulo: 'Programador Junior',
        dataCriacao: '2024-01-16',
        remuneracao: '700,00',
        cargo: 'Estágiario',
        descricao: `Principais atividades:
    \u2022 Auxiliar programadores nas diferentes rotinas de desenvolvimento
    \u2022 Contribuir com a manutenção e melhorias de sistemas
    \u2022 Programar e ajudar na elaboração de softwares, sites, aplicativos e soluções para web
    \u2022 Prestar auxílio na identificação e solução de incidentes

Requisitos Essenciais:
    \u2022 Experiência com C# .net
    \u2022 Noções de javascript, angular ou outro ui framework
    \u2022 Conhecimento teórico e prático de bancos de dados relacionais e linguagem sql
    \u2022 Capacidade de aprendizado rápido`
    }

    return (
        <ScrollView>
            <View style={styles.viewMain}>
                <Text style={styles.titulo}>{fetchData.titulo}</Text>
                <ResumoEmpresa style={{ marginVertical: 5 }} />
                <View style={styles.viewIcons}>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="time-outline" size={20} color='#000' />
                        <Text style={styles.txtIcons}>há {data} dias</Text>
                    </View>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="cash-outline" size={20} color='#000' />
                        <Text style={styles.txtIcons}>R$ {fetchData.remuneracao}</Text>
                    </View>
                    <View style={styles.blocosIcons}>
                        <Ionicons name="basket-outline" size={20} color="black" />
                        <Text style={styles.txtIcons}>{fetchData.cargo}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.txtDescricaoTitulo}>Descrição da vaga:</Text>
                    <Text style={styles.descItens}>{fetchData.descricao}</Text>

                </View>
                <ButtonLong text="Candidatar-se" />
            </View>
        </ScrollView>
    )
}