import React, { useEffect } from 'react'
import { getFetch } from '../helpers/getFetch'




const itemlistcontainer = (itemlistcontainer) => {
  const[productos, setProductos] = useState ([])

  useEffect(()=> {
    getFetch()
    .them((resp)=> {
        setProductos(resp)
    })
    .catch(err => console.log(err))
    .finally(()=> console.log())
  },[])

  console.log(productos)

  return (
    <div>
        { productos.map(prod => <div className='col-md-4 p-1' key={prod.id} >
                                        <div className="card w-100 mt-5" >
                                          {`${producto.nombre} - ${producto.descripcion}`}
                                        </div>
                                        <div className="card-body">
                                          {/* <img src={prod.foto} alt= '' className='w-50'/> */}
                                          {prod.stock}
                                        </div>
                                        <div className="card-footer">
                                          <button clasName="btn btn-outline-primary btn-block">

                                          </button>
                                        </div>
                                  </div>)}
    </div>
  )
}

export default itemlistcontainer