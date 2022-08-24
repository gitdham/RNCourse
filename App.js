import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const endAddGoalHandler = () => {
    setModalIsVisible(false)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ])
    endAddGoalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={ styles.appContainer }>
        <View style={ styles.goalsContainer }>
          <FlatList
            data={ courseGoals }
            renderItem={ (itemData) => <GoalItem text={ itemData.item.text } id={ itemData.item.id } onDeleteGoal={ deleteGoalHandler } /> }
            keyExtractor={ (item, index) => item.id }
          />
        </View>
        <Button title='Add Goal' color='#5e0acc' onPress={ startAddGoalHandler } />
        <GoalInput onAddGoal={ addGoalHandler } visible={ modalIsVisible } onCancel={ endAddGoalHandler } />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
  },
  goalsContainer: {
    flex: 5,
    marginBottom: 16,
  },
});
