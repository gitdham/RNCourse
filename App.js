import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.dummyText }>Another text</Text>
      <Text style={ styles.dummyText }>Idham Nur Adzani</Text>
      <Button title='Tap me!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 8,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 8,
  }
});
