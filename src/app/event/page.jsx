// eslint-disable-next-line no-unused-vars
"use client";
import Footer from "@/components/common/Footer";
import Discover from "@/components/Events/Discover";
import EventGallery from "@/components/Events/EventGallery";
import EventHeroSection from "@/components/Events/EventHeroSection";
import Reels from "@/components/Home/Reels";
import React, { useEffect } from "react";

const Event = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <EventHeroSection />

      <EventGallery />
      <Discover />
      <Reels />
      {/*  <Chatbot></Chatbot>  */}
      <Footer />
    </div>
  );
};

export default Event;
