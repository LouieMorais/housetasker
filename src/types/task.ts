export type TaskView = 'open' | 'completed' | 'late' | 'my'

export interface Task {
  id: string
  title: string
  status: 'open' | 'completed' | 'late'
  assignedTo?: string
  points?: number
  description?: string
  image?: string
}
