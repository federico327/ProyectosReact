import React, { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'




const ItemListContainer =() => {
  const [productos, setProductos] =useState ([])
  const [loading, setLoading] = useState(true)

  useEffect (() =>{
    getFetch()
    .then((resp)=> {
      setProductos(resp)
    })
    .catch(err => console.log(err))
    .finally(()=> console.log())
  }, [])

  console.log(productos)

  return (
    <div>
        { productos.map(productos => <div className='col-md-4 p-1' key={productos.id} >
                                        <div className="card w-100 mt-5" >
                                          {`${productos.nombre}`}
                                        </div>
                                        <div className="card w-100 mt-5" >
                                          {`  ${productos.descripcion}`}
                                        </div>
                                        <div className="card-body">
                                          {/* <img src={prod.foto} alt= '' className='w-50'/> */}
                                          {productos.stock}
                                        </div>
                                        <div className="card-footer">
                                          <button clasName="btn btn-outline-primary btn-block">

                                          </button>
                                        </div>
                                  </div>)}
    </div>
  )
}

export default ItemListContainer  