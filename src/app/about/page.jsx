"use client";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
// import AboutOurTeam from "./AboutOurTeam/AboutOurTeam";
import AboutHero from "@/components/About/AboutHero";
import AboutUs from "@/components/About/AboutUs";
import AboutOurStory from "@/components/About/AboutOurStory";
import AboutOurMission from "@/components/About/AboutOurMission";
import Footer from "@/components/common/Footer";
import AboutOurTeam from "@/components/About/AboutOurTeam";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <AboutOurStory />
      <AboutOurMission />
      <AboutOurTeam />
      {/* <Chatbot></Chatbot> */}
      <Footer />
    </div>
  );
};

export default About;
