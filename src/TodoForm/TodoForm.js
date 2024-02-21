import React from 'react';
import { TodoContext } from '../TodosContext/TodosContext';
import './TodoForm.css';

function TodoForm(params) {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoValue.trim.length !== 0) {
            addTodo(newTodoValue);            
        }
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit= { onSubmit }>
            <label>Escribe un nuevo TODO</label>
            <textarea 
                placeholder="Tarea..."
                value={ newTodoValue }
                onChange={ onChange }
            />
            <div className="todoForm-buttonContainer">
                <button
                    type='button'
                    className="todoForm-button todoForm-button--cancel"
                    onClick = { onCancel }>
                        Cancelar
                </button>
                <button 
                    type='button'
                    className="todoForm-button todoForm-button--add"
                    onClick = { onSubmit }>
                        Agregar
                </button>
            </div>

        </form>
    )
}

export { TodoForm } 