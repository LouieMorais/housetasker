// src/hooks/useTasks.ts

import { useState, useEffect, useCallback } from 'react'

import {
  getAllTasks,
  updateTaskStatus,
  getHousematePoints,
} from '@/services/taskService'
import type { Task } from '@/types/task'
import { filterByAssignee, filterByStatus } from '@/utils/sortTasks'

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [housematePoints, setHousematePoints] = useState<number | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const loadTasks = async () => {
    setLoading(true)
    setError(null)
    try {
      const fetchedTasks = await getAllTasks()
      const points = await getHousematePoints()

      setTasks(fetchedTasks ?? []) // Ensure non-null array
      setHousematePoints(points?.[0]?.total_points ?? null) // Extract number or default to null
    } catch (err: any) {
      setError(err.message || 'Unexpected error')
    } finally {
      setLoading(false)
    }
  }

  const markTaskAsCompleted = useCallback(
    async (taskId: string) => {
      setLoading(true)
      setError(null)

      try {
        await updateTaskStatus(taskId, 'completed')
        await loadTasks()
      } catch (err) {
        setError('Failed to update task')
      } finally {
        setLoading(false)
      }
    },
    [loadTasks]
  )

  const getFilteredTasks = useCallback(
    (filterType: string, currentUserId: string): Task[] => {
      switch (filterType) {
        case 'my':
          return filterByAssignee(tasks, currentUserId)
        case 'late':
          return filterByStatus(tasks, 'late')
        case 'completed':
          return filterByStatus(tasks, 'completed')
        case 'open':
          return filterByStatus(tasks, 'open')
        default:
          return tasks
      }
    },
    [tasks]
  )

  useEffect(() => {
    loadTasks()
  }, [loadTasks])

  return {
    tasks,
    housematePoints,
    loading,
    error,
    loadTasks,
    markTaskAsCompleted,
    getFilteredTasks,
  }
}
