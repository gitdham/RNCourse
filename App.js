import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ])
  }

  return (
    <View style={ styles.appContainer }>
      <View style={ styles.inputContainer }>
        <TextInput style={ styles.textInput } placeholder='Your Goals' onChangeText={ goalInputHandler } />
        <Button title='Add Goal' onPress={ addGoalHandler } />
      </View>
      <View style={ styles.goalsContainer }>
        <FlatList data={ courseGoals } renderItem={ (itemData) => {
          return (
            <Text style={ styles.goalItem }>{ itemData.item.text }</Text>
          )
        } } keyExtractor={ (item, index) => {
          return item.id
        } } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  }
});
