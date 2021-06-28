import React from 'react'
import '../../App.css';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		    <a className="navbar-brand" href="/">My Project</a>
		    <div className="collapse navbar-collapse container-fluid" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        <li className="nav-item active">
			          	<a className="nav-link" href="/">Home</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="/nosotros">Nosotros</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="/servicios">Servicios</a>
			        </li>
			        <li className="nav-item">
			          	<a className="nav-link" href="/contacto">Contacto</a>
			        </li>
			    </ul>
			    <form className="form-inline me-2 mt-md-0 lineal">
			        <input className="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
			    </form>
		    </div>
 
		</nav>
    )
}

export default Menu
