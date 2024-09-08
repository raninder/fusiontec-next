import React from 'react';
import styles from "./LandingCompSeven.module.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Link from 'next/link';


export default function LandingCompSeven() {
  return (
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className={styles.landingMain7}>
        <div className={styles.landingMain7Comp}>
          <span className={styles.landingMain7CompTag}>Start a New Chapter of Success with Fusiontecz</span>
          <span className={styles.landingMain7CompHead}>Take Your Business to New Heights</span>
          <span className={styles.landingMain7CompBio}>Experience the transformative impact of our services. Reach out for a bespoke consultation and step into a future of unparalleled business achievements.</span>
          <div className={styles.landingMain7Button}>
          <Link href="contact-comp" 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}>
            <span>Consult Now</span>
            </Link>
           </div>
        </div>
    </div>
    </AnimationOnScroll>
  )
}
