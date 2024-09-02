import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import HeroSection from "./HeroSection/HeroSection";
import ChooseUs from "./ChooseUs/ChooseUs";
import PopularService from "./PopularService/PopularService";
import MembershipHome from "./MembershipHome/MembershipHome";
import DiscoverMoment from "../Event/DiscoverMoment/DiscoverMoment";
import Reels from "./Reels/Reels";
import Footer from "./../Shared/Footer/Footer";
import Events from "./Events/Events";
import Chatbot from "../Shared/Chatbot/Chatbot";
// ---
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Best Elder Care Service in Kolkata | Elder care | senior care
        </title>
        <meta
          name="description"
          content="Experience joys of living and wellness with emopract - the most trusted professional elder care in Kolkata, we provide both medical and non-medical eldercare service to enhance the quality of life."
        />
        <link
          rel="icon"
          href="https://i.ibb.co/hCj5nHG/icon-66d577f2b87d4.webp"
        />
      </Helmet>
      <HeroSection />
      <ChooseUs />
      <PopularService />
      <Events />
      <MembershipHome />
      <Reels />
      {/* <Chatbot /> */}
      <DiscoverMoment />
      <Footer />
    </div>
  );
};

export default Home;
