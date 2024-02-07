import React from "react";
import { TodoIcon } from "./TodoIcon";
import './TodoIcon.css'


function DeleteIcon({ onDelete }) {
    return (
        <TodoIcon   type="delete"
                    onClick={ onDelete }
        />
    )
}

export { DeleteIcon };