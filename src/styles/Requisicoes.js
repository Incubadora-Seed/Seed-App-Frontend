import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    txtTitulo: {
        color: '#000',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        lineHeight: 45,
        marginBottom: '10%',
        marginTop: '3%'
    },
    viewCards: {
        width: '85%',
    },
    linkCriarRequisicao: {
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 4,
        width: '85%',
        marginBottom: 25
    },
    viewCriarRequisicao: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 23,
        alignItems: 'center',
    },
    txtCriarRequisicao: {
        color: '#000',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        lineHeight: 28,
    },
})