// src/hooks/useTasks.ts

import { useEffect, useState } from 'react'

import { supabase } from '@services/supabaseClient'
import { Task, TaskView } from '@types/task'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      const { data, error } = await supabase.from('tasks').select('*')

      if (error) {
        setError(error.message)
        setLoading(false)
        return
      }

      setTasks(data || [])
      setLoading(false)
    }

    fetchTasks()
  }, [])

  const getFilteredTasks = (view: TaskView) => {
    switch (view) {
      case 'open':
        return tasks.filter((task) => task.status === 'open')
      case 'completed':
        return tasks.filter((task) => task.status === 'completed')
      case 'late':
        return tasks.filter((task) => task.status === 'late')
      case 'my':
        // Replace with dynamic logic later
        return tasks.filter(
          (task) => task.assigned_to === '00000000-0000-0000-0000-000000000012' // Louie (hardcoded)
        )
      default:
        return tasks
    }
  }

  return {
    loading,
    error,
    tasks,
    getFilteredTasks,
  }
}
