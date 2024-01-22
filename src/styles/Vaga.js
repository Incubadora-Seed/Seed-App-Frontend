import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMain: {
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    titulo: {
        fontSize: 32,
        fontFamily:"Poppins_600SemiBold",
        textAlign: "center",
        lineHeight: 44,
        marginVertical: 10
    },
    viewIcons: {
        flexDirection: "row",
        width: "85%",
        justifyContent: "space-between",
        marginVertical: 10,
    },
    blocosIcons: {
        alignItems: "center",
        flexDirection: "row"
    },
    txtIcons: {
        fontFamily: "Poppins_300Light",
        marginLeft: 3,
        fontSize: 13,
        alignItems: "center",
        lineHeight: 18,
    },
    txtDescricaoTitulo: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
        marginVertical: 5,
        lineHeight: 27,
        marginVertical: 10
    },
    descItens: {
        fontFamily: "Poppins_400Regular",
        fontSize: 16,
        lineHeight: 22,
        textAlign: "justify",
    }
});