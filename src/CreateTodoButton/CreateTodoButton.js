import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodosContext/TodosContext';


function CreateTodoButton() {

    const { openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <button className="createTodo-container" onClick= { () => {
            setOpenModal(!openModal)
            } }>
            +
        </button>
    );
}

export { CreateTodoButton };