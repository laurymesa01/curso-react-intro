import './TodoItem.css';
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";



function TodoItem(props) {

    return (
        <li className="todo-item">
            {/* <span   className={ `icon icon-check ${props.completed && "icon-check--active"}` } 
                    onClick = {props.onComplete}>

            </span> */}
            <CompleteIcon completed = { props.completed } onComplete = {props.onComplete}/>
            <p className={`todo-item-p ${props.completed && "todo-item-p--complete"}`}>{ props.text }</p>
            {/* <span   className={`icon icon-delete`} 
                    onClick = {props.onDelete}>
            </span> */}

            <DeleteIcon onDelete = {props.onDelete}/>

        </li>
    );
}

export { TodoItem };
