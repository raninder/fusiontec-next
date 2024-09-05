import styles from "./page.module.css";
import React from 'react';
import LandingCompOne from "@/components/landingcomp/landingcompone/LandingCompOne";
import LandingCompTwo from "@/components/landingcomp/landingcomptwo/LandingCompTwo";
import LandingCompThree from "@/components/landingcomp/landingcompthree/LandingCompThree";

const LandingPage = () => {
  return (
    <div>
       <LandingCompOne/>
       <LandingCompTwo/>
       <LandingCompThree/>
    </div>
  );
};

export default LandingPage;
