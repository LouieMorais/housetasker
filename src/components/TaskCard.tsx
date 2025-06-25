// src/components/TaskCard.tsx

import React from 'react'

import theme from '@theme'
import dayjs from 'dayjs'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import type { Task } from '@types/task'

interface TaskCardProps {
  task: Task
  onPress: () => void
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.info}>
        <Text style={styles.room}>{task.rooms?.name || 'N/A'}</Text>
        <Text style={styles.title}>{task.title}</Text>
        <View style={styles.imageWrapper}>
          {task.photo_url && (
            <Image source={{ uri: task.photo_url }} style={styles.image} />
          )}
          <View style={styles.pointsBadge}>
            <Text style={styles.pointsText}>{task.points} pts</Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={3}>
          {task.description}
        </Text>
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
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: 'blue',
  },
  info: {
    justifyContent: 'center',
  },
  room: {
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.md,
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: theme.fontSizes.sm,
    marginBottom: theme.spacing.md,
  },
  imageWrapper: {
    position: 'relative',
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

  image: {
    width: '100%',
    height: 150,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
  },
  assignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
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
})

export default TaskCard
