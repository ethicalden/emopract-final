"use client";

import Footer from "@/components/common/Footer";
import ContactFaq from "@/components/NacbarContact/ContactFaq";
import NavbarContact from "@/components/NacbarContact/NavbarContact";
import ContactEvent from "@/components/NacbarContact/NavbarEvent";
// eslint-disable-next-line no-unused-vars

import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarContact />
      <ContactEvent />
      <ContactFaq />
      {/* <Chatbot></Chatbot> */}
      <Footer />
    </div>
  );
};

export default Contact;
