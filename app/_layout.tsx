import { Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name='onboarding' options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name='new' options={{ title: 'New Plant', presentation: 'modal' }} />
    </Stack>
  )
}

export default _layout
