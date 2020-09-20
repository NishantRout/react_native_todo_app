import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play COD', key: '3' }
  ]);

  const [input, setInput] = useState('');

  const pressHandler = (key) => {
    setTodos((prevTodos) => (
      prevTodos.filter(todo => todo.key != key)
    ))
  }

  const submitHandler = (text) => {
    if (text.length > 2) {
      setTodos((prevTodos) => (
        [
          { text: text, key: Math.random().toString() },
          ...prevTodos,
        ]
      ));
      setInput('');
    } else {
      Alert.alert('OOPS!', 'Todos must be over 2 chars long', [
        { text: 'Okay', onPress: () => console.log('alert closed') }
      ])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo input={input} setInput={setInput} submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
