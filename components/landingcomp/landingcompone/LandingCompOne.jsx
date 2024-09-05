import React from 'react'
import styles from "./LandingCompOne.module.css"
import WhiteArrow from "../../../public/assets/icons/WhiteArrow.png"
import Link from 'next/link'
import Header from '@/components/header/Header'

export default function LandingCompOne() {
  return (
    <div className={styles.landingMain1}>
      <Header/>
      <div className={styles.landingMain1Cont}>
      <span className={styles.landingMain1Tag}>Where Excellence Meets Evolution</span>
      <span className={styles.landingMain1Bio}>Step into a world of possibilities with Fusiontecz. Our services are the catalysts for your success, unlocking unparalleled value in your business.</span>
      <div className={styles.landingMain1Button}>
      <Link href="contact-comp" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}>
        <span>Drive Success – Reach Fusiontecz Today</span>
        </Link>
      </div>
      <div>
        <img src={WhiteArrow.src} className={styles.landingMain1Arrow} alt='img'/>
      </div>
      </div>
    </div>
  )
}
