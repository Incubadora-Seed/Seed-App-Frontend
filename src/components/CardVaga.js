import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Link } from "expo-router";
import styles from '../styles/CardVaga.js'
import { useEffect, useState } from 'react';

export default function CardVaga({ titulo, empresa, endereco, dataCriacao, style, idVaga, idEmpresa }) {
    var [data, setData] = useState(undefined)

    function calcularData(dataCriacao) {
        var d1 = dataCriacao
        var d2 = new Date()

        var diffInMs = d2 - (new Date(d1))
        var diffInMinutes = diffInMs / 60000
        if (diffInMinutes < 60) {
            setData(Math.trunc(diffInHours) + ' minutos')
        } else {
            var diffInHours = diffInMs / 3600000
            if (diffInHours < 24) {
                setData(Math.trunc(diffInHours) + ' horas')
            }
            else {
                var diffInDays = diffInMs / 86400000
                setData(Math.trunc(diffInDays) + ' dias')
            }
        }
    }

    useEffect(() => {
        calcularData(dataCriacao)
    }, [])

    return (
        <Link href={`/vagas/${idVaga}`} asChild style={style}>
            <TouchableOpacity style={styles.elevation} activeOpacity={0.5}>
                <View style={styles.viewMain}>
                    <View style={styles.viewImg}>
                        <Image source={require('../../assets/imgs/logo1.jpg')} style={styles.imgVaga} />
                    </View>
                    <View style={styles.viewDireita}>
                        <Text style={styles.txtTitulo}>{titulo}</Text>
                        <Text style={styles.txtEmpresa}>{empresa}</Text>
                        <View style={styles.viewBaixa}>
                            <Text style={styles.txtBaixo}>{endereco}</Text>
                            {data ? (<Text style={styles.txtBaixo}>Há {data}</Text>) : (null)}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>
    )
}