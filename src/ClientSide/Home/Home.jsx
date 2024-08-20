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

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
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
