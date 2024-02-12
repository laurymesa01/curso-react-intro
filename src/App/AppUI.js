import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoader } from '../TodosLoader/TodosLoader';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodosContext/TodosContext';
import React from 'react';



function AppUI() {

  const {loading, error, searchedTodos, completeTodo, deleteTodo} = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      
          <TodoList>
            { loading && <TodosLoader/> }
            { error && <TodosError/> }
            { ( !loading && searchedTodos.length === 0 ) && <p>Crea tu primer todo</p> }
  
            { !loading && searchedTodos.map((todo) => (
              <TodoItem
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                key={todo.key}
                text={todo.text}
                completed={todo.completed}
              />
            ))}
          </TodoList>

      <CreateTodoButton />
    </>
  );
}

export {AppUI};
