import { View, Text, Image } from 'react-native';
import styles from '../../../styles/login.js';
import { TextInput } from 'react-native-gesture-handler';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=20-214&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Login() {
    return (
        <View>
            <Image style={styles.imgBanner} source={require('../../../../assets/imgs/bannerSeed1.png')}/>
            <View>
                <TextInput style={styles.inputEmail} placeholder='E-mail'></TextInput>
                <TextInput style={styles.inputSenha} placeholder='Senha'></TextInput>
            </View>
        </View>
    )
}