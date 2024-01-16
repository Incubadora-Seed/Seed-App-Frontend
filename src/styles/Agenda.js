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
        marginBottom: 13,
        elevation: 4,
    },
    txtDataSelecionada: {
        color: '#000',
        fontFamily: 'Poppins_200ExtraLight',
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 27,
    },
    txtHorariosDisponiveis: {
        color: '#000',
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        lineHeight: 34,
    },
    viewHorarios: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    btnAgendar: {
        marginVertical: 25
    }
});