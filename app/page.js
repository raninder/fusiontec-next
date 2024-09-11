'use client'
import styles from "./page.module.css";
import React from 'react';
import LandingCompOne from "@/components/landingcomp/landingcompone/LandingCompOne";
import LandingCompTwo from "@/components/landingcomp/landingcomptwo/LandingCompTwo";
import LandingCompThree from "@/components/landingcomp/landingcompthree/LandingCompThree";
import LandingCompFour from "@/components/landingcomp/landingcompfour/LandingCompFour";
import LandingCompFive from "@/components/landingcomp/landingcompfive/LandingCompFive";
import LandingCompSix from "@/components/landingcomp/landingcompsix/LandingCompSix";
import LandingCompSeven from "@/components/landingcomp/landingcompseven/LandingCompSeven";
import ReviewComp from "@/components/landingcomp/reviewcomp/ReviewComp";
import ContactComp from "@/components/contactcomp/ContactComp";
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Logo from "../public/assets/images/logo512.png";

const LandingPage = () => {
  return (
    <div>
       <LandingCompOne/>
       <LandingCompTwo/>
       <LandingCompThree/>
       <LandingCompFour/>
       <LandingCompFive/>
       <LandingCompSix/>
       <LandingCompSeven/>
       <ReviewComp/>
       <ContactComp/>
       <FloatingWhatsApp avatar={Logo.src} phoneNumber={'+917706868000'} accountName="Fusiontecz" style={{
            height: "10%"
           }} />
    </div>
  );
};

export default LandingPage;
