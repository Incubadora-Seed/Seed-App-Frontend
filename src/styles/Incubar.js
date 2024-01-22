import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center',
    },
    txtTitulo: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        color: '#000',
        textAlign: 'center',
        lineHeight: 35,
        marginBottom: 25
    },
    txtDesc: {
        fontFamily: 'Poppins_300Light',
        fontSize: 16,
        color: '#000',
        textAlign: 'justify',
        lineHeight: 23,
        marginBottom: 20
    },
    linkBtnEdital: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 15
    },
    btnEdital: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#ff6464',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 'auto'
    },
    txtEdital: {
        fontFamily: 'Poppins_300Light',
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        lineHeight: 35,
    }
});