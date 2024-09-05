import React from 'react';
import styles from "./LandingComponentCorebeliefs.module.css";
import client from "../../../public/assets/images/Client-Centric Approach.jpg";
import commitment from "../../../public/assets/images/Commitment to Quality.jpg";
import innovation from "../../../public/assets/images/Innovation as a Standard.jpg";
import integrity from "../../../public/assets/images/Integrity in Every Interaction.jpg";


export default function LandingComponentCorebeliefs() {
  const tab1 = [
    {
      heading: "Innovation as a Standard",
      content: "We believe in constantly pushing the boundaries of what's possible, ensuring our solutions are not just current but future-ready.",
      image: innovation
    },
    {
      heading: "Integrity in Every Interaction",
      content: "Honesty and transparency are at the heart of all our dealings, fostering trust and long-term relationships",
      image: integrity
    },
    {
      heading: "Commitment to Quality",
      content: "Excellence is non-negotiable. We're committed to delivering only the best, without compromise.",
      image: commitment
    },
    {
      heading: "Client-Centric Approach",
      content: "Your goals are our goals. We listen, adapt, and deliver solutions centered around your specific needs.",
      image: client
    },
  ];

  
  return (
    <div className={styles.landingCore7Wrapper}>
    <div className={styles.landingCore7}>
       <div className={styles.landingCore7Left}>
          <span className={styles.landingCore7LeftHead}>Our Core Beliefs & Client Benefits</span>
          <span className={styles.landingCore7LeftTag}>Building a Future on Foundations of Trust and Innovation</span>
          <span className={styles.landingCore7LeftPara}>At fusiontecz, our core belief are the driving force behind our success and the success of our clients. These principles not only guide our actions but also offer distinct benefits to those we partner with.</span>
          <span className={styles.landingCore7LeftBottomTag}>Realize Your Potential with Fusiontecz - Connect Today!</span>
       </div>
       <div className={styles.landingCore7RightWrrapper}>
       <div className={styles.landingCore7Right}>
         {
          tab1.map((data, index)=>(
            <div key={index} className={styles.core7RightChild}>
               <img src={data.image.src} className={styles.core7RightChildImg}/>
               <span className={styles.core7RightChildHead}>{data.heading}</span>
               <span className={styles.core7RightChildContent}>{data.content}</span>
            </div>
          ))
         }
       </div>
    </div>
    </div>
    </div>
  );
}
