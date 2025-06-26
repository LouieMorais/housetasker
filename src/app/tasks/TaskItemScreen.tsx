// src/app/tasks/TaskItemScreen.tsx

import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { updateTaskStatus } from '@services/taskService'
import theme from '@theme'
import { RootStackParamList } from '@types/navigation'
import dayjs from 'dayjs'
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'

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

  const handleComplete = async () => {
    const success = await updateTaskStatus(task.id, 'completed')
    if (!success) {
      Alert.alert('Error', 'Failed to update task status.')
      return
    }

    navigation.navigate('CongratsScreen', {
      taskTitle: task.title,
      points: task.points ?? 0,
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1. Room name */}
      <Text style={styles.room}>{task.rooms?.name || 'N/A'}</Text>

      {/* 2. Task title */}
      <Text style={styles.title}>{task.title}</Text>

      {/* 4. Assigned to row */}
      <View style={styles.assignedRow}>
        {task.housemates?.avatar_url && (
          <Image
            source={{ uri: task.housemates.avatar_url }}
            style={styles.avatar}
          />
        )}
        <Text style={styles.assignedName}>
          {task.housemates?.display_name || 'Unknown'}
        </Text>
      </View>

      {/* 3. Image with overlaid points badge */}
      <View style={styles.imageWrapper}>
        {task.photo_url && (
          <Image source={{ uri: task.photo_url }} style={styles.image} />
        )}
        <View style={styles.pointsBadge}>
          <Text style={styles.pointsText}>{task.points} pts</Text>
        </View>
      </View>

      <View style={styles.pillRow}>
        {/* Status Pill */}
        <View
          style={[
            styles.statusPill,
            task.status === 'completed'
              ? styles.pillSuccess
              : task.status === 'late'
                ? styles.pillDanger
                : styles.pillPrimary,
          ]}
        >
          <Text style={styles.pillText}>{task.status}</Text>
        </View>

        {/* Due Date Pill */}
        <View
          style={[
            styles.duePill,
            task.status === 'completed'
              ? styles.pillSuccess
              : task.status === 'late'
                ? styles.pillDanger
                : styles.pillPrimary,
          ]}
        >
          <Text style={styles.pillText}>
            Due on: {dayjs(task.due_date).format('D MMM YYYY')}
          </Text>
        </View>
      </View>

      {/* 6. Description */}
      <Text style={styles.description}>
        {task.description || 'No description'}
      </Text>

      {/* 7. Button */}
      {task.status === 'completed' ? (
        <Text style={styles.completedText}>
          Well done! This task is completed.
        </Text>
      ) : (
        <View style={styles.buttonWrapper}>
          <Button title="Mark as Completed" onPress={handleComplete} />
        </View>
      )}
    </ScrollView>
  )
}

export default TaskItemScreen

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
  },
  room: {
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
    marginBottom: theme.spacing.xs,
  },
  title: {
    fontSize: theme.fontSizes.h1 * 1.5,
    fontWeight: theme.fontWeight[700],
  },
  imageWrapper: {
    position: 'relative',
    marginBottom: theme.spacing.md,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: theme.borderRadius.md,
  },
  pointsBadge: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    zIndex: 1,
  },
  pointsText: {
    color: '#fff',
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeight[700],
  },
  assignedRow: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
    marginTop: theme.spacing.md,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: theme.spacing.sm,
  },
  assignedName: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text,
    fontWeight: theme.fontWeight[500],
  },
  pillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    paddingTop: theme.spacing.md,
    borderBottomColor: theme.colors.mutedText,
    borderBottomWidth: 0.5,
    borderTopColor: theme.colors.mutedText,
    borderTopWidth: 0.5,
  },

  // SHARED text style
  pillText: {
    fontSize: theme.fontSizes.xs,
    fontWeight: theme.fontWeight[500],
    textTransform: 'uppercase',
    color: '#fff',
  },

  // STATUS pill (left)
  statusPill: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
  },

  // DUE pill (right)
  duePill: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: '#eeeeee',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },

  // Dynamic status colours
  pillPrimary: {
    backgroundColor: theme.colors.primary,
  },
  pillSuccess: {
    backgroundColor: theme.colors.success,
  },
  pillDanger: {
    backgroundColor: theme.colors.danger,
  },
  description: {
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },
  buttonWrapper: {
    marginTop: theme.spacing.md,
  },
  completedText: {
    fontSize: theme.fontSizes.sm,
    fontWeight: theme.fontWeight[500],
    color: theme.colors.success,
    textAlign: 'center',
    marginTop: theme.spacing.md,
  },
})
