import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodosContext/TodosContext';

function TodoCounter() {

    const {totalTodos, completedTodos} = React.useContext(TodoContext);

    return (
        totalTodos === completedTodos && totalTodos !== 0?
        <>
            <h1 className="title">
                FELICIDADES!! Completaste todas las tareas
            </h1>
            {/* <img src='./assets/congratulations-congrats'/> */}
        </>

        :

        <h1 className="title">
            Haz completado <span>{ completedTodos }</span> de <span>{ totalTodos }</span> TODOS
        </h1>

    );
}

export { TodoCounter };