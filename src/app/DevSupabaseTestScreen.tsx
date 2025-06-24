// src/app/DevSupabaseTestScreen.tsx

import React, { useEffect, useState } from 'react'

import { supabase } from '@services/supabaseClient'
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
} from 'react-native'

const DevSupabaseTestScreen: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any[]>([])

  const ids = [
    '00000000-0000-0000-0000-000000000011',
    '00000000-0000-0000-0000-000000000012',
    '00000000-0000-0000-0000-000000000013',
    '00000000-0000-0000-0000-000000000014',
  ]

  useEffect(() => {
    const fetchCardDetails = async () => {
      setLoading(true)

      const { data: tasks, error } = await supabase
        .from('tasks')
        .select(
          `
          *,
          housemates:assigned_to (display_name),
          rooms:room_id (name)
        `
        )
        .in('assigned_to', ids)
        .order('points', { ascending: true })

      if (error) {
        setError(`Error: ${error.message}`)
        setLoading(false)
        return
      }

      setResult(tasks || [])
      setLoading(false)
    }

    fetchCardDetails()
  }, [])

  if (loading) return <ActivityIndicator style={styles.centered} />
  if (error) return <Text style={styles.error}>{error}</Text>

  return (
    <ScrollView style={styles.container}>
      {result.map((task, index) => (
        <View key={task.id || index} style={styles.card}>
          <Text style={styles.room}>{task.rooms?.name || 'N/A'}</Text>
          <Text style={styles.title}>{task.title}</Text>
          <Text>{task.description}</Text>
          <Text>Assigned to: {task.housemates?.display_name || 'Unknown'}</Text>
          <Text>Points: {task.points}</Text>
          <Text>Due on: {task.due_date}</Text>
          <Text>Status: {task.status}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  room: {
    fontWeight: '300',
    fontSize: 16,
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
})

export default DevSupabaseTestScreen
