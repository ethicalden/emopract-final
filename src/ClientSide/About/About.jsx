// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AboutHero from "./AboutHero/AboutHero";
import AboutUs from "./AboutUs/AboutUs";
import AboutOurStory from "./AboutOurStory/AboutOurStory";
import AboutOurTeam from "./AboutOurTeam/AboutOurTeam";
import Footer from "../Shared/Footer/Footer";
import AboutOurMission from "./AboutOurMission/AboutOurMission";
import Chatbot from "../Shared/Chatbot/Chatbot";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero></AboutHero>
      <AboutUs></AboutUs>
      <AboutOurStory></AboutOurStory>
      <AboutOurMission></AboutOurMission>
      <AboutOurTeam></AboutOurTeam>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
};

export default About;
