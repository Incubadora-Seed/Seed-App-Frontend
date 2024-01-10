import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewMain: {
        width: '100%',
    },
    elevation: {
        elevation: 4,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    viewImagem: {
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: 'hidden',
    },
    imagem: {
        maxWidth: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textos: {
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    titulo: {
        fontSize: 20,
        color: '#212529',
        fontFamily: 'Poppins_600SemiBold',
        lineHeight: 30,
        paddingTop: 14
    },
    descricao: {
        fontSize: 16,
        lineHeight: 22,
        color: '#68717A',
        textAlign: 'center',
        paddingVertical: 10,
        fontFamily: 'Poppins_400Regular',
    },
});