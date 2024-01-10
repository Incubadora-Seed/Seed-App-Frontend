import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import styles from '../../../styles/Cadastro.js';
import Input from '../../../components/Input.js'
import Button1 from '../../../components/Button1.js';
import ButtonReturn from '../../../components/ButtonReturn.js';
import Dropdown1 from '../../../components/Dropdown1.js';

// Tela: https://www.figma.com/file/f2Vsc2XnqkxnL9iYGbFvXz/APP-SEED?type=design&node-id=21-355&mode=design&t=OcnMSN4vulBDbebg-4

export default function Login() {
    const [tipoConta, setTipoConta] = useState('')
    const dropdownContaData = [{ key: '1', value: 'Empresa' }, { key: '2', value: 'Aluno' }]
    const [curso, setCurso] = useState('')
    const dropdownCursoData = [{ key: '1', value: 'Informática' }, { key: '2', value: 'Eletromecânica' }]

    const formAluno = (
        <>
            <Input placeholder='Nome Completo' icon='person-outline' style={{ marginBottom: 35 }} />
            <Input placeholder='E-mail' icon='mail-outline' inputMode='email' style={{ marginBottom: 35 }} />
            <Dropdown1 placeholder='Curso' icon='book-outline' data={dropdownCursoData} setSelected={setCurso} style={{ marginBottom: 35 }} />
            <Input placeholder='Ano que está cursando' icon='calendar-outline' inputMode='numeric' style={{ marginBottom: 35 }} />
            <Input placeholder='Senha' icon='lock-closed-outline' style={{ marginBottom: 35 }} secureTextEntry={true} />
            <Input placeholder='Confirme a Senha' icon='shield-checkmark-outline' secureTextEntry={true} />
        </>
    )

    return (
        <ScrollView>
            <View style={styles.viewContainer}>
                <Image style={styles.imgBanner} source={require('../../../../assets/imgs/bannerSeed1.png')} />
                <View style={styles.viewTitle}>
                    <ButtonReturn style={styles.btnReturn} path={'/autenticacao/login'} />
                    <Text style={styles.txtTitle}>Criar Conta</Text>
                </View>
                <View style={styles.viewInputs}>
                    <Dropdown1 placeholder='Tipo de Conta' icon='people-outline' data={dropdownContaData} setSelected={setTipoConta} style={{ marginBottom: 35 }} />
                    {tipoConta == 'Aluno' && formAluno}
                </View>
                {tipoConta && <Button1 text='Cadastrar' style={{marginBottom: '16.5%'}}/>}
            </View>
        </ScrollView>
    )
}