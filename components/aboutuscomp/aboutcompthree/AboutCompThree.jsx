import React from 'react';
import "./AboutCompThree.css";
import FounderImage from "../../../public/assets/images/FounderImage.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AboutCompThree() {
  return (
    <div data-aos='fade-up' data-aos-delay="800">
    <div className='about-main3'>
         <span className='about-main3-head'>Our <span className='about-main3-head-ext'>Founders</span></span>
         <div className='about-main3-founders'>
         <div data-aos='fade-left' data-aos-delay="800" className='about-main3-founder-left'>
                <LazyLoadImage src={FounderImage.src} alt='founders' className='founders'/>
                <div className='founder-left-details'>
                    <span className='founder-name'>Jaz Singh</span>
                    <span className='founder-position'>CTO</span>
                    <span className='founder-bio'>A visionary with 10+ years in Fintech, Data Science, and Marketing, Jaz has led 100+ international projects, driving technological innovation.</span>
                </div>
            </div>
            <div data-aos='fade-right' data-aos-delay="800" className='about-main3-founder-right'>
                <div className='founder-right-details'>
                    <span className='founder-name'>Kamal Kaur</span>
                    <span className='founder-position'>CEO</span>
                    <span className='founder-bio'>With 14+ years in IT, Kamal's expertise spans development, testing, and project management, making her a pivotal force in our strategic and operational excellence.</span>
                </div>
                <LazyLoadImage src={FounderImage.src} alt='founders' className='founders'/>
            </div>
         </div>
    </div>
    </div>
  )
}
