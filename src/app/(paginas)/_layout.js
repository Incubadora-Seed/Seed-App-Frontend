import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Header from '../../components/Header';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={({ navigation }) => ({
                    drawerLabelStyle: {
                        fontFamily: 'Poppins_400Regular',
                        fontSize: 18,
                        lineHeight: 23,
                    },
                    drawerActiveBackgroundColor: '#4D4DFF',
                    drawerActiveTintColor: '#FFF',
                    drawerInactiveTintColor: '#000',
                    drawerPosition: 'right',
                    sceneContainerStyle: {
                        backgroundColor: '#FFF'
                    }
                })}>
                <Drawer.Screen
                    name='index'
                    options={({ navigation }) => ({
                        drawerLabel: 'Tela Inicial',
                        title: '',
                        header: () => (<Header variant={2} navigation={navigation} />)
                    })}
                />
                <Drawer.Screen
                    name='incubar/index'
                    options={({ navigation }) => ({
                        drawerLabel: 'Incubar sua empresa',
                        title: '',
                        header: () => (<Header variant={1} navigation={navigation} />)
                    })}
                />
                <Drawer.Screen
                    name='requisicoes/index'
                    options={({ navigation }) => ({
                        drawerLabel: 'Requisições',
                        title: '',
                        header: () => (<Header variant={1} navigation={navigation} />)
                    })}
                />
                <Drawer.Screen
                    name='vagas/index'
                    options={({ navigation }) => ({
                        drawerLabel: 'Vagas de estágio',
                        title: '',
                        header: () => (<Header variant={1} navigation={navigation} />)
                    })}
                />
                <Drawer.Screen
                    name='agenda/index'
                    options={({ navigation }) => ({
                        drawerLabel: 'Agendar reuniões',
                        title: '',
                        header: () => (<Header variant={1} navigation={navigation} />)
                    })}
                />
                <Drawer.Screen
                    name='autenticacao/cadastro'
                    options={{
                        drawerLabel: 'Cadastro',
                        title: ''
                    }}
                />
                <Drawer.Screen
                    name='perfil/index'
                    options={({ navigation }) => ({
                        drawerLabel: 'Sua conta',
                        title: '',
                        header: () => (<Header variant={1} navigation={navigation} style={{backgroundColor:'#4D4DFF'} } />)
                    })}
                />

                <Drawer.Screen
                    name='conversas/index'
                    options={({ navigation }) => ({
                        drawerLabel: 'Conversas',
                        title: '',
                        header: () => (<Header variant={1} navigation={navigation} />)
                    })}
                />

                {/* Páginas que não deverão aparecer no menu: */}
                <Drawer.Screen
                    name='requisicoes/[id]'
                    options={({ navigation }) => ({
                        drawerItemStyle: {
                            display: 'none'
                        },
                        header: () => (<Header variant={1} navigation={navigation} />)
                    })}
                />
                <Drawer.Screen
                    name='vagas/[id]'
                    options={({ navigation }) => ({
                        drawerItemStyle: {
                            display: 'none'
                        },
                        header: () => (<Header variant={1} navigation={navigation} />)
                    })}
                />

                <Drawer.Screen
                    name='conversas/[id]'
                    options={({ navigation }) => ({
                        drawerItemStyle: {
                            display: 'none'
                        },
                        header: () => (<Header variant={1} navigation={navigation} style={{backgroundColor:'#D9D9D9'} } />)
                    })}
                />
            </Drawer>
        </GestureHandlerRootView >
    );
}