import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMain: {
        height: '100%',
        width: '100%',
    },
    scrollViewMensagens: {
        flexGrow: 1
    },
    viewMensagens: {
        padding: 10
    },
    viewMsg: {
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
    },
    viewMsgEnviada: {
        alignSelf: 'flex-end',
        backgroundColor: '#4D4DFF',
    },
    viewMsgRecebida: {
        alignSelf: 'flex-start',
        backgroundColor: '#D9D9D9'
    },
    txtConteudo: {
        fontSize: 18,
        fontFamily: 'Poppins_300Light',
        lineHeight: 25,
        textAlign: 'left',
        maxWidth: '90%',
        minWidth: '30%',
    },
    txtConteudoRecebido: {
        color: '#000'
    },
    txtConteudoEnviado: {
        color: '#fff'
    },
    txtTempo: {
        fontSize: 16,
        textAlign: 'right',
        fontFamily: 'Poppins_200ExtraLight',
        lineHeight: 20,
    },
    viewDigitar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 17,
        backgroundColor: '#D9D9D9',
        height: 60
    },
});