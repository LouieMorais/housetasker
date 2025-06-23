// src/components/TaskCard.tsx

import React from 'react'

import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import type { Task } from '../types/task'

interface TaskCardProps {
  task: Task
  onPress: () => void
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {task.photo_url && (
        <Image source={{ uri: task.photo_url }} style={styles.image} />
      )}
      <View style={styles.info}>
        <Text style={styles.title}>{task.title}</Text>
        <Text>Status: {task.status}</Text>
        <Text>Points: {task.points}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
})

export default TaskCard
