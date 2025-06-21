// src/types/task.ts

export interface Task {
  id: string
  title: string
  description?: string
  due_date: string
  completed_at?: string | null
  status: 'open' | 'late' | 'completed'
  assigned_to: string
  room_id: string
  photo_url?: string | null
  points: number
}
