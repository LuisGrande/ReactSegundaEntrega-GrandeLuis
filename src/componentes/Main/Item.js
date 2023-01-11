import React from "react";
import {Link} from "react-router-dom"

const Item = ({producto}) => {
    return(
        <div className="item">
            <img src={producto.image} width="200px" alt={producto.title}/>
            <article className="info">
                <h2 className="title">{producto.title}</h2>
                <h5>${producto.price}</h5>
        
            </article>
            <div className="buttom">
                <Link className="btn" to="/detalle">Detalle del Producto</Link>
                <button className="btn">Agregar al carrito</button>
            </div>

        </div>
    )
}

export default Item