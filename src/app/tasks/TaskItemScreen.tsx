// src/app/tasks/TaskItemScreen.tsx

import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@types/navigation'
import { View, Text, Button, StyleSheet } from 'react-native'

type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  'TaskItemScreen'
>
type Route = RouteProp<RootStackParamList, 'TaskItemScreen'>

const TaskItemScreen = () => {
  const navigation = useNavigation<Navigation>()
  const {
    params: { task },
  } = useRoute<Route>()

  const handleComplete = () => {
    navigation.navigate('CongratsScreen', {
      taskTitle: task.title,
      points: task.points ?? 0,
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.desc}>{task.description || 'No description'}</Text>
      <Button title="Mark Complete" onPress={handleComplete} />
    </View>
  )
}

export default TaskItemScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    marginBottom: 16,
  },
})
