"use client"
import React, { useState } from 'react';
// import styles from "./LandingCompThree.module.css";
import  "./LandingCompThree.css";
import RedArrow from "../../../public/assets/icons/RedArrow.png";
import WhiteArrow from "../../../public/assets/icons/WhiteArrowRight.png";
import Product1 from "../../../public/assets/images/Product1.png";
import image2 from "../../../public/assets/images/Second-Slide-Results-Driven-Methodology-a.png"
import image3 from "../../../public/assets/images/Second-Slide-Unmatched-Expertise.png";
import image4 from "../../../public/assets/images/Second-Slide-Customer-Centric-Approach-a.png";
import image5 from "../../../public/assets/images/Second-Slide-Agility-and-Flexibility-a.png";
import image6 from "../../../public/assets/images/Second-Slide-Ethical-and-Transparent-Practices.png";
import image7 from "../../../public/assets/images/Second-Slide-Long-Term-Support.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LandingComponentCorebeliefs from '../landingcompcorebeliefs/LandingComponentCorebeliefs';

export default function LandingCompThree() {
  const options = ['Bespoke Innovation:', 'Results-Driven Methodology:', 'Unmatched Expertise:', 'Customer-Centric Approach:', 'Agility and Flexibility:', 'Ethical and Transparent Practices:', 'Long-Term Support:'];
  const optionsContent = [
    'At Fusiontecz, innovation isn\’t just a buzzword; it’s our ethos. We don\'t just follow trends, we pioneer them, ensuring your business stays ahead of the curve.',
    'Our approach is all about tangible outcomes. We focus on delivering strategies and solutions that yield real, measurable results.',
   'Our team of experts is not only skilled but also deeply committed to your success. Their cross-industry experience ensures versatile and robust solutions.', 
   'We believe in building relationships, not just partnerships. Your vision, goals, and feedback are integral to our process, ensuring solutions that truly resonate with your needs.', 
   'In the fast-paced digital world, adaptability is key. We pride ourselves on being agile and responsive, adapting our strategies to meet the evolving demands of your business.   ',
    'Trust is the foundation of our client relationships. We maintain the highest standards of ethics and transparency in all our dealings.',
    'Our commitment doesn’t end with project delivery. We offer ongoing support and guidance, ensuring your continued success and growth.'
  ];
  const contentImage = [
    Product1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7
  ]
  const [state, setState] = useState(0);

  return (
    <div className='landingMain3'>
       <div data-aos='fade-up' data-aos-delay="800">
        <div className='landingMain3First'>
          <div className='landingMain3FirstOptionsCont'>
            {options.map((data, index) => (
              <div className='main3FirstOptionsWrap' key={index} onClick={() => setState(index)}>
                <LazyLoadImage className='optionsRedArrow' src={state === index ? RedArrow.src : WhiteArrow.src} alt='img'/>
                <span className={state === index ? 'main3FirstOptionsSpanActive' : 'main3FirstOptionsSpan'}>{data}</span>
              </div>
            ))}
          </div>
          <div className='landingMain3DataCont'>
  <span className='main3DataContHeader'>{options[state]}</span>
  <span className='main3DataContBio'>{optionsContent[state]}</span>
  <LazyLoadImage src={contentImage[state].src} alt='img' className='main3DataContImg'/>
</div>
          <Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} autoPlay={true} className='landingMain3Carousel'>
            {options.map((data, index) => (
              <div className='landingMain3CarouselDataCont' key={index}>
                <span className='main3DataContHeader'>{data}</span>
                <span className='main3DataContBio'>{optionsContent[index]}</span>
                <LazyLoadImage src={contentImage[index].src} alt='img' className='main3ataContImg'/>
              </div>
            ))}
          </Carousel>
          
        </div>
        </div>
      <LandingComponentCorebeliefs/>
    </div>
  );
}
