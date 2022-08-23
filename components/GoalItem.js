import { Pressable, StyleSheet, Text, View } from "react-native"

function GoalItem({ id, text, onDeleteGoal }) {
  return (
    <View style={ styles.goalItem }>
      <Pressable android_ripple={ { color: '#dddddd' } } onPress={ onDeleteGoal.bind(this, id) }>
        <Text style={ styles.goalText }>{ text }</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 4,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white'
  }
})
