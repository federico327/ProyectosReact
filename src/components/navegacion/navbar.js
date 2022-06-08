import React from 'react'
import { Link } from 'react-router-dom'

const navbar = (navbar) => {
  return (
    <div>

        <nav className="navbar navbar-expand-lg navbar-light bg-secondary
">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    {/* img */}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='./inicio'>inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='./nosotros'>nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='./tienda'>tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='./ItemCount'>contador</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link className="nav-link" to='./itemlistcontainer'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    </Link>
                    
                </div>
            </div>
            
        </nav>
        <div>
            
        </div>

    </div>
    

  )
}

export default navbar