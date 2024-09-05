import React, { useEffect, useState } from 'react';
import './LandingCompFive.css';
import Service1 from "../../../assets/images/service1editted.png"
import Service2 from "../../../assets/images/services2Editted.png"
import Service3 from "../../../assets/images/services3Editted.png"
import Service4 from "../../../assets/images/servicec4Editter.png"
import Service21 from "../../../assets/images/service111.png"
import Service22 from "../../../assets/images/service222.png"
import Service23 from "../../../assets/images/service333.png"
import Service24 from "../../../assets/images/service444.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function LandingCompFive() {
    const navigate = useNavigate();
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
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className='landing-main5'>
    <span  className='landing-main5-head'>Our Services</span>
    <span className='landing-main5-tag'>Fusiontecz: Pioneering Comprehensive Business Solutions for the Digital Age</span>
    <div className='landing-main5-services-cont'>
       {
        services.map((data, index)=>(
            <AnimationOnScroll 
            key={index} 
            className={index%2 === 0 ? 'landing-main5-service-left' : 'landing-main5-service-right'} 
            animateIn={index%2 === 0 ?"animate__fadeInLeft":"animate__fadeInRight"} 
            duration={1.5}>
               <LazyLoadImage cov src={data.picture} className='landing-service-img'/>
               <div className='landing-service-data-cont'>
                  <span className={index%2 === 0 ?  'landing-main5-service-left-tag' : 'landing-main5-service-right-tag'}>{data.tag}</span>
                  <span className={index%2 === 0 ?  'landing-main5-service-left-head' : 'landing-main5-service-right-head'}>{data.head}</span>
                  <span className={index%2 === 0 ?  'landing-main5-service-left-bio' : 'landing-main5-service-right-bio'}>{data.bio}</span>
                  <div className={index%2 === 0 ? 'landing-main5-service-left-button': 'landing-main5-service-right-button'}>
                    <Link className={index%2 === 0 ? 'landing-main5-service-left-button-text': 'landing-main5-service-right-button-text'} to={`/${data.route}`}>{data.buttonText}</Link>
                  </div>
               </div>
            </AnimationOnScroll>
        ))
       }
    </div>
    </div>
    </AnimationOnScroll>
  )
}
