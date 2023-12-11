import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../../styles/Login.js';
import Input from '../../../components/Input.js';
import { Link } from 'expo-router';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=20-214&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Login() {
    return (
        <View style={styles.viewContainer}>
            <Image style={styles.imgBanner} source={require('../../../../assets/imgs/bannerSeed1.png')} />
            <View style={styles.viewInputs}>
                <Input placeholder='E-mail' icon='mail-outline' inputMode='email' style={{ marginBottom: 50 }} />
                <Input placeholder='Senha' icon='lock-closed-outline' />
            </View>
            <TouchableOpacity style={styles.btnEntrar}>
                <Text style={styles.txtBtnEntrar}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnEsqueceuSenha}>
                <Text style={styles.txtBtnEsqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <Link href={'/autenticacao/cadastro'}>
                <TouchableOpacity>
                    <Text style={styles.txtBtnCriarConta}>Criar nova conta</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}