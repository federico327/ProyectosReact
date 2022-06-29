import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartProductos from  "./CartProductos"

const Cart = () => {
    const {cartList, EmptyCart, PrecioTotal} = useContext (CartContext)

  return (
    <>
   <div>
      {cartList.length < 1 ? (
        <p> Carrito vacio</p>
      ) : (
        cartList.map((i)=><CartProductos key={i.productos.id}  item={i.productos}/>)
      )} 
   </div>
   <button onClick={EmptyCart}> Borrar carrito</button>
   <p>El precio total es {PrecioTotal()} </p> 
   </>
 );
};
 
  export default Cart