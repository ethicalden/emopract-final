"use client";
// eslint-disable-next-line no-unused-vars

import Footer from "@/components/common/Footer";
import EventHeroSection from "@/components/Events/EventHeroSection";
import DiscoverMoment from "@/components/Home/DiscoverMoment";
import Reels from "@/components/Home/Reels";
import EventGalleryNonEvents from "@/components/NonEventGallery/NonEventGallery";
import React, { useEffect } from "react";

const NonEvents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <EventHeroSection />
      <EventGalleryNonEvents />
      <DiscoverMoment />
      <Reels />
      <Footer />
    </div>
  );
};

export default NonEvents;
