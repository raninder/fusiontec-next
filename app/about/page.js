'use client'
import AboutCompOne from "@/components/aboutuscomp/aboutcompone/AboutCompOne";
import AboutCompThree from "@/components/aboutuscomp/aboutcompthree/AboutCompThree";
import AboutCompTwo from "@/components/aboutuscomp/aboutcomptwo/AboutCompTwo";
import ContactComp from "@/components/contactcomp/ContactComp";

export default function AboutPage() {
    return (
      <div>
        <AboutCompOne/>
        <AboutCompTwo/>
        <AboutCompThree/>
        <ContactComp/>
      </div>
    );
  }