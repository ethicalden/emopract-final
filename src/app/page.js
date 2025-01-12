"use client";
import Chatbot from "@/components/common/Chatboat";
import Footer from "@/components/common/Footer";
import Reels from "@/components/common/Reels";
import ChooseUs from "@/components/Home/ChooseUs/ChooseUs";
import DiscoverMoment from "@/components/Home/DiscoverMoment";
import Events from "@/components/Home/Events";
import HeroSection from "@/components/Home/HeroSection";
import MembershipHome from "@/components/Home/MembershipHome";
import PopularService from "@/components/Home/PopularService";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ChooseUs />
      <PopularService />
      <Events />
      <MembershipHome />
      <Reels />
      <Chatbot />
      <DiscoverMoment />
      <Footer />
    </div>
  );
}
