import React from 'react'
import Link from 'next/link';
import styles from '../header/Header.module.css';
export default function ContactButton() {
  return (
    <div className={styles.navContactBtn}>
        <Link href="footer-main" 
           spy={true} 
           smooth={true} 
           offset={50} 
           duration={500} >
          <span>Contact Us</span>
        </Link>
    </div>
  )
}
