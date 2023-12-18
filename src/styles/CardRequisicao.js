import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMain: {
        width: '100%',
        flexDirection: 'row',
        borderRadius: 20,
        backgroundColor: '#fff',
        padding: 10
    },
    elevation: {
        elevation: 4,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    viewEsquerda: {
        width: '85%',
    },
    viewDireita: {
        width: '15%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    txtTitulo: {
        color: '#000',
        fontFamily: 'Poppins_500Medium',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 3,
    },
    txtDescricao: {
        color: '#000',
        fontFamily: 'Poppins_200ExtraLight',
        fontSize: 12,
        marginBottom: 5,
    },
    viewPrazo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtPrazo: {
        color: '#000',
        fontFamily: 'Poppins_400Regular',
        fontSize: 13,
        lineHeight: 18,
        marginRight: 13
    },
    viewLinha: {
        height: 4,
        flexGrow: 1,
        backgroundColor: '#14FF00',
    },
    viewCirculo: {
        width: 33,
        height: 33,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    }
})