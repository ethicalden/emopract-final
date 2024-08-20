// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import EventHeroSection from "../Event/EventHeroSection/EventHeroSection";
import DiscoverMoment from "../Event/DiscoverMoment/DiscoverMoment";
import Footer from "../Shared/Footer/Footer";
import EventGalleryNonEvents from "./EventGalleryNonEvents";
import Reels from "../Home/Reels/Reels";

const NonEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <EventHeroSection></EventHeroSection>
      <EventGalleryNonEvents></EventGalleryNonEvents>
      <DiscoverMoment></DiscoverMoment>
      <Reels></Reels>
      <Footer></Footer>
    </div>
  );
};

export default NonEvents;
