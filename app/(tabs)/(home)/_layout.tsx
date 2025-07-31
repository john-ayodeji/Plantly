import { Stack, Link, SplashScreen } from 'expo-router'
import { Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from '@/theme';

SplashScreen.preventAutoHideAsync()

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            title: 'Home',
            headerRight: () => {
                return (
                    <Link href='/new' asChild>
                        <Pressable  style={{ paddingRight: 12 }} hitSlop={20}>
                            <AntDesign name="pluscircleo" size={24} color={theme.colorGreen} />
                        </Pressable>
                    </Link>
                )
        }}}
        />
        <Stack.Screen name='plants/[plantid]' options={{ title: '' }} />
    </Stack>
  )
}

export default Layout