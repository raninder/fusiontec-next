import React from 'react';
import "./LandingCompSeven.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-scroll';

export default function LandingCompSeven() {
  return (
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className='landing-main7'>
        <div className='landing-main7-comp'>
          <span className='landing-main7-comp-tag'>Start a New Chapter of Success with Fusiontecz</span>
          <span className='landing-main7-comp-head'>Take Your Business to New Heights</span>
          <span className='landing-main7-comp-bio'>Experience the transformative impact of our services. Reach out for a bespoke consultation and step into a future of unparalleled business achievements.</span>
          <div className='landing-main7-button'>
          <Link to="contact-comp" 
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
