import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMensagens: {
        height: '90%',
        padding: 10
    },
    viewMsg: {
        padding: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 15
    },
    txtConteudo: {
        fontSize: 20,
        width: '90%',
        fontFamily: 'Poppins_300Light',
        lineHeight: 25
    },
    txtTempo: {
        fontSize: 14,
        textAlign: 'right',
        fontFamily: 'Poppins_200ExtraLight',
        lineHeight: 15
    },
    viewDigitar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#D9D9D9',
        height: '10%'
    }
});