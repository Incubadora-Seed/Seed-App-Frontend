import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    txtTitulo: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 30,
        lineHeight: 38,
        color: '#000',
        marginTop: '3%',
        marginBottom: 10,
    },
    txtDescricaoTitulo: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        lineHeight: 28,
        color: '#000',
    },
    txtDescricao: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 22,
        color: '#000',
        textAlign: 'justify',
    },
    btnContato: {
        marginVertical: 25
    }
})