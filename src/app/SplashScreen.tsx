// src/app/SplashScreen.tsx

import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@types/navigation'
import { View, Text, StyleSheet, Button } from 'react-native'

type Navigation = NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<Navigation>()

  const handleContinue = () => {
    navigation.replace('TaskListScreen') // Replace to avoid back button going to splash
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to HouseTasker</Text>
      <Text style={styles.subtitle}>Your Personal House Chores Tracker.</Text>
      <Button title="Continue" onPress={handleContinue} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
})
