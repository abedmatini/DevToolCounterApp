import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState(5);

  const increaseCounter = () => {
    setCounter(counter + 1);
    console.log('Increase');

  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
    console.log('decrease');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React DevTools Example</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button style={styles.button} title="Increase" onPress={increaseCounter} />
      <View style={styles.spacing} />
      <Button style={styles.button} title="Decrease" onPress={decreaseCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    // flexDirection: 'row', // Align buttons in a row
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    padding: 200,
  },
  spacing: {
    height: 10, // Space between buttons (horizontal)
  },
});

export default App;
