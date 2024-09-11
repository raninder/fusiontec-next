'use client'
import React, { useContext, useState } from 'react';
import "./Navbar.css";
import Logo from "../../public/assets/icons/Logo.png";
import Link from 'next/link';
import { Redirect } from 'next';
// import { useNavigate, Link } from "react-router-dom";
import WhiteMenu from "../../public/assets/icons/menu.svg";
// import { UserContext } from '../../context/userContext';
import ContactButton from '../contactbutton/ContactButton';
export default function Navbar() {
  // const { setDrawer } = useContext(UserContext);
  // const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    console.log("Toggle Clicked --- ")
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className='navbar-main'>
      <div className='nav-logo-cont'>
        <Link className='nav-logo-cont' href={'/'}>
        <img src={Logo.src} className='logo-img' alt='img'/>
        <span>where innovation meets excellence</span>
        </Link>
      </div>
      <div className='nav-links'>
        <span className='nav-links-span'><Link href={"/about"} className='nav-links-span'>About Us</Link></span>
        {/* <div className="dropdown" onClick={toggleDropdown}> */}
          <span className='nav-links-span' onClick={toggleDropdown}>Services</span>
          {showDropdown && (
            <div className="dropdown-content">
              <span className='dropdown-content-links'><Link href={'/itservice'} className='dropdown-content-links'>IT Consulting And Development</Link></span>
              <span className='dropdown-content-links'><Link href={'/outsourcingservice'} className='dropdown-content-links'>Outsourcing Services</Link></span>
              <span className='dropdown-content-links'><Link href={'/fintechservice'} className='dropdown-content-links'>Fintech</Link></span>
              <span className='dropdown-content-links'><Link href={'/marketing'} className='dropdown-content-links'>Digital Marketing</Link></span>
              <span className='dropdown-content-links'><Link href={'/accountingservice'} className='dropdown-content-links'>Accounting And Bookkeeping</Link></span>
              {/* Add more services as needed */}
            </div>
          )}
        {/* </div> */}
        <span className='nav-links-span'><Link href={'/howitworks'} className='nav-links-span'>How it works</Link></span>
        {/* <span className='nav-links-span'>Blogs</span> */}
       <ContactButton/>
        {/* <img src={WhiteMenu.src} className='menu-bar' onClick={() => setDrawer(true)}/> */}
      </div>
      {showDropdown && <div className="overlay" onClick={closeDropdown}></div>}
    </div>
  );
}
