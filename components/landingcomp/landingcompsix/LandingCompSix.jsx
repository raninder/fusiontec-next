'use client'
import React from 'react'
import styles from "./LandingCompSix.module.css";
import Bag from "../../../public/assets/icons/Bag.png";
import Earth from "../../../public/assets/icons/Earth.png"
import Network from "../../../public/assets/icons/Network.png";
import People from "../../../public/assets/icons/People.png";
import Screw from "../../../public/assets/icons/Screw.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import CountUp from 'react-countup';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function LandingCompSix() {
  const arr = [
    {
      picture:Bag,
      number:200,
      suffix:"+",
      head:"Projects Completed:",
      bio:"Demonstrating our experience and capability in delivering diverse solutions",
    },
    {
      picture:Earth,
      number:30,
      suffix:"+",
      head:"Clients Across Countries:",
      bio:"A testament to our global reach and cross-cultural expertise.",
    },
    {
      picture:Network,
      number:10,
      suffix:"+",
      head:"Years in Business:",
      bio:"A decade of continuous growth, innovation, and customer satisfaction.",
    },
    {
      picture:People,
      number:95,
      suffix:"%",
      head:"Client Retention Rate:",
      bio:"Reflecting our commitment to long-term client relationships and consistent service excellence.",
    },
    {
      picture:Screw,
      number:150,
      suffix:"+",
      head:"Expert Professionals:",
      bio:"A robust team of industry experts driving our vision forward.",
    }
  ];
  return (
    <div data-aos='fade-up' data-aos-delay="800">
    <div className={styles.landingMain6}>
       {
        arr.map((data, index)=>(
           <div className={styles.landingMain6Catalog} key={index}>
            <LazyLoadImage src={data.picture.src}/>
            <span className={styles.landingMain6CatalogNumber}><CountUp start={0} end={data.number} delay={1} enableScrollSpy={true} suffix={data.suffix} /></span>
            <span className={styles.landingMain6CatalogHead}>{data.head}</span>
            <span className={styles.landingMain6CatalogBio}>{data.bio}</span>
           </div>
        ))
       }
    </div>
    </div>
  )
}
