import { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

function GoalInput({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={ visible } animationType='slide'>
      <View style={ styles.inputContainer }>
        <Image source={ require('../assets/images/goal.png') } style={ styles.image } />
        <TextInput
          style={ styles.textInput }
          placeholder='Your Goals'
          onChangeText={ goalInputHandler }
          value={ enteredGoalText }
        />
        <View style={ styles.buttonContainer }>
          <View style={ styles.button }>
            <Button title='Cancel' onPress={ onCancel } color='#f31282' />
          </View>
          <View style={ styles.button }>
            <Button title='Add Goal' onPress={ addGoalHandler } color='#5e0acc' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    marginBottom: 16,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
    borderRadius: 6,
  }
})

export default GoalInput
