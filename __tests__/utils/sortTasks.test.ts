import type { Task } from '@/types/task'
import {
  filterByStatus,
  filterByAssignee,
  filterByRoom,
} from '@/utils/sortTasks'

const tasks: Task[] = [
  {
    id: '1',
    status: 'open',
    assigned_to: 'user1',
    room_id: 'kitchen',
    title: '',
    due_date: '2025-06-01',
    points: 0,
  },
  {
    id: '2',
    status: 'completed',
    assigned_to: 'user1',
    room_id: 'bathroom',
    title: '',
    due_date: '2025-06-02',
    points: 0,
  },
  {
    id: '3',
    status: 'late',
    assigned_to: 'user2',
    room_id: 'kitchen',
    title: '',
    due_date: '2025-06-03',
    points: 0,
  },
  {
    id: '4',
    status: 'open',
    assigned_to: 'user3',
    room_id: 'livingroom',
    title: '',
    due_date: '2025-06-04',
    points: 0,
  },
]

describe('Task Filters', () => {
  it('filters tasks by status', () => {
    const result = filterByStatus(tasks, 'open')
    expect(result).toHaveLength(2)
    expect(result.every((task) => task.status === 'open')).toBe(true)
  })

  it('filters tasks by assignee', () => {
    const result = filterByAssignee(tasks, 'user1')
    expect(result).toHaveLength(2)
    expect(result.every((task) => task.assigned_to === 'user1')).toBe(true)
  })

  it('filters tasks by room', () => {
    const result = filterByRoom(tasks, 'kitchen')
    expect(result).toHaveLength(2)
    expect(result.every((task) => task.room_id === 'kitchen')).toBe(true)
  })
})
