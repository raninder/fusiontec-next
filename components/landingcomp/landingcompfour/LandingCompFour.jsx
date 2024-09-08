'use client'
import React from 'react';
import styles from "./LandingCompFour.module.css";
import FirstImg from "../../../public/assets/images/About-us-a.png";
import SecondImg from "../../../public/assets/images/About-us.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function LandingCompFour() {

  return (
    <motion.div
    initial={{ x: 500, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 5 }}
  >
    {/* <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp"> */}
    <div className={styles.landingMain4}>
        <div className={styles.landingMain4First}>
          <LazyLoadImage src={FirstImg.src} className={styles.landingMain4FirstImg}/>
          <LazyLoadImage src={SecondImg.src} className={styles.landingMain4SecondImg}/>
        </div>
        <div className={styles.landingMain4Second}>
            <span className={styles.landingMain4SecondTag}>About us</span>
            <span className={styles.landingMain4SecondHead}>Fusiontecz and its history</span>
            <div className={styles.landingMain4SecondImgWrap}>
              <LazyLoadImage src={FirstImg.src} className={styles.landingMain4FirstImg}/>
              <LazyLoadImage src={SecondImg.src} className={styles.landingMain4SecondImg}/>
            </div>
            <span className={styles.landingMain4SecondBio}>Welcome to our world of expertise in Information Technology and Fintech. Based in Canada, our team boasts over a decade of international experience, with a track record of 125+ successful projects across the globe.<br/><br/>Our dedicated team of 75+ experts is committed to delivering top-notch services tailored to your needs. We thrive on understanding your unique requirements and business processes to ensure excellence in every project.<br/><br/>Ready to embark on a journey of innovation and excellence with us? Click the button below to explore our services and get in touch:</span>
              <Link className={styles.landingMain4Button} href={'/about'}>
              <span>Explore our services</span>
            </Link>
        </div>
    </div>
    {/* </AnimationOnScroll> */}
    </motion.div>
  )
}
