// eslint-disable-next-line no-unused-vars
"use client";
import React, { useEffect } from "react";

import Footer from "@/components/common/Footer";
import ServiceHero from "@/components/Service/ServiceHero";
import OurService from "@/components/Service/OurService";
import JoysLiving from "@/components/Service/JoysLiving";
import Weelness from "@/components/Service/Weelness";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ServiceHero />
      <OurService />
      <JoysLiving />
      <Weelness />
      {/* <Chatbot></Chatbot> */}
      <Footer />
    </div>
  );
};

export default Service;
