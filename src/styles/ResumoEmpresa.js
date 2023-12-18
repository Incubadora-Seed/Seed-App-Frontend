import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMain: {
        flexDirection: 'row',
    },
    viewImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#fff',
    },
    viewDados: {
        paddingLeft: 10,
        paddingVertical: 2,
        justifyContent: 'space-between',
    },
    txtNome: {
        color: '#000',
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        lineHeight: 22,
    },
    txtEndereco: {
        color: '#000',
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        lineHeight: 20,
    }
})