// src/stores/taskStore.ts
import { create } from 'zustand'

type TaskStatus = 'Open' | 'Completed' | 'Late'

export interface Task {
  id: number
  description: string
  assigned_to: number
  room_id: number
  status: TaskStatus
  due_date: string
  points: number
}

export interface HousematePoints {
  housemate_id: number
  total_points: number
}

interface TaskStoreState {
  tasks: Task[]
  leaderboard: HousematePoints[]
  isLoading: boolean
  error: string | null

  setTasks: (tasks: Task[]) => void
  setLeaderboard: (points: HousematePoints[]) => void
  setError: (msg: string) => void
  setLoading: (state: boolean) => void

  markTaskAsCompleted: (taskId: number) => void
}

export const useTaskStore = create<TaskStoreState>((set, get) => ({
  tasks: [],
  leaderboard: [],
  isLoading: false,
  error: null,

  setTasks: (tasks) => set({ tasks }),
  setLeaderboard: (leaderboard) => set({ leaderboard }),
  setError: (error) => set({ error }),
  setLoading: (isLoading) => set({ isLoading }),

  markTaskAsCompleted: (taskId) => {
    const updatedTasks = get().tasks.map((task) =>
      task.id === taskId ? { ...task, status: 'Completed' } : task
    )
    set({ tasks: updatedTasks })
  },
}))
