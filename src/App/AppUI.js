import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoader } from '../TodosLoader/TodosLoader';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';





function AppUI({ 
  completedTodos, 
  totalTodos,
  searchValue, 
  setsearchValue, 
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error 
}) {

  return (
    <>
      <TodoCounter loading = {loading} total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue} />

      <TodoList>
        { loading && <TodosLoader/> }
        { error && <p>Hubo un error!!!</p> }
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
