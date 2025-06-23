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

  useEffect(() => {
    const fetchTasks = async () => {
      const { data, error } = await supabase.from('tasks').select('*').limit(10)

      if (error) {
        setError(error.message)
      } else {
        setResult(data || [])
      }
      setLoading(false)
    }

    fetchTasks()
  }, [])

  if (loading) return <ActivityIndicator style={styles.centered} />
  if (error) return <Text style={styles.error}>Error: {error}</Text>

  return (
    <ScrollView style={styles.container}>
      {result.map((task, index) => (
        <View key={task.id || index} style={styles.card}>
          <Text style={styles.title}>{task.title}</Text>
          <Text>Status: {task.status}</Text>
          <Text>Points: {task.points}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    marginTop: 20,
    color: 'red',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#eee',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
})

export default DevSupabaseTestScreen
