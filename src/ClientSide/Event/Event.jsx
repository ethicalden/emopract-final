// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import EventHeroSection from "./EventHeroSection/EventHeroSection";
import EventGallery from "./EventGallery/EventGallery";
import Footer from "./../Shared/Footer/Footer";
import Reels from "../Home/Reels/Reels";
import Discover from "./Discover";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <EventHeroSection></EventHeroSection>
      <EventGallery></EventGallery>
      {/* <DiscoverMoment></DiscoverMoment> */}
      <Discover></Discover>
      <Reels></Reels>
      {/* <Chatbot></Chatbot> */}
      <Footer></Footer>
    </div>
  );
};

export default Event;
