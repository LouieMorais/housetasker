import React from 'react'

import { SafeAreaView, StyleSheet } from 'react-native'

import TaskListScreen from './src/app/TaskListScreen'

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TaskListScreen />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
})

export default App
