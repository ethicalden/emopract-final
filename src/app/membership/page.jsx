// eslint-disable-next-line no-unused-vars
"use client";
import React, { useEffect } from "react";

import Footer from "@/components/common/Footer";
import MembershipHero from "@/components/MemberShip/MemberShipHero";
import MembershipCard from "@/components/MemberShip/MemberShipCard";
import MembershipEvent from "@/components/MemberShip/MemberShipEvent";
import MembershipFaq from "@/components/MemberShip/MemberShipFaq";

const Membership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MembershipHero />
      <MembershipCard />
      <MembershipEvent />
      <MembershipFaq />
      {/* <Chatbot></Chatbot> */}
      <Footer />
    </div>
  );
};

export default Membership;
