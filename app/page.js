import styles from "./page.module.css";
import React from 'react';
import LandingCompOne from "@/components/landingcomp/landingcompone/LandingCompOne";
import LandingCompTwo from "@/components/landingcomp/landingcomptwo/LandingCompTwo";
import LandingCompThree from "@/components/landingcomp/landingcompthree/LandingCompThree";
import LandingCompFour from "@/components/landingcomp/landingcompfour/LandingCompFour";

const LandingPage = () => {
  return (
    <div>
       <LandingCompOne/>
       <LandingCompTwo/>
       <LandingCompThree/>
       <LandingCompFour/>
    </div>
  );
};

export default LandingPage;
