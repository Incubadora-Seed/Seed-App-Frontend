import { View, Text, Image } from 'react-native';
import styles from '../../../styles/Login.js';
import Input from '../../../components/Input.js';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=20-214&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Login() {
    return (
        <View>
            <Image style={styles.imgBanner} source={require('../../../../assets/imgs/bannerSeed1.png')}/>
            <View>
                <Input placeholder='E-mail' icon='mail-outline' inputMode='email' />
                <Input placeholder='Senha' icon='lock-closed-outline'/>
            </View>
        </View>
    )
}