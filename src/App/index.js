import React from 'react';

import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
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

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setsearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase();
    const todoSearch = searchValue.toLocaleLowerCase();
    return todoText.includes(todoSearch)
  });


  const completeTodo = (text) => {
    const newTodos = [... todos];
    const todoIndex = newTodos.findIndex( todo => todo.text == text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text != text);
    saveTodos(newTodos);
  }

  return (
    <>
      <TodoCounter total={ totalTodos } completed={ completedTodos }/>
      <TodoSearch 
        searchValue = { searchValue }
        setsearchValue = { setsearchValue }
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem  
            onComplete = { () => completeTodo(todo.text)}
            onDelete = { () => deleteTodo(todo.text)}
            key = {todo.key}
            text = {todo.text}
            completed = {todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
