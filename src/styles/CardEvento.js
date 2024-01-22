import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    viewContainer: {
        elevation: 5,
        backgroundColor: 'white',
        marginBottom: 20,
        marginHorizontal: 2,
        borderRadius: 10,
    },
    img: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    viewInfos: {
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    txtNome: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 24,
        lineHeight: 26,
        paddingVertical: 10
    },
    txtDesc: {
        fontFamily: 'Poppins_300Light',
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'justify'
    },
    viewBaixo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    btnMarcar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4D4DFF',
        padding: 10,
        borderRadius: 10,
    },
    txtMarcar: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        paddingLeft: 5,
        lineHeight: 20,
    },
    txtData: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 28,
        lineHeight: 35,
    }
});