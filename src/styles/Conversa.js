import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMensagens: {
        height: '90%',
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
        fontSize: 20,
        fontFamily: 'Poppins_300Light',
        lineHeight: 25,
        textAlign: 'justify',
        maxWidth: '90%',
        minWidth: '30%',
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
        padding: 10,
        backgroundColor: '#D9D9D9',
        height: '10%',
    }
});