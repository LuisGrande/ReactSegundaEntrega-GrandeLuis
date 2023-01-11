import {Link} from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li><Link to="/home">{props.opcion1}</Link></li>
            <li><Link to="/productos">{props.opcion2}</Link></li>
        
            
        </ul>
    )
}


export default ItemListContainer