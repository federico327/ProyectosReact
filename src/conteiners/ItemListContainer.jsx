import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList/ItemList";
import { getFetch } from "../helpers/getFetch";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) 
    const { categoriaId } = useParams()



    console.log(categoriaId)
   
    useEffect(()=>{
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