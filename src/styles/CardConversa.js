import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        padding: 15,
        flexDirection: 'row',
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'black'
    },
    viewTexto: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    txtUser: {
        fontSize: 24,
        fontFamily: "Poppins_400Regular",
        lineHeight: 33,
    },
    txtMsg: {
        fontSize: 13,
        fontFamily: "Poppins_200ExtraLight",
        textAlign: 'justify',
        lineHeight: 18,
        
    },
    txtTempo: {
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        marginTop: 5,
        lineHeight: 19,
    }

});