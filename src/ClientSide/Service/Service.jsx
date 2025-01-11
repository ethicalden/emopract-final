// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import ServiceHero from "./ServiceHero/ServiceHero";
import OurService from "./OurService/OurService";
import JoysLiving from "./JoysLiving/JoysLiving";
import Weelness from "./Weelness/Weelness";
import Footer from "../Shared/Footer/Footer";
import Chatbot from "../Shared/Chatbot/Chatbot";
import { Helmet } from "react-helmet";

const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Senior Care Services | Senior Care Kolkata | Senior Care Giving
        </title>
        <meta
          name="description"
          content="Looking for compassionate and reliable senior care services in Kolkata? Our expert caregivers provide personalized elderly care to ensure the comfort, safety, and well-being of your loved ones. With years of experience in senior caregiving, we offer a wide range of services, including daily assistance, medical support, and companionship tailored to the unique needs of each individual. Whether it's in-home care, specialized medical attention, or support for day-to-day activities, we are dedicated to enhancing the quality of life for seniors. Choose us for trusted, professional senior care in Kolkata and give your family the peace of mind they deserve."
        />

        <meta
          name="google-site-verification"
          content="vdk28t0ORLprYTAp4Y7hKYkxnRKh3kUMkq7a1-Db30k"
        />
        <link
          rel="icon"
          href="https://i.ibb.co/hCj5nHG/icon-66d577f2b87d4.webp"
        />
      </Helmet>
      <ServiceHero></ServiceHero>
      <OurService></OurService>
      <JoysLiving></JoysLiving>
      <Weelness></Weelness>
      {/* <Chatbot></Chatbot> */}
      <Footer></Footer>
    </div>
  );
};

export default Service;
