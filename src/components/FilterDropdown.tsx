// src/components/FilterDropdown.tsx

import React from 'react'

import { TaskView } from '@types/task'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface FilterDropdownProps {
  selectedView: TaskView
  onSelect: (view: TaskView) => void
}

const options: TaskView[] = ['my', 'open', 'completed', 'late']

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  selectedView,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            selectedView === option && styles.selectedOption,
          ]}
          onPress={() => onSelect(option)}
        >
          <Text
            style={[
              styles.optionText,
              selectedView === option && styles.selectedText,
            ]}
          >
            {option.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default FilterDropdown

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  option: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
  selectedOption: {
    backgroundColor: '#cce5ff',
  },
  optionText: {
    fontSize: 14,
  },
  selectedText: {
    fontWeight: 'bold',
  },
})
