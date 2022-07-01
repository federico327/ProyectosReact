import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"
import { collection, doc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

const ItemDetailConatainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()




    /* filtro de productos orden y limite */

    useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = query( queryCollection, where('precio', '>', 1000), limit(2), orderBy('precio', 'desc') )
        getDocs(queryCollectionFilter)
        .then(data=> setProductos(data.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    })

    console.log(productos)













/* para todos los productos */

   /*  useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(data=> setProductos(data.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }) */

       /* Para 1 solo producto */

/*     useEffect(()=>{

        const db =  getFirestore()
        const queryItem = doc(db, 'productos', '8IIgh9LoziHHMjEhMzmb')
        getDoc(queryItem)
        .then(resp=> setProductos( { id: resp.id, ...resp.data() } ))
        .catch(err => console.log(err))


    }, [bool])

    console.log(producto) */


    /* Para Todos Los productos */












    
    return (
        <div className="border border-3 border-dark">
            <ItemDetail producto={producto} />
        </div>
    )

}
export default ItemDetailConatainer