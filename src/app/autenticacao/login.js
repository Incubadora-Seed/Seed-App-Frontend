import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import styles from '../../styles/Login.js';
import Input from '../../components/Input.js';
import Button1 from '../../components/Button1.js';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=20-214&mode=design&t=7Z4ya2SoQs9gZYbV-4

export default function Login() {
    return (
        <View style={styles.viewContainer}>
            <Image style={styles.imgBanner} source={require('../../../assets/imgs/bannerSeed1.png')} />
            <View style={styles.viewInputs}>
                <Input placeholder='E-mail' icon='mail-outline' inputMode='email' style={{ marginBottom: 35 }} />
                <Input placeholder='Senha' icon='lock-closed-outline' secureTextEntry={true} />
            </View>
            <Button1 text='Entrar' style={{marginBottom: '16.5%'}} />
            <TouchableOpacity style={styles.btnEsqueceuSenha}>
                <Text style={styles.txtBtnEsqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <Link href={'/autenticacao/cadastro'} asChild>
                <TouchableOpacity>
                    <Text style={styles.txtBtnCriarConta}>Criar nova conta</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}