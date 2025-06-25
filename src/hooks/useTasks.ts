import { useEffect, useState } from 'react'

import { supabase } from '@services/supabaseClient'
import { Task, TaskView } from '@types/task'

const HOUSEMATE_ID = '00000000-0000-0000-0000-000000000012' // Louie's UUID

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true)
      const { data, error } = await supabase.from('tasks').select(
        `
          *,
          housemates:assigned_to (display_name, avatar_url),
          rooms:room_id (name)
        `
      )

      if (error) {
        console.error('Supabase task fetch error:', error.message)
        setTasks([])
        setLoading(false)
        return
      }

      setTasks(data || [])
      setLoading(false)
    }

    fetchTasks()
  }, [])

  function getFilteredTasks(view: TaskView): Task[] {
    switch (view) {
      case 'my':
        return tasks.filter((task) => task.assigned_to === HOUSEMATE_ID)
      case 'open':
        return tasks.filter((task) => task.status === 'open')
      case 'completed':
        return tasks.filter((task) => task.status === 'completed')
      case 'late':
        return tasks.filter((task) => task.status === 'late')
      default:
        return tasks
    }
  }

  return { tasks, getFilteredTasks, loading }
}
