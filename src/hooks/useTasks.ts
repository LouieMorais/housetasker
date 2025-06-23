// src/hooks/useTasks.ts

import { useState, useEffect } from 'react'

import { taskService } from '@services/taskService'
import { Task, TaskView } from '@types/task'

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTasks = async () => {
      const data = await taskService.fetchAll()
      setTasks(data)
      setLoading(false)
    }
    loadTasks()
  }, [])

  const getFilteredTasks = (view: TaskView): Task[] => {
    switch (view) {
      case 'open':
        return tasks.filter((task) => task.status === 'open')
      case 'completed':
        return tasks.filter((task) => task.status === 'completed')
      case 'late':
        return tasks.filter((task) => task.status === 'late')
      case 'my':
        return tasks.filter((task) => task.assignedTo === 'me') // placeholder
      default:
        return tasks
    }
  }

  const refresh = async () => {
    setLoading(true)
    const data = await taskService.fetchAll()
    setTasks(data)
    setLoading(false)
  }

  return { tasks, loading, getFilteredTasks, refresh }
}
