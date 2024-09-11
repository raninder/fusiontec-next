'use client'

import React, { useEffect, useState } from 'react';
import styles from './LandingCompFive.module.css';
import Service1 from "../../../public/assets/images/service1editted.png"
import Service2 from "../../../public/assets/images/services2Editted.png"
import Service3 from "../../../public/assets/images/services3Editted.png"
import Service4 from "../../../public/assets/images/servicec4Editter.png"
import Service21 from "../../../public/assets/images/service111.png"
import Service22 from "../../../public/assets/images/service222.png"
import Service23 from "../../../public/assets/images/service333.png"
import Service24 from "../../../public/assets/images/service444.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function LandingCompFive() {
    const [image1, setImage1] = useState(Service1);
    const [image2, setImage2] = useState(Service2);
    const [image3, setImage3] = useState(Service3);
    const [image4, setImage4] = useState(Service4);
    
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1000) {
                setImage1(Service21);
                setImage2(Service22);
                setImage3(Service23);
                setImage4(Service24);
            } else {
                setImage1(Service1);
                setImage2(Service2);
                setImage3(Service3);
                setImage4(Service4);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const services = [
        {
            tag:"IT Consulting and Web Development Outsourcing Services",
            route:'itservice',
            head:"Strategic IT Consulting & Development",
            bio:"Unlock the power of technology with Fusiontecz. Our IT consulting and web development outsourcing services are tailored to meet your specific needs, ensuring innovative, cutting-edge solutions that drive business success.",
            buttonText:"Begin Your Digital Transformation",
            picture:image1,
        },
        {
            tag:"Fintech Services",
            route:'fintechservice',
            head:"Revolutionize Finance, Unleash Possibilities",
            bio:"Step into the future of finance with Fusiontecz. Our fintech services blend financial acumen with technological innovation, offering you the tools to thrive in the digital era and beyond.",
            buttonText:"Discover Fintech Innovations",
            picture:image2,
        },
        {
            tag:"Digital Marketing Services",
            route:'marketingservice',
            head:"Amplify Your Online Presence",
            bio:"Elevate your brand with Fusiontecz’s digital marketing expertise. Our strategic approach not only enhances your online visibility but also maximizes return on investment, connecting you with your target audience effectively.",
            buttonText:"Elevate Your Brand Today",
            picture:image3,
        },
        {
            tag:"Accounting and Bookkeeping Services",
            route:'accountingservice',
            head:"Precision in Financial Management",
            bio:"Rely on Fusiontecz for meticulous accounting and bookkeeping services. We provide clarity and compliance in your financial management, allowing you to focus on your core business with confidence.",
            buttonText:"Secure Your Financial Integrity",
            picture:image4,
        },
    ];
  return (
    <div data-aos='fade-up' data-aos-delay="800">
    <div className={styles.landingMain5}>
    <span  className={styles.landingMain5Head}>Our Services</span>
    <span className={styles.landingMain5Tag}>Fusiontecz: Pioneering Comprehensive Business Solutions for the Digital Age</span>
    <div className={styles.landingMain5ServicesCont}>
       {
        services.map((data, index)=>(
            <div data-aos-delay="800" key={index}
            className={index%2 === 0 ? styles.landingMain5ServiceLeft : styles.landingMain5ServiceRight} 
            data-aos={index%2 === 0 ?"fade-left":"fade-right"} >
            <LazyLoadImage cov src={data.picture.src} className={styles.landingServiceImg}/>
               <div className={styles.landingServiceDataCont}>
                  <span className={index%2 === 0 ?  styles.landingMain5ServiceLeftTag : styles.landingMain5ServiceRightTag}>{data.tag}</span>
                  <span className={index%2 === 0 ?  styles.landingMain5ServiceLeftHead : styles.landingMain5ServiceRightHead}>{data.head}</span>
                  <span className={index%2 === 0 ?  styles.landingMain5ServiceLeftBio : styles.landingMain5ServiceRightBio}>{data.bio}</span>
                  <div className={index%2 === 0 ? styles.landingMain5ServiceLeftButton: styles.landingMain5ServiceRightButton}>
                    <Link className={index%2 === 0 ? styles.landingMain5ServiceLeftButtonText: styles.landingMain5ServiceRightButtonText} href={`/${data.route}`}>{data.buttonText}</Link>
                  </div>
               </div>
               </div>
              ))
       }
    </div>
    </div>
    </div>
  )
}
