import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        alignItems: 'center',
    },
    txtTitulo: {
        color: '#000',
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        lineHeight: 45,
        marginBottom: '10%',
        marginTop: '3%'
    },
    viewContainerAgenda: {
        width: '100%',
        paddingHorizontal: 15
    },
    viewAgenda: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        paddingVertical: 13,
        backgroundColor: '#FFF',
        elevation: 4,
    }
});