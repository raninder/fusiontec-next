import React from 'react';
import "./AboutCompThree.css";
import FounderImage from "../../../assets/images/FounderImage.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function AboutCompThree() {
  return (
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className='about-main3'>
         <span className='about-main3-head'>Our <span className='about-main3-head-ext'>Founders</span></span>
         <div className='about-main3-founders'>
            <AnimationOnScroll 
            animateIn={"animate__fadeInLeft"} 
            duration={1.5}
             className='about-main3-founder-left'>
                <LazyLoadImage src={FounderImage} alt='founders' className='founders'/>
                <div className='founder-left-details'>
                    <span className='founder-name'>Jaz Singh</span>
                    <span className='founder-position'>CTO</span>
                    <span className='founder-bio'>A visionary with 10+ years in Fintech, Data Science, and Marketing, Jaz has led 100+ international projects, driving technological innovation.</span>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll 
            animateIn={"animate__fadeInRight"} 
            duration={1.5} 
            className='about-main3-founder-right'>
                <div className='founder-right-details'>
                    <span className='founder-name'>Kamal Kaur</span>
                    <span className='founder-position'>CEO</span>
                    <span className='founder-bio'>With 14+ years in IT, Kamal's expertise spans development, testing, and project management, making her a pivotal force in our strategic and operational excellence.</span>
                </div>
                <LazyLoadImage src={FounderImage} alt='founders' className='founders'/>
            </AnimationOnScroll>
         </div>
    </div>
    </AnimationOnScroll>
  )
}
