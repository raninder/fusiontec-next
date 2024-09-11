import React from 'react'
import "./HIWCompTwo.css"
import ArrowRight from "../../../public/assets/icons/ServiceRightArrow.png";
import ArrowLeft from "../../../public/assets/icons/ServiceLeftArrow.png";
import Service11 from "../../../public/assets/images/service11.png";
import Service12 from "../../../public/assets/images/service12.png";
import Service21 from "../../../public/assets/images/service21.png";
import Service22 from "../../../public/assets/images/service22.png";
import Service31 from "../../../public/assets/images/service31.png";
import Service32 from "../../../public/assets/images/service32.png";
import Service41 from "../../../public/assets/images/service41.png";
import Service42 from "../../../public/assets/images/service42.png";
import Service51 from "../../../public/assets/images/service51.png";
import Service52 from "../../../public/assets/images/service52.png";
import Service61 from "../../../public/assets/images/service61.png";
import Service62 from "../../../public/assets/images/service62.png";
import Service71 from "../../../public/assets/images/service71.png";
import Service72 from "../../../public/assets/images/service72.png";
import Service81 from "../../../public/assets/images/service81.png";
import Service82 from "../../../public/assets/images/service82.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function HIWCompTwo() {
    const data = [
        {
            name:"Initial Consultation",
            tag:"Understanding Your Vision",
            message:"We begin with a comprehensive discussion to understand your project goals, challenges, and expectations.",
            imgs:[Service11, Service12]
        },
        {
            name:"Requirement Analysis",
            tag:"Detailed Assessment",
            message:"Our team conducts a thorough analysis of your requirements to outline a tailored strategy.",
            imgs:[Service21, Service22]
        },
        {
            name:"Workflow Diagram",
            tag:"Blueprint for Success",
            message:"We create a comprehensive workflow diagram, ensuring clarity and precision in every step.",
            imgs:[Service31, Service32]
        },
        {
            name:"Prototyping",
            tag:"Visualising Ideas",
            message:"Before diving into development, we craft prototypes to give you a tangible view of the solution.",
            imgs:[Service41, Service42]
        },
        {
            name:"Development Phase",
            tag:"Bringing Ideas to Life",
            message:"Our expert team works diligently to develop solutions that align with your specific needs.",
            imgs:[Service51, Service52]
        },
        {
            name:"Rigorous Testing",
            tag:"Quality Assurance",
            message:"We conduct extensive testing to ensure the solution is robust and meets our high-quality standards.",
            imgs:[Service61, Service62]
        },
        {
            name:"Implementation",
            tag:"Seamless Integration",
            message:"The final product is integrated smoothly into your existing systems.",
            imgs:[Service71, Service72]
        },
        {
            name:"Support and Warranty",
            tag:"Continuous Support",
            message:"Post-implementation, we provide comprehensive support and warranty services for peace of mind.",
            imgs:[Service81, Service82]
        }
    ];
  return (
    <div className='hiw-main2'>
       {data.map((dt,index)=>(
          index%2 == 0 ? 
          <div data-aos='fade-right' data-aos-delay="800" className='hiw-service-right'>
             <div className='hiw-service-right-wrap'>
           <div className='hiw-service-right-detials'>
             <span className='hiw-service-number'>#{index+1}</span>
             <span className='hiw-service-name'>{dt.name}</span>
             <span className='hiw-service-tag'>{dt.tag}</span>
             <span className='hiw-service-message'>{dt.message}</span>
           </div>
           <div className='hiw-service-right-images'>
              <LazyLoadImage src={dt.imgs[0].src} alt='service-img' className='service-img'/>
              <LazyLoadImage src={dt.imgs[1].src} alt='service-img2' className='service-img2'/>
           </div>
       </div>
       {index + 1 !== data.length  && <img src={ArrowRight.src} alt="arrow-img" className='services-arrow-right'/>}
     </div> : <div data-aos='fade-left' data-aos-delay="800" className='hiw-service-left'>
     <div className='hiw-service-left-wrap'>
           <div className='hiw-service-left-images'>
              <LazyLoadImage src={dt.imgs[0].src} alt='service-img' className='service-img'/>
              <LazyLoadImage src={dt.imgs[1].src} alt='service-img2' className='service-img2'/>
           </div>
           <div className='hiw-service-left-detials'>
             <span className='hiw-service-number'>#{index+1}</span>
             <span className='hiw-service-name'>{dt.name}</span>
             <span className='hiw-service-tag'>{dt.tag}</span>
             <span className='hiw-service-message'>{dt.message}</span>
           </div>
       </div>
     {index + 1 !== data.length  && <img src={ArrowLeft.src} alt="arrow-img" className='services-arrow-left'/>}
     </div>
       ))}
    </div>
  )
}
