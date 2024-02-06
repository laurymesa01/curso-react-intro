import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="todo-item">
            <span className={ `icon icon-check ${props.completed && "icon-check--active"}` }></span>
            <p className={`todo-item-p ${props.completed && "todo-item-p--complete"}`}>{ props.text }</p>
            <span className={`icon icon-delete`}></span>
        </li>
    );
}

export { TodoItem };
