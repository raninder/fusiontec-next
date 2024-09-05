import React from 'react'
import { Link } from 'react-scroll';

export default function ServiceContactButton() {
  return (
    <div style={{background:"#F9D410"}} className='nav-contact-btn'>
          <Link to="footer-main" 
           spy={true} 
           smooth={true} 
           offset={50} 
           duration={500} >
          <span style={{color:"#020202"}} >Contact Us</span>
          </Link>
    </div>
  )
}
