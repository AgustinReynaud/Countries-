import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className="ContenedorLanding">
            <h1 className="TituloLanding">The Countries</h1>
            <Link to={'/Home'}>
            
                <button className="BotonLanding"  >Ingresar </button>
            
            </Link>
        </div>
        
    )
}

export default Landing;