// src/app/tasks/TaskListScreen.tsx

import React, { useState, useLayoutEffect, useCallback } from 'react'

import FilterDropdown from '@components/FilterDropdown'
import TaskCard from '@components/TaskCard'
import { useTasks } from '@hooks/useTasks'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@types/navigation'
import { TaskView } from '@types/task'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

const TaskListScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'TaskListScreen'>>()
  const [selectedView, setSelectedView] = useState<TaskView>(
    route.params?.initialView || 'open'
  )

  const {
    getFilteredTasks,
    loading,
    reloadTasks, // refreshed via useFocusEffect
  } = useTasks()

  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'TaskListScreen'>
    >()

  useLayoutEffect(() => {
    const titles: Record<TaskView, string> = {
      open: 'Open Tasks',
      completed: 'Completed Tasks',
    }

    navigation.setOptions({ title: titles[selectedView] })
  }, [navigation, selectedView])

  useFocusEffect(
    useCallback(() => {
      reloadTasks()
    }, [reloadTasks])
  )

  const filteredTasks = getFilteredTasks(selectedView)

  if (loading) {
    return <Text style={styles.loading}>Loading...</Text>
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FilterDropdown selectedView={selectedView} onSelect={setSelectedView} />

      {filteredTasks.length === 0 ? (
        <Text style={styles.empty}>
          No tasks found for "{selectedView}" view.
        </Text>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onPress={() => navigation.navigate('TaskItemScreen', { task })}
          />
        ))
      )}
    </ScrollView>
  )
}

export default TaskListScreen

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  loading: {
    padding: 20,
    textAlign: 'center',
  },
  empty: {
    padding: 20,
    fontStyle: 'italic',
    textAlign: 'center',
  },
})
