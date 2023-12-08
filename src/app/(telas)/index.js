import { Link, router } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <Link href='/users/1'>Go to user 1</Link>
            <Pressable onPress={() => router.push('/users/2')}><Text>Go to user 2</Text></Pressable>
        </View>
    )
}