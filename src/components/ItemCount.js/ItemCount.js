import React,{useState} from 'react'

const ItemCount = (ItemCount) => {

    const [contador, setContador] = useState(0);

    return <div>
        <p>Valor del contador: {contador}</p>
        <button onClick={() => {setContador( contador - 1)}}>menos</button>
        <button onClick={() => {setContador( contador + 1)}}>mas</button>
        <button >Agregar Al Carrito</button>
    </div>
}


export default ItemCount