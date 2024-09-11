'use client'
import React, { useState, Component , useEffect} from 'react'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import './ContactComp.css'
import ContactImg1 from "../../public/assets/images/Contact-Us-File.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import emailjs from 'emailjs-com';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { emailValidator } from '../../utils/emailValidators';
import { redirect } from 'next/navigation';
// import { useNavigate } from 'react-router-dom';

export default function ContactComp() {
    const [services, setServices] = useState([]);
    const [lastname , setLastName] = useState();
    const [firstname , setFirstName] = useState();
    const [phone , setPhone] = useState();
    const [email , setEmail] = useState();
    const [comment , setComment] = useState();
    const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();

    useEffect(()=>{
      loadCaptchaEnginge(6,'black','white')
    },[])

    const handleSendEmail = () => {
      try{
        setIsLoading(true)
        if (firstname === "" || lastname === "" || email === "" || phone === "" || services.length === 0) {
          alert("All Fields are required!");
          return;
        }else if(emailValidator(email) !== ''){
           alert(emailValidator(email));
           return;
        }

      let user_captcha = document.getElementById('user_captcha_input').value;

       if (validateCaptcha(user_captcha)===true) {
           loadCaptchaEnginge(6); 
           document.getElementById('user_captcha_input').value = "";
           emailjs.send(
            "service_1s1rl1u",
            "template_1lbx6lr",
            {
              to_email:"Relations@fusiontecz.com",
              to_name:"Jaz",  
              from_name: firstname + ' ' + lastname,
              email_id: email,
              phone_number: phone,
              services: services.map(subservice => subservice).join(", "),
              comment: comment
            },
            "FVOJhVeSzoim1IqjY"
          ).then((response) => {
            console.log('Email sent successfully:', response);
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setServices([])
            setComment("");
            // navigate('/thankyou');
            redirect('/thankyou')
          }).catch((error) => {
            console.error('Email sending failed:', error);
            alert("Failed to Submit form!")
          });

       }
       else {
           alert('Captcha Does Not Match');
           document.getElementById('user_captcha_input').value = "";
            setFirstName("");
            setLastName("");
            setPhone("");
            setEmail("");
            setServices([])
            setComment("");
       }

    }catch(e){
      console.log('Catch Error -- ' , e);
    }finally{
      setIsLoading(false)
    }
 }

  return (
    <AnimationOnScroll 
    animatePreScroll={false}
    duration={1.5} 
    initiallyVisible={false}
    animateIn="animate__fadeInUp">
    <div className='contact-comp'>
        <div className='contact-wrapper'>
          <div className='contact-img-cont'>
            <LazyLoadImage src={ContactImg1.src} alt='contact-img' className='contact-img-left'/>
            {/* <img src={ContactImg2} alt='contact-img' className='contact-img-right'/> */}
          </div>
          <div className='contact-form' id='contact-form'>
            <span className='contact-form-head'>Contact Form</span>
            <div className='form-input-wrap'>
              <div className='input-cont'>
                <span>First Name</span>
                <input placeholder='Type your first name here' className='name-number-input' value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
              </div>
              <div className='input-cont'>
                <span>Last Name</span>
                <input placeholder='Type your last name here' className='name-number-input' value={lastname} onChange={(e) => setLastName(e.target.value)}/>
              </div>
            </div>
            <div className='form-input-wrap'>
              <div className='input-cont'>
                <span>Email</span>
                <input placeholder='Enter your email here' className='name-number-input' value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className='input-cont'>
                <span>Phone Number</span>
                <input placeholder='Enter here with code' className='name-number-input' value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
            </div>
            <div className='contact-input-wrap'>
              <span>Select your service</span>
             <div className='services-option-wrapper'>
                <div className='services-option-cont'>
                  <input type='checkbox' onChange={(e)=>{
                    !e.target.checked ? setServices(services.filter(item=>item !== "Web Development")) : setServices([...services, "Web Development"]);
                  }}/>
                  <span>Web Development</span>
                </div>
                <div className='services-option-cont'>
                  <input type='checkbox' onChange={(e)=>{
                    !e.target.checked ? setServices(services.filter(item=>item !== "SMO")) : setServices([...services, "SMO"]);
                  }}/>
                  <span>SMO</span>
                </div>
                <div className='services-option-cont'>
                  <input type='checkbox' onChange={(e)=>{
                    !e.target.checked ? setServices(services.filter(item=>item !== "App Development")) : setServices([...services, "App Development"]);
                  }} />
                  <span>App Development</span>
                </div>
                <div className='services-option-cont'>
                  <input type='checkbox' onChange={(e)=>{
                    !e.target.checked ? setServices(services.filter(item=>item !== "Consultancy")) : setServices([...services, "Consultancy"]);
                  }}/>
                  <span>Consultancy</span>
                </div>
                <div className='services-option-cont'>
                  <input type='checkbox' onChange={(e)=>{
                    !e.target.checked ? setServices(services.filter(item=>item !== "Fintech")) : setServices([...services, "Fintech"]);
                  }}/>
                  <span>Fintech</span>
                </div>
             </div>
            </div>
            <div className='contact-input-wrap'>
              <span className='contact-comment-span'>Add Comments<span style={{color: 'grey' , fontSize: '12px'}}>(optional)</span></span>
              <input placeholder='Add your comment' className='conact-comment-input' value={comment} onChange={(e) => setComment(e.target.value)}/>
            </div>
            <LoadCanvasTemplate />
            <div><input placeholder="Enter Captcha Value" className='name-number-input' id="user_captcha_input" name="user_captcha_input" type="text"></input></div>
            <div onClick={() => handleSendEmail()} className='contact-submit-button'>
            {isLoading ? <span>Loading...</span> : <span>Request Quote</span>}
            </div>
          </div>
        </div>
    </div>
    </AnimationOnScroll>
  )
}
