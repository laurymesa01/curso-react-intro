import React from "react";
import './TodoSearch.css';
import { TodoContext } from '../TodosContext/TodosContext';

function TodoSearch() {

    const { searchValue, setsearchValue } = React.useContext(TodoContext);

    return (
        <div className="search-container">
            <input  placeholder="Cortar cebolla"
                    value= { searchValue } 
                    onChange = { (event) => {
                        setsearchValue(event.target.value);
                    }}
            />
        </div> 
    );
}

export { TodoSearch };
