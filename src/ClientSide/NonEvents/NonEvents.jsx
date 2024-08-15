// eslint-disable-next-line no-unused-vars
import React from "react";
import EventHeroSection from "../Event/EventHeroSection/EventHeroSection";
import DiscoverMoment from "../Event/DiscoverMoment/DiscoverMoment";
import Footer from "../Shared/Footer/Footer";
import EventGalleryNonEvents from "./EventGalleryNonEvents";
import Reels from "../Home/Reels/Reels";

const NonEvents = () => {
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
