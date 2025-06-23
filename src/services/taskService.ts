// src/services/taskService.ts

import { supabase } from './supabaseClient'

import type { Task } from '../types/task'

export async function getAllTasks(): Promise<Task[] | null> {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) {
    console.error('Error fetching tasks:', error)
    return null
  }
  return data as Task[]
}

export async function updateTaskStatus(
  taskId: string,
  status: 'completed' | 'open' | 'late'
): Promise<boolean> {
  const { error } = await supabase
    .from('tasks')
    .update({
      status,
      completed_at: status === 'completed' ? new Date().toISOString() : null,
    })
    .eq('id', taskId)

  if (error) {
    console.error('Error updating task status:', error)
    return false
  }
  return true
}

export async function getHousematePoints(): Promise<any[] | null> {
  const { data, error } = await supabase.from('housemate_points').select('*')
  if (error) {
    console.error('Error fetching housemate points:', error)
    return null
  }
  return data
}
