// src/utils/sortTasks.ts

import type { Task } from '@types/task'
import type { TaskView } from '@types/task'


export function sortTasks(view: TaskView, tasks: Task[]): Task[] {
  switch (view) {
    case 'open':
      return filterByStatus(tasks, 'open')
   case 'completed':
  return filterByStatus(tasks, 'completed').sort(
    (a, b) =>
      new Date(b.completed_at || '').getTime() -
      new Date(a.completed_at || '').getTime()
  )

    case 'late':
      return filterByStatus(tasks, 'late')
    case 'my':
      return filterByAssignee(tasks, '00000000-0000-0000-0000-000000000012')
    default:
      return tasks
  }
}


export function filterByStatus(
  tasks: Task[] = [],
  status: 'open' | 'completed'
): Task[] {
  return tasks.filter((task) => task.status === status)
}

export function filterByAssignee(tasks: Task[] = [], userId: string): Task[] {
  return tasks.filter((task) => task.assigned_to === userId)
}

export function filterByRoom(tasks: Task[] = [], roomId: string): Task[] {
  return tasks.filter((task) => task.room_id === roomId)
}
