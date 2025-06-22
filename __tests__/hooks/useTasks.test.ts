// __tests__/hooks/useTasks.test.ts

import { renderHook, act } from '@testing-library/react-hooks'
import { waitFor } from '@testing-library/react-native'

import { useTasks } from '@/hooks/useTasks'
import * as taskService from '@/services/taskService'
import type { Housemate } from '@/types/housemate'
import type { Task } from '@/types/task'

jest.mock('@/services/taskService')

const mockedService = taskService as jest.Mocked<typeof taskService>

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Clean kitchen',
    status: 'open',
    assigned_to: 'user1',
    room_id: 'kitchen',
    points: 10,
    due_date: '2025-06-21',
  },
  {
    id: '2',
    title: 'Wash bathroom',
    status: 'late',
    assigned_to: 'user1',
    room_id: 'bathroom',
    points: 15,
    due_date: '2025-06-20',
  },
  {
    id: '3',
    title: 'Vacuum living room',
    status: 'completed',
    assigned_to: 'user2',
    room_id: 'livingroom',
    points: 20,
    due_date: '2025-06-19',
  },
]

const mockHousemates: Housemate[] = [
  {
    id: 'h1',
    name: 'John',
    total_points: 100,
  },
]

describe('useTasks', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('loads tasks and housemate points on mount', async () => {
    mockedService.getAllTasks.mockResolvedValue(mockTasks)
    mockedService.getHousematePoints.mockResolvedValue(mockHousemates)

    const { result } = renderHook(() => useTasks())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.tasks).toEqual(mockTasks)
    expect(result.current.housematePoints).toBe(100)
    expect(result.current.error).toBe(null)
  })

  it('updates task status and reloads tasks', async () => {
    mockedService.getAllTasks.mockResolvedValue(mockTasks)
    mockedService.updateTaskStatus.mockResolvedValue(true)
    mockedService.getHousematePoints.mockResolvedValue(mockHousemates)

    const { result } = renderHook(() => useTasks())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    await act(async () => {
      await result.current.markTaskAsCompleted('1')
    })

    expect(mockedService.updateTaskStatus).toHaveBeenCalledWith(
      '1',
      'completed'
    )
    expect(result.current.tasks).toEqual(mockTasks)
  })

  it('filters tasks correctly by view', async () => {
    mockedService.getAllTasks.mockResolvedValue(mockTasks)
    mockedService.getHousematePoints.mockResolvedValue(mockHousemates)

    const { result } = renderHook(() => useTasks())

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    const myTasks = result.current.getFilteredTasks('my', 'user1')
    const lateTasks = result.current.getFilteredTasks('late', 'user1')

    expect(myTasks.every((task) => task.assigned_to === 'user1')).toBe(true)
    expect(lateTasks.every((task) => task.status === 'late')).toBe(true)
  })
})
