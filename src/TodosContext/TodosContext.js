import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);
    
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
        <TodoContext.Provider value={{
            completedTodos, 
            totalTodos,
            searchValue, 
            setsearchValue, 
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error 
        }}>
            { children }
        </TodoContext.Provider>
    )
    
}


export { TodoContext, TodoProvider };