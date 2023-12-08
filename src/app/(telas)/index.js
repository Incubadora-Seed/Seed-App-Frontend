import { Link } from 'expo-router';
import { View, Text } from 'react-native';

// Tela: ...

export default function Home() {
    return (
        <View>
            <Link href={'/autenticacao/login'}><Text>Login</Text></Link>
        </View>
    )
}