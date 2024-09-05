import React from 'react';
import "./LandingCompFour.css";
import FirstImg from "../../../assets/images/About-us-a.png";
import SecondImg from "../../../assets/images/About-us.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
export default function LandingCompFour() {
  const navigate = useNavigate();
  return (
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className='landing-main4'>
        <div className='landing-main4-first'>
          <LazyLoadImage src={FirstImg} className='landing-main4-first-img'/>
          <LazyLoadImage src={SecondImg} className='landing-main4-second-img'/>
        </div>
        <div className='landing-main4-second'>
            <span className='landing-main4-second-tag'>About us</span>
            <span className='landing-main4-second-head'>Fusiontecz and its history</span>
            <div className='landing-main4-second-img-wrap'>
              <LazyLoadImage src={FirstImg} className='landing-main4-first-img'/>
              <LazyLoadImage src={SecondImg} className='landing-main4-second-img'/>
            </div>
            <span className='landing-main4-second-bio'>Welcome to our world of expertise in Information Technology and Fintech. Based in Canada, our team boasts over a decade of international experience, with a track record of 125+ successful projects across the globe.<br/><br/>Our dedicated team of 75+ experts is committed to delivering top-notch services tailored to your needs. We thrive on understanding your unique requirements and business processes to ensure excellence in every project.<br/><br/>Ready to embark on a journey of innovation and excellence with us? Click the button below to explore our services and get in touch:</span>
            <div className='landing-main4-button' onClick={()=> navigate('/about')}>
              <span>Explore our services</span>
            </div>
        </div>
    </div>
    </AnimationOnScroll>
  )
}
