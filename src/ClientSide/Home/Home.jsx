// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import ChooseUs from "./ChooseUs/ChooseUs";
import PopularService from "./PopularService/PopularService";
import MembershipHome from "./MembershipHome/MembershipHome";
import DiscoverMoment from "../Event/DiscoverMoment/DiscoverMoment";
import Reels from "./Reels/Reels";
import Footer from "./../Shared/Footer/Footer";
import Events from "./Events/Events";
import Chatbot from "../Shared/Chatbot/Chatbot";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Best Elder Care Company in Kolkata | Elder care | senior care
        </title>
        <meta
          name="description"
          content="Experience the joys of living with our trusted elder care service in Kolkata, where we provide compassionate support to enhance quality of life. Our personalized services are designed to ensure comfort and well-being. It's all about lifestyle—relish the exclusive events specially curated for our seniors."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <HeroSection></HeroSection>
      <ChooseUs></ChooseUs>
      <PopularService></PopularService>
      <Events></Events>
      <MembershipHome></MembershipHome>
      <Reels></Reels>
      <Chatbot></Chatbot>
      <DiscoverMoment></DiscoverMoment>
      <Footer></Footer>
    </div>
  );
};

export default Home;
