import {useContext} from 'react'
import { CartContext } from './CartContext';

const CartProductos = ({item}) => {
    const {DelProducto} = useContext (CartContext)
    const {nombre, id, precio} = item;
    return (
        <div>
            <h1>
                {nombre}
            </h1>
            <h4> {nombre}, {precio} </h4>
            <button onClick={() => DelProducto(id)}>Borrar item</button>
        </div>
    );
};

export default CartProductos