import './TodoCounter.css';

function TodoCounter({ total, completed }) {
    return (
        total == completed ?
        <>
            <h1 className="title">
                FELICIDADES!! Completaste todas las tareas
            </h1>
            {/* <img src='./assets/congratulations-congrats'/> */}
        </>

        :

        <h1 className="title">
            Haz completado <span>{ completed }</span> de <span>{ total }</span> TODOS
        </h1>
    );
}

export { TodoCounter };