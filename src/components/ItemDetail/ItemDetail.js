import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {
    const onAdd = (cant) => {
        console.log(cant)
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
                        <ItemCount  initial={1} stock={10} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail