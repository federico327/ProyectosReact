import React,{useState} from 'react'

const ItemCount = ({stock, initial, onAdd }) => {
  const [count, setCounter, ] = useState(initial);
 
  const increase = () => {
    if (count < stock) { 
        setCounter(count => count + 1);
    }
  };
 
  const decrease = () => {
    if (count > 1) {
      setCounter(count => count - 1);
    }
  };
 

  const agregar = () => {
    onAdd(count)
  };

 
  return (
    <div className="counter">

      <span className="counter__output">
        {count}
      </span>
      <div className="btn__container">
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="control__btn" onClick={increase}>+</button>
        <button className="agregar" onClick={agregar}>Comprar</button>
      </div>
    </div>
  );
}

export default ItemCount