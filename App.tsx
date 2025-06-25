// App.tsx (root)

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './src/types/navigation'

import SplashScreen from './src/app/SplashScreen'
import TaskListScreen from './src/app/tasks/TaskListScreen'
import TaskItemScreen from './src/app/tasks/TaskItemScreen'
import CongratsScreen from './src/app/CongratsScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TaskListScreen"
          component={TaskListScreen}
          options={{ title: 'My Tasks' }}
        />
        <Stack.Screen
          name="TaskItemScreen"
          component={TaskItemScreen}
          options={{ title: 'Task Details' }}
        />
        <Stack.Screen
          name="CongratsScreen"
          component={CongratsScreen}
          options={{ title: 'Well Done!' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
