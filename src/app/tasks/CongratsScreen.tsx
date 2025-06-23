// src/app/CongratsScreen.tsx

import React from 'react'

import { useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '@types/navigation'
import { View, Text, StyleSheet } from 'react-native'

type Route = RouteProp<RootStackParamList, 'CongratsScreen'>

const CongratsScreen = () => {
  const {
    params: { taskTitle, points },
  } = useRoute<Route>()

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎉 Task Complete!</Text>
      <Text style={styles.body}>
        You finished "{taskTitle}" and earned {points} points.
      </Text>
    </View>
  )
}

export default CongratsScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
  },
})
