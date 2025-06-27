import React from 'react'

import { useNavigation, useRoute } from '@react-navigation/native'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '@types/navigation'
import { View, Text, StyleSheet, Button } from 'react-native'

type Route = RouteProp<RootStackParamList, 'CongratsScreen'>

const CongratsScreen = () => {
  const navigation = useNavigation()
  const {
    params: { taskTitle, points },
  } = useRoute<Route>()

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Task Completed!</Text>
      <Text style={styles.body}>You finished "{taskTitle}".</Text>
      <Button
        title="Back to Task List"
        onPress={() =>
          navigation.navigate('TaskListScreen', { initialView: 'completed' })
        }
      />
    </View>
  )
}

export default CongratsScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    gap: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
  },
})
