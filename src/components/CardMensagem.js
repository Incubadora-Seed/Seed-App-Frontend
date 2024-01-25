import { Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import styles from '../styles/CardMensagem'

export default function CardMensagem({ objMsg, nomeUsuario }) {
    function calcularData(dataCriacao) {
        var d1 = new Date(dataCriacao)
        var d2 = new Date()

        var diffInMs = d2 - d1
        var diffInHours = diffInMs / 3600000
        if (diffInHours < 24) {
            let hora = d1.getHours().toString()
            let minuto = d1.getMinutes().toString()
            if (hora.length == 1) hora = `0${hora}`
            if (minuto.length == 1) minuto = `0${minuto}`
            return `${hora}:${minuto}`
        }
        else {
            var diffInDays = diffInMs / 86400000
            return (Math.trunc(diffInDays) + ' dias')
        }
    }

    if (objMsg.origem == nomeUsuario) {
        styleView = (styles.viewMsgEnviada)
        styleTxt = (styles.txtConteudoEnviado)
    } else {
        styleView = (styles.viewMsgRecebida)
        styleTxt = (styles.txtConteudoRecebido)
    }

    let tempo = calcularData(objMsg.tempo)

    return (
        <View style={[styles.viewMsg, styleView]}>
            <Text style={[styles.txtConteudo, styleTxt]}>
                {objMsg.mensagem}
            </Text>
            <Text style={styles.txtTempo}>
                {tempo}
            </Text>
        </View>
    )
}