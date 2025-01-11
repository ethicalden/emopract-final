// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import MembershipHero from "./MembershipHero/MembershipHero";
import MembershipCard from "./MembershipCard/MembershipCard";
import MembershipFaq from "./MembershipFaq/MembershipFaq";
import Footer from "./../Shared/Footer/Footer";

import Chatbot from "../Shared/Chatbot/Chatbot";
import MembershipEvent from "./MembershipEvent/MembershipEvent";

const Membership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <MembershipHero></MembershipHero>
      <MembershipCard></MembershipCard>
      <MembershipEvent></MembershipEvent>
      <MembershipFaq></MembershipFaq>
      {/* <Chatbot></Chatbot> */}
      <Footer></Footer>
    </div>
  );
};

export default Membership;
