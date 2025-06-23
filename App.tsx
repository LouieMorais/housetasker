// App.tsx

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

// TEMP: Supabase test screen
import DevSupabaseTestScreen from '@app/DevSupabaseTestScreen'

const Stack = createNativeStackNavigator()

function ErrorFallback({ error }: { error: Error }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        App Error
      </Text>
      <Text>{error.message}</Text>
    </View>
  )
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError && this.state.error) {
      console.log('App crashed with:', this.state.error)
      return <ErrorFallback error={this.state.error} />
    }
    return this.props.children
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DevSupabaseTestScreen"
            component={DevSupabaseTestScreen}
            options={{ title: 'Supabase Test' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  )
}
