'use client'
import React from "react";
import "./Footer.css";
import Canada from "../../public/assets/icons/Canada.png";
import India from "../../public/assets/icons/India.png";
import X from "../../public/assets/icons/x.png";
import LinkedIn from "../../public/assets/icons/Linkedin.png";
import Facebook from "../../public/assets/icons/facebook.png";
import Instagram from "../../public/assets/icons/Instagram.png";
import Link from 'next/link'

export default function Footer() {
    return <div className="footer-main"  id="footer-main">
        <div className="footer-inner">
            <div className="footer-inner-top">
                <div className="footer-inner-top-left">
                    <span className="top-left-head">About Us</span>
                    <div className="inner-top-left">
                        <div className="address-container">
                            <img src={Canada.src} />
                            <span className="address-text">Monday to Friday<br />8.00am to 6pm<br />+1-226-500-4131<br />204-66 guided crt, Etobicoke, ON, M9V4K6, Canada.</span>

                        </div>
                        <div className="address-container">
                            <img src={India.src} />
                            <span className="address-text">Monday to Friday<br />8.00am to 6pm<br />+91-7706868000<br />Phase – 8, Industrial Area  , Mohali , 160002, India. </span>

                        </div>
                    </div>

                </div>
                <div className="footer-inner-top-right">
                    <div className="company-footer">
                        <span className="company-footer-head">Company</span>
                        <div className="company-footer-text-wrapper">
                            <span className="company-footer-text"><Link className="company-footer-text" href={"/about"}>About Us</Link></span>
                        </div>
                        <div className="company-footer-text-wrapper">
                            <span className="company-footer-text"><Link className="company-footer-text" href={"/services"}>Services</Link></span>
                        </div>
                        <div className="company-footer-text-wrapper">
                            <span className="company-footer-text"><Link className="company-footer-text" href={"/howitworks"}>How It Works</Link></span>
                        </div>
                        <div className="company-footer-text-wrapper">
                            <span className="company-footer-text">Contact Us</span>
                        </div>
                    </div>
                    <div className="services-footer">
                        <span className="services-footer-head">Services</span>
                        <div className="services-footer-text-wrapper">
                            <span className="services-footer-text"><Link href={'/itservice'} className="services-footer-text">IT Consulting and Development</Link></span>
                        </div>
                        <div className="services-footer-text-wrapper">
                            <span className="services-footer-text"><Link href={'/outsourcingservice'} className="services-footer-text">Outsourcing services</Link></span>
                        </div>
                        <div className="services-footer-text-wrapper">
                            <span className="services-footer-text"><Link href={'/fintechservice'} className="services-footer-text">Fintech</Link></span>
                        </div>
                        <div className="services-footer-text-wrapper">
                            <span className="services-footer-text"><Link href={'/marketing'} className="services-footer-text">Digital marketing</Link></span>
                        </div>
                        <div className="services-footer-text-wrapper">
                            <span className="services-footer-text"><Link href={'/accountingservice'} className="services-footer-text">Accounting and Bookkeeping</Link></span>
                        </div>
                    </div>
                    <div className="footer-social">
                        <div onClick={() => { window.location.href = 'https://twitter.com/Fusionteczs?t=uJL5UpNdZOnYoMZJdQDmvg&s=09' }}>
                            <img src={X.src} className="footer-icon" />
                        </div>
                        <div onClick={() => { window.location.href = 'https://www.facebook.com/fusiontecz?mibextid=ZbWKwL' }}>
                            <img src={Facebook.src} className="footer-icon" />
                        </div>
                        <div onClick={() => { window.location.href = 'https://instagram.com/fusiontecz_solutions?igshid=MWdvcXZnYms2bHVpeQ==' }}>
                            <img src={Instagram.src} className="footer-icon" />
                        </div>
                        <div onClick={() => { window.location.href = 'https://www.linkedin.com/company/fusiontecz-solutions/' }}>
                            <img src={LinkedIn.src} className="footer-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-inner-bottom">
                <span>© Fusiontecz. All Right Reserved.</span>
                <span className="footer-email">info@fusiontecz.com</span>
                <span>Terms and Conditions | <span>Privacy Policy</span></span>
            </div>
        </div>
    </div>
}