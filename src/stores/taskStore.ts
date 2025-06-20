// src/stores/taskStore.ts
import { create } from 'zustand'

export type Task = {
  id: number
  description: string
  status: 'Open' | 'Completed'
}

type TaskState = {
  tasks: Task[]
  isLoading: boolean
  markTaskAsCompleted: (taskId: number) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    { id: 1, description: 'Take out the bin', status: 'Open' },
    { id: 2, description: 'Do the washing up', status: 'Open' },
  ],
  isLoading: false,

  markTaskAsCompleted: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task
      ),
    })),
}))
