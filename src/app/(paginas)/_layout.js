import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer screenOptions={{ title: '' }}>
                <Drawer.Screen
                    name='index'
                    options={{
                        drawerLabel: 'Tela Inicial',
                        title: ''
                    }}
                />
                <Drawer.Screen
                    name='incubar/index'
                    options={{
                        drawerLabel: 'Incubar sua empresa',
                        title: ''
                    }}
                />
                <Drawer.Screen
                    name='requisicoes/index'
                    options={{
                        drawerLabel: 'Requisições',
                        title: ''
                    }}
                />
                <Drawer.Screen
                    name='vagas/index'
                    options={{
                        drawerLabel: 'Vagas de estágio',
                        title: ''
                    }}
                />
                <Drawer.Screen
                    name='agenda/index'
                    options={{
                        drawerLabel: 'Agendar reuniões',
                        title: ''
                    }}
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
                    options={{
                        drawerLabel: 'Sua conta',
                        title: ''
                    }}
                />

                {/* Páginas que não deverão aparecer no menu: */}
                <Drawer.Screen
                    name='requisicoes/[id]'
                    options={{
                        drawerItemStyle: {
                            display: 'none'
                        }
                    }}
                />
                <Drawer.Screen
                    name='vagas/[id]'
                    options={{
                        drawerItemStyle: {
                            display: 'none'
                        }
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}