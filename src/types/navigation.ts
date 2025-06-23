// src/types/navigation.ts

import { Task } from '@types/task'

export type RootStackParamList = {
  TaskListScreen: undefined
  TaskItemScreen: { task: Task }
  CongratsScreen: { taskTitle: string; points: number }
}
