/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
// import slideOne from "../../../../public/Images/slides/slide1.jpg";
// import slideTwo from "../../../../public/Images/slides/slide2.jpg";
// import slideThree from "../../../../public/Images/slides/slide3.jpg";
import Navbar from "../../Shared/Navbar/Navbar";
// import Home1 from "../../../../public/Images/Home/Home1.jpg";
// import Home2 from "../../../../public/Images/HomePopular/Home2.jpg";
// import Home3 from "../../../../public/Images/HomePopular/H3.jpg";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar></Navbar>
      {/* mobile */}
      {/* Slider Container */}
      <div className="slider-container  md:hidden block ">
        <Slider {...settings}>
          <div className="relative ">
            <div
              style={{
                backgroundImage: `url(${"https://i.ibb.co/z516r3G/Home1.jpg"})`,
              }}
              className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] md:h-[80vh]   lg:h-[100vh] 2xl:h-[100vh]"
            ></div>
          </div>
          {/* slider two */}
          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${"https://i.ibb.co/2h94zH7/Home2.jpg"})`,
              }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] md:h-[80vh] xs:h-[65vh]  lg:h-[100vh]  "
            ></div>
          </div>

          {/* slider three */}
          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${"https://i.ibb.co/Kbw0bm7/H3.jpg"})`,
              }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] md:h-[80vh]  xs:h-[65vh] lg:h-[80vh]  "
            ></div>
          </div>
        </Slider>
      </div>

      {/* Slider Container big screen*/}
      <div className="slider-container  hidden md:block ">
        <Slider {...settings}>
          <div className="relative ">
            <div
              style={{
                backgroundImage: `url(${"https://i.ibb.co/z6BtGRD/slide1.jpg"})`,
              }}
              className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]   md:h-[70vh] lg:h-[70vh]  xl:h-[100vh] 2xl:h-[100vh]"
            ></div>
          </div>
          {/* slider two */}
          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${"https://i.ibb.co/JKxcRp2/slide2.jpg"})`,
              }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  xs:h-[65vh] md:h-[70vh] lg:h-[70vh]   xl:h-[100vh] 2xl:h-[100vh]"
            ></div>
          </div>

          {/* slider three */}
          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${"https://i.ibb.co/m6f44xh/slide3.jpg"})`,
              }}
              className="
          bg-no-repeat bg-center bg-cover w-[100%] h-[80vh]  xs:h-[65vh] md:h-[70vh] lg:h-[70vh]  xl:h-[100vh] 2xl:h-[100vh]"
            ></div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
