import React from 'react'
import './Footer.css'
import git from '../Images/Github.png';
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import link from '../Images/Link.png';




export function Footer() {


    return (
        
            <div className='links'>

                
                <button>
                    <a href='https://github.com/AgustinReynaud/PI-Countries'>
                        <i className="fab fa-github-alt" ></i>
                       <img src={git} alt="" width='40px' />
                    </a>
                </button>

                <button>
                    <a href='https://www.linkedin.com/in/agustinreynaud/'>
                        <i className="fab fa-linkedin"  ></i>
                        <img src={link} alt="" width='40px' />
                    </a>
                </button>

                <button>
                    <a href='https://www.instagram.com/reynaudagustin/'>
                        <i className="fab fa-instagram" ></i>
                        <img src={instagram} alt="" width='40px' />
                    </a>
                </button>

                <button>
                    <a href='https://www.facebook.com/agustin.reynaud2'>
                        <i className="fab fa-facebook" ></i>
                        <img src={facebook} alt="" width='40px' />
                    </a>
                </button>

                
            </div>

       

    )
}

export default Footer;