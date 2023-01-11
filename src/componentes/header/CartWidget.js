import carrito from "../../img/carrito.svg";

const CartWidget = () => {
    return(
       <div className="containerCarrito">
         <img src={carrito} alt="carrito"/>
        <span className="cantidadProductos">
            2
        </span>
       </div>
    )
}

export default CartWidget;