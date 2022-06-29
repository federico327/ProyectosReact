import { React, useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

function ItemDetail ({producto})  {

    const [estado, setEstado] = useState()
    const {AddToCart} = useContext(CartContext);

    const onAdd = (cant) => {
        AddToCart(producto, cant)
        
        
        


        console.log(cant)
        setEstado (cant)

    } 
    




    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <img src={producto.foto} alt="" className="w-50 m-5" />
            </div>
            <div className="col-md-6 mt-5"> 
                <div className="row mt-5">
                    <h2>Nombre: {producto.nombre}</h2>
                    <h3>Descripción: {producto.desc} </h3>
                    <h4>Precio: {producto.precio}</h4>
                </div>               
                <div className="row">
                    <div className="col">
                        {
                            estado ?

                            <Link to="/Cart">
                            <button className="agregar">Ir al Carrito</button>
                            </Link>

                            :
                            <ItemCount  initial={1} stock={10} onAdd={onAdd} />
                        }                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail