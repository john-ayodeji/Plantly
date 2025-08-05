import { Stack } from 'expo-router'
import { useEffect } from 'react'
import * as QuickActions from 'expo-quick-actions'
import { Platform } from 'react-native'
import { useQuickActionRouting } from 'expo-quick-actions/router'

const Layout = () => {
  useQuickActionRouting()
  useEffect(() => {
    // useQuickActionRouting()
    QuickActions.setItems([
      {
        title: "Add a plant",
        icon: Platform.OS === 'ios' ? 'symbol:leaf' : 'leaf',
        id: '0',
        params: { href: '/new' }
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
