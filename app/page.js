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
    </div>
  );
};

export default LandingPage;
