// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import EventHeroSection from "./EventHeroSection/EventHeroSection";
import EventGallery from "./EventGallery/EventGallery";
import DiscoverMoment from "./DiscoverMoment/DiscoverMoment";
import Footer from "./../Shared/Footer/Footer";
import Chatbot from "../Shared/Chatbot/Chatbot";
import Reels from "../Home/Reels/Reels";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <EventHeroSection></EventHeroSection>
      <EventGallery></EventGallery>
      <DiscoverMoment></DiscoverMoment>
      <Reels></Reels>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
};

export default Event;
