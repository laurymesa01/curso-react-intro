import { ReactComponent as CircleSvg } from './assets/circle.svg';
import { ReactComponent as CheckSvg } from './assets/circle-check.svg';
import { ReactComponent as DeleteSvg } from './assets/x.svg';


const iconTypes = {
    "check" : <CircleSvg className="icon-svg"/>,
    "active": <CheckSvg className="icon-svg"/>,
    "delete": <DeleteSvg className="icon-svg"/>
}


function TodoIcon({ type, onClick }) {
    return (
        <span   className={`icon icon-${type}`}
                onClick = { onClick }>
            {iconTypes[type]}
        </span>
    )
}

export { TodoIcon };