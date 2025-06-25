// src/utils/sortTasks.ts

import type { Task } from '@types/task'

export function filterByStatus(
  tasks: Task[] = [],
  status: 'open' | 'late' | 'completed'
): Task[] {
  return tasks.filter((task) => task.status === status)
}

export function filterByAssignee(tasks: Task[] = [], userId: string): Task[] {
  return tasks.filter((task) => task.assigned_to === userId)
}

export function filterByRoom(tasks: Task[] = [], roomId: string): Task[] {
  return tasks.filter((task) => task.room_id === roomId)
}
