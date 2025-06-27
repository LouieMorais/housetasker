// src/types/navigation.ts

import { Task } from '@types/task'

export type RootStackParamList = {
  SplashScreen: undefined
  TaskListScreen: undefined
  TaskItemScreen: { task: Task }
  CongratsScreen: { taskTitle: string}
}
