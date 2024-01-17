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
    imgEmpresa: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    txtEmpresa: {
        marginLeft: 15,
        fontFamily: "Poppins_400Regular",
        fontSize: 20,
        lineHeight: 27,
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
    txtDescricaoSubtitulo: {
        fontFamily: "Poppins_500Medium",
        fontSize: 16,
        marginVertical: 5,
        lineHeight: 22,
        marginVertical: 10
    },
    viewItens: {
        paddingHorizontal: 10
    },
    descItens: {
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        lineHeight: 19,
        marginBottom: 5
    },
    btnCandidatar: {
        marginVertical: 25
    }
});