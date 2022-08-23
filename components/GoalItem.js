import { StyleSheet, Text } from "react-native"

function GoalItem({ text }) {
  return <Text style={ styles.goalItem }>{ text }</Text>
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  }
})
