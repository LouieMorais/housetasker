export type TaskView = 'open' | 'completed'
export interface Task {
  id: string
  title: string
  status: 'open' | 'completed'
  assignedTo?: string
  points?: number
  description?: string
  image?: string
}
