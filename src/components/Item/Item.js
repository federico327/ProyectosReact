import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div            
            className='col-md-4 p-1'                                                           
        >                    
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.nombre}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} alt='' className='w-50' />
                    {prod.stock}                                                            
                </div>
                <div className="card-footer"> 
                    <Link to={`/camperones/${prod.id}`} >
                        <button className="btn btn-outline-primary btn-block">
                            Ver más
                        </button>   
                    </Link> 
                </div>
            </div>                                                                                                                            
        </div>
    )
}

export default Item