import React from 'react'
import "./AboutCompTwo.css"
import { AnimationOnScroll } from 'react-animation-on-scroll'
export default function AboutCompTwo() {
  return (
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className='about-main2'>
       <div className='vision-cont'>
          <span className='vision-head'>Our <span className='vision-head-ext'>Vision</span></span>
          <span className='vision-text'>To be the catalyst for change in the digital world, bridging technological advancement with market needs.</span>
       </div>
    </div>
    </AnimationOnScroll>
  )
}
