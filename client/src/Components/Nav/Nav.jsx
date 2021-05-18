import React from 'react';
import './Nav.css'
import Logo from '../Images/logo3.png'
import { Link } from 'react-router-dom';



function Nav() {
    return (
        <div>
            <nav className="Nav">
                <Link to={'/Home'}>
                    <img src={Logo} alt="Logo" width='50px' className='image' />
                </Link>
                <Link to={'/activity'}>
                    <h3 className='H3'>Create Activity </h3>
                </Link>
               
              
              
            </nav>
        </div>
    )
}


export default Nav;