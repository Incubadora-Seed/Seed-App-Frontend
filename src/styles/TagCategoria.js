import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMain1: {
        width: 33,
        height: 33,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    viewMain2: {
        height: 33,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 0,
        backgroundColor: 'blue',
        borderRadius: 30,
    }, 
    txtCategoria: {
        color: '#FFF',
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        lineHeight: 27,
        marginLeft: 10,
    }
})