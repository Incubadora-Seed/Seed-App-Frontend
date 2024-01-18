import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
        
    },
    txtTitulo: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        color: '#000',
        textAlign: 'center',
        lineHeight: 35
    },
    txtDesc: {
        fontFamily: 'Poppins_300Light',
        fontSize: 16,
        color: '#000',
        textAlign: 'justify',
        lineHeight: 23,
    },
    btnEdital: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4D4D',
        borderRadius: 10,
        padding: 10,
        width: '70%',
        alignSelf: 'center',
    },
    txtEdital: {
        fontFamily: 'Poppins_300Light',
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        marginLeft: 10,
        lineHeight: 40,
    }
});