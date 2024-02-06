import './CreateTodoButton.css';


function CreateTodoButton(props) {
    return (
        <button className="createTodo-container" onClick= { (event) => {
            console.log('Le diste click')
            console.log(event.target);
            } }>
            +
        </button>
    );
}

export { CreateTodoButton };