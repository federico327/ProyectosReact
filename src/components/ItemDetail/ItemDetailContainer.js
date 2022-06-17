import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"

const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getFetchOne(id)
            .then((resp) => setProducto(resp))
            .catch(err => console.log(err))            
    }, [])
    
    return (
        <div className="border border-1 border-danger">
            <ItemDetail producto={producto} />
        </div>
    )

}
export default ItemDetailConatainer