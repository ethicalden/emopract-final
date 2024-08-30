// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AboutHero from "./AboutHero/AboutHero";
import AboutUs from "./AboutUs/AboutUs";
import AboutOurStory from "./AboutOurStory/AboutOurStory";
import AboutOurTeam from "./AboutOurTeam/AboutOurTeam";
import Footer from "../Shared/Footer/Footer";
import AboutOurMission from "./AboutOurMission/AboutOurMission";
import Chatbot from "../Shared/Chatbot/Chatbot";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>partho</title>
        <meta
          name="description"
          content="Experience the joys of living with our trusted elder care service in Kolkata, where we provide compassionate support to enhance quality of life. Our personalized services are designed to ensure comfort and well-being. It's all about lifestyle—relish the exclusive events specially curated for our seniors."
        />
      </Helmet>
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
