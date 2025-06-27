import { supabase } from './supabaseClient'

import type { Task } from '@types/task'

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
  status: 'completed' | 'open'
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
