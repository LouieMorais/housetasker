import { useEffect, useState, useCallback } from 'react'

import { supabase } from '@services/supabaseClient'
import { Task } from '@types/task'
import { TaskView } from '@types/task'
import { sortTasks } from '@utils/sortTasks'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchTasks = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase.from('tasks').select(
        `
          *,
          housemates:assigned_to (display_name, avatar_url),
          rooms:room_id (name)
        `
      )
    if (!error && data) setTasks(data as Task[])
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchTasks()
  }, [fetchTasks])

  const getFilteredTasks = (view: TaskView): Task[] => {
    return sortTasks(view, tasks)
  }

  return {
    tasks,
    loading,
    getFilteredTasks,
    reloadTasks: fetchTasks,
  }
}
