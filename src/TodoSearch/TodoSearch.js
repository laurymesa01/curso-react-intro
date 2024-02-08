import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setsearchValue}) {

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
