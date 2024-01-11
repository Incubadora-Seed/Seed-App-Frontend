import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMain: {
        padding: 10
    },
    titulo: {
        fontSize: 32,
        fontFamily:"Poppins_600SemiBold",
        textAlign: "center"
    },
    viewEmpresa: {
        "flexDirection": "row",
        "alignItems": "center"
    },
    imgEmpresa: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    txtEmpresa: {
        marginLeft: 15,
        fontFamily: "Poppins_400Regular",
        fontSize: 20
    },
    viewIcons: {
        flexDirection: "row",
        width: "75%",
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
    },
    descricao: {
        fontFamily: "Poppins_600SemiBold",
        fontSize: 20,
        marginVertical: 5
    },
    descSubtitulo: {
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
        marginVertical: 5
    },
    viewItens: {
        paddingHorizontal: 10
    },
    descItens: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        marginVertical: 2.5,
        textAlign: "justify",
    },
    btnCandidatar: {
        marginVertical: 10
    }
});