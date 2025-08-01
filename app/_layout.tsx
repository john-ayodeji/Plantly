import { Stack } from 'expo-router'
import { useEffect } from 'react'
import * as QuickActions from 'expo-quick-actions'
import { Platform } from 'react-native'

const Layout = () => {
  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a plant",
        icon: Platform.OS === 'ios' ? 'symbol:leaf' : 'leaf',
        id: '0'
      }
    ])
  }, [])
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name='onboarding' options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name='new' options={{ title: 'New Plant', presentation: 'modal' }} />
    </Stack>
  )
}

export default Layout
