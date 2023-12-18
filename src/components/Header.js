import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ButtonReturn from './ButtonReturn';
import ButtonPerfil from './ButtonPerfil';
import ButtonMenu from './ButtonMenu';
import styles from '../styles/Header';
import { Link } from 'expo-router';

// Props obrigatórias: variant
// Props opcionais: nome, style
// Outras props: returnPath (obrigatória caso variant seja 1), nomePath (opcional caso nome seja passado)

//   Variants: 
//   1 - Return e Menu
//   2 - Perfil e Menu

export default function Header({ variant, returnPath, nome, nomePath, style }) {
    return (
        <View style={[styles.viewMain, style]}>
            {variant === 1 && <ButtonReturn path={returnPath} />}
            {variant === 2 && <ButtonPerfil />}
            {(nome && nomePath) && (
                <Link href={nomePath} asChild>
                    <TouchableOpacity>
                        <Text style={styles.txtNome}>{nome}</Text>
                    </TouchableOpacity>
                </Link>
            )}
            {(nome && (!nomePath)) && (<Text style={styles.txtNome}>{nome}</Text>)}
            <ButtonMenu />
        </View>
    )
}