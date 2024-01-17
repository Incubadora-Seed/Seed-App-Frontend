import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        width: '100%',
        padding: 15,
        flexDirection: 'row',
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'black'
    },
    viewDireita: {
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 15,
        justifyContent: 'space-evenly'
    },
    viewCima: {
        flexDirection: 'row',
    },
    txtUser: {
        flex: 1,
        fontSize: 24,
        fontFamily: "Poppins_400Regular",
        lineHeight: 33,
        flexGrow: 1,
        marginRight: 8
    },
    txtMsg: {
        flex: 1,
        fontSize: 13,
        fontFamily: "Poppins_200ExtraLight",
        textAlign: 'justify',
        lineHeight: 18,
    },
    txtTempo: {
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        marginTop: 5,
        lineHeight: 28
    }
});