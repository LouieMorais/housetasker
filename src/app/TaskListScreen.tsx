import React from 'react'

import { View, Text, ScrollView, Button } from 'react-native'

import { useTaskStore } from '@/stores/taskStore'

const TaskListScreen: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks)
  const isLoading = useTaskStore((state) => state.isLoading)
  const markCompleted = useTaskStore((state) => state.markTaskAsCompleted)

  if (isLoading) return <Text>Loading...</Text>

  return (
    <ScrollView>
      {tasks.map((task) => (
        <View key={task.id} style={{ marginBottom: 10 }}>
          <Text>
            {task.id} - {task.description} — {task.status}
          </Text>
          {task.status === 'Open' && (
            <Button title="Done" onPress={() => markCompleted(task.id)} />
          )}
        </View>
      ))}
    </ScrollView>
  )
}

export default TaskListScreen
