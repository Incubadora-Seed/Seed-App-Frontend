import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    btnEdital: {
        backgroundColor: '#FF4D4D',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    viewTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
    },
    txtTitulo: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        lineHeight: 25,
    },
    txtDesc: {
        fontFamily: 'Poppins_300Light',
        fontSize: 16,
        lineHeight: 20,
        paddingBottom: 10,
        textAlign: 'justify'
    },
    txtData: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        textAlign: 'right'
    },
});