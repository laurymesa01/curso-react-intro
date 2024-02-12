import React from 'react';
import { AppUI } from './AppUI'



import './App.css';
import { TodoProvider } from '../TodosContext/TodosContext';

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


  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App;

