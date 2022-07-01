import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import { getFetch } from "../helpers/getFetch";
/* import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore' */

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 
    const { categoriaId } = useParams()



    console.log(categoriaId)

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

/*     useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(data=> setProductos(data.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }) */

    /* filtrar Elementos */

    /* useEffect(()=>{
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryCollectionFilter = query( queryCollection, where('precio', '>', 1000), limit(2), orderBy('precio', 'desc') )
        getDocs(queryCollection)
        .then(data=> setProductos(data.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }) */



    
   
/*     useEffect(()=>{
        if (categoriaId) {
            getFetch()
            .then((resp)=> {
                    setProductos(resp.filter(producto => producto.categoria === categoriaId ))
                    setLoading(false)
            })
            .catch(err => console.log(err))           
        } else {
            getFetch()
            .then( (resp)=> setProductos(resp) )
            .catch(err => console.log(err)) 
            .finally(()=> setLoading(false))           
        }
        
    }, [categoriaId])
 */
   
   
    return (
        <div>
            { loading ? 
                <h1>Cargando...</h1>            
            :   
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                      <ItemList productos={productos} />              
                </div>             
            }
        </div>
    )
}

export default ItemListContainer