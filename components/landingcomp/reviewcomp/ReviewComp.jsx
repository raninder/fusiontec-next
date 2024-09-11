import React from 'react'
import styles from './ReviewComp.module.css'
import Star from "../../../public/assets/icons/Star.png";
import User1 from "../../../public/assets/images/user1.png";
import User2 from "../../../public/assets/images/user2.png";
import User3 from "../../../public/assets/images/user3.png";


export default function ReviewComp() {
  return (
   <div data-aos='fade-up' data-aos-delay="500" data-aos-duration="4000" >
    <div className={styles.reviewComp}>
      <span className={styles.reviewCompHead}>Customer Reviews</span>
      <span className={styles.reviewCompTag}>Fusiontecz Through Our <span className={styles.reviewCompTagExt}>Clients' Eye</span></span>
      <span className={styles.reviewCompBio}>At Fusiontecz, we are dedicated to going above and beyond to ensure your success. Here's why we're the preferred choice and how we consistently deliver outstanding results:</span>
      <div className={styles.reviewsCont}>
         <div data-aos='flip-left' data-aos-delay="100" className={styles.reviewWrapper}>
          <div className={styles.reviewUserWrapper}>
            <img src={User1.src} alt='user'/>
            <div  className={styles.reviewUserDetail}>
            <span className={styles.reviewUserName}>Shreya Sharma</span>
            <span className={styles.reviewDate}>2024-March-23</span>
            </div>
          </div>
          <div className={styles.starContainer}>
            {
            [1,2,3,4,5].map(()=><img src={Star.src} className={styles.stars} alt='star'/>)
            }
          </div>
          <span className={styles.reviewText}>Impressed by the seamless outsourcing solutions provided by this fintech staffing company. They've elevated our operations and efficiency.</span>
          </div>
         <div data-aos='flip-left' data-aos-delay="100" className={styles.reviewWrapper}>
          <div className={styles.reviewUserWrapper}>
            <img src={User3.src} alt='user' style={{
              height:"3rem"
            }}/>
            <div className={styles.reviewUserDetail}>
            <span className={styles.reviewUserName}>Subhash Panda</span>
            <span className={styles.reviewDate}>2023-Aug-17</span>
            </div>
          </div>
          <div className={styles.starContainer}>
            {
            [1,2,3,4,5].map(()=><img src={Star.src} className={styles.stars} alt='star'/>)
            }
          </div>
          <span className={styles.reviewText}>Excellent customer service and visibility on a global scale, They must take everyone, and you will have everything under one roof.</span>
          </div>
         <div data-aos='flip-left' data-aos-delay="100" className={styles.reviewWrapper}>
          <div className={styles.reviewUserWrapper}>
            <img src={User2.src} alt='user'/>
            <div  className={styles.reviewUserDetail}>
            <span className={styles.reviewUserName}>Sunita Baheja</span>
            <span className={styles.reviewDate}>2021-Dec-12</span>
            </div>
          </div>
          <div className={styles.starContainer}>
            {
            [1,2,3,4,5].map(()=><img src={Star.src} className={styles.stars} alt='star'/>)
            }
          </div>
          <span className={styles.reviewText}>Must for Fintech and Underwriting services, they have highly qualified professional for financial services.</span>
          </div>
      </div>
    </div>
    </div>
    
  )
}
