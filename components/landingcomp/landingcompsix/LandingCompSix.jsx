import React from 'react'
import "./LandingCompSix.css";
import Bag from "../../../assets/icons/Bag.png";
import Earth from "../../../assets/icons/Earth.png"
import Network from "../../../assets/icons/Network.png";
import People from "../../../assets/icons/People.png";
import Screw from "../../../assets/icons/Screw.png"
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
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className='landing-main6'>
       {
        arr.map((data, index)=>(
           <div className='landing-main6-catalog' key={index}>
            <LazyLoadImage src={data.picture}/>
            <span className='landing-main6-catalog-number'><CountUp start={0} end={data.number} delay={1} enableScrollSpy={true} suffix={data.suffix} /></span>
            <span className='landing-main6-catalog-head'>{data.head}</span>
            <span className='landing-main6-catalog-bio'>{data.bio}</span>
           </div>
        ))
       }
    </div>
    </AnimationOnScroll>
  )
}
