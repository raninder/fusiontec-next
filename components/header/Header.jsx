import React from 'react';
import Logo from "../../public/assets/icons/Logo.png";
import Link from 'next/link';
import WhiteMenu from "../../public/assets/icons/menu.svg";
import ContactButton from '../contactbutton/ContactButton';
import styles from './Header.module.css';

export default function Header() {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//    console.log("Toggle Clicked --- ")
//     setShowDropdown(!showDropdown);
//   };

//   const closeDropdown = () => {
//     setShowDropdown(false);
//   };

  return (
    <div className={styles.navbarMain}>
      <div className={styles.navLogoCont}>
        <Link className={styles.navLogoCont} href='/'>
        <img src={Logo.src} className={styles.logoImg} alt='img'/>
        <span>where innovation meets excellence</span>
        </Link>
      </div>
      <div className={styles.navLinks}>
        <span className={styles.navLinksSpan}><Link href="/about" className={styles.navLinksSpan}>About Us</Link></span>
        {/* <div className="dropdown" onClick={toggleDropdown}> */}
          <span className={styles.navLinksSpan}>Services</span>
        {/* </div> */}
        <span className={styles.navLinksSpan}><Link href='/howitworks' className={styles.navLinksSpan}>How it works</Link></span>
        {/* <span className='nav-links-span'>Blogs</span> */}
       <ContactButton/>
        {/* <img src={WhiteMenu.src} className='menu-bar'/> */}
      </div>
      {/* {showDropdown && <div className="overlay" onClick={closeDropdown}></div>} */}
    </div>
  );
}