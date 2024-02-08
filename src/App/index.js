import React from 'react';

import { AppUI } from './AppUI'
import { useLocalStorage } from './useLocalStorage';


import './App.css';

const defaultTodos = [
  {
    text: 'Estudiar React',
    completed: true
  },
  {
    text: 'Estudiar Ingles',
    completed: false
  },
  {
    text: 'Comenzar desarrollo de TaxiPinar',
    completed: false
  },
  {
    text: 'Usar estados derivados',
    completed: true
  },
]


function App() {

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading, 
    error
  } = useLocalStorage('TODOS_V1', defaultTodos);

  const [searchValue, setsearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const todoSearch = searchValue.toLocaleLowerCase();
    return todoText.includes(todoSearch)
  });


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex( todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos = {completedTodos} 
      totalTodos = {totalTodos}
      searchValue = {searchValue} 
      setsearchValue = {setsearchValue} 
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  )
}

export default App;

