import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ResumoEmpresa';

export default function ResumoEmpresa({ imgPath, nome, endereco, path }) {
    if (!path) path = '#'

    return (
        <Link href={path} asChild>
            <TouchableOpacity TouchableOpacity={0.5}>
                <View style={styles.viewMain}>
                    <View style={styles.viewImg}>
                        {imgPath ? (
                            <Image />
                        ) : (
                            <Ionicons name='people-circle' size={50} color='#000' />
                        )}
                    </View>
                    <View style={styles.viewDados}>
                        <Text style={styles.txtNome}>{nome}</Text>
                        <Text style={styles.txtEndereco}>{endereco}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Link>

    )
}