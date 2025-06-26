// src/components/FilterDropdown.tsx

import React from 'react'

import theme from '@theme'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import type { TaskView } from '@types/task'

interface FilterDropdownProps {
  selectedView: TaskView
  onSelect: (view: TaskView) => void
}

const views: { key: TaskView; label: string }[] = [
  { key: 'my', label: 'My Tasks' }, // FIXED label
  { key: 'open', label: 'Open' },
  { key: 'completed', label: 'Completed' },
  { key: 'late', label: 'Late' },
]

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  selectedView,
  onSelect,
}) => {
  return (
    <View style={styles.row}>
      {views.map(({ key, label }) => (
        <TouchableOpacity
          key={key}
          onPress={() => onSelect(key)}
          style={[styles.button, selectedView === key && styles.buttonSelected]}
        >
          <Text
            style={[
              styles.buttonText,
              selectedView === key && styles.buttonTextSelected,
            ]}
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default FilterDropdown

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
  },
  button: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginRight: theme.spacing.sm,
  },
  buttonSelected: {
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: theme.fontSizes.sm,
    color: theme.colors.text,
  },
  buttonTextSelected: {
    color: '#fff',
    fontWeight: theme.fontWeight[600],
  },
})
