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
    viewImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginRight: 10,
    },
    imgVaga: {
        width: 50,
        height: 50,
    },
    viewDireita: {
        flexGrow: 1,
        flexDirection: 'column',
    },
    txtTitulo: {
        color: '#000',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        lineHeight: 22,
        marginBottom: 1,
    },
    txtEmpresa: {
        color: '#000',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 6,
    },
    viewBaixa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtBaixo: {
        color: '#000',
        fontFamily: 'Poppins_300Light',
        fontSize: 13,
        lineHeight: 18,
    }
})