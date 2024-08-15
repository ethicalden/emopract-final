// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ServiceHero from "./ServiceHero/ServiceHero";
import OurService from "./OurService/OurService";
import JoysLiving from "./JoysLiving/JoysLiving";
import Weelness from "./Weelness/Weelness";
import Footer from "../Shared/Footer/Footer";
import Chatbot from "../Shared/Chatbot/Chatbot";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ServiceHero></ServiceHero>
      <OurService></OurService>
      <JoysLiving></JoysLiving>
      <Weelness></Weelness>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </div>
  );
};

export default Service;
