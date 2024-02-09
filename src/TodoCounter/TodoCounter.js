import './TodoCounter.css';

function TodoCounter({ total, completed, loading }) {
    return (
        total === completed ?
        <>
            <h1 className="title">
                FELICIDADES!! Completaste todas las tareas
            </h1>
            {/* <img src='./assets/congratulations-congrats'/> */}
        </>

        :
        loading ?

        <h1 className="title">
            Estamos cargando...
        </h1>

        :

        <h1 className="title">
            Haz completado <span>{ completed }</span> de <span>{ total }</span> TODOS
        </h1>
    );
}

export { TodoCounter };