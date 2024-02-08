import React from "react";
import { TodoIcon } from "./TodoIcon";

function CompleteIcon({completed, onComplete}) {
    return (
        completed ?
        <TodoIcon type="active"/>

        :

        <TodoIcon type="check"  onClick = { onComplete }/>

    )
}

export { CompleteIcon };