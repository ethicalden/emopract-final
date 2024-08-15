/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./Weelness.css";

const joyItems = [
  {
    link: "/joy-card-one",
    imgSrc: "https://i.ibb.co/Twvnxvh/services-Wellness1.png",
    title: "Medical Support",
    // subtitle: "The mundane matters of everyday life take up a lot of time and energy"
  },
  {
    link: "/joy-card-two",
    imgSrc: "https://i.ibb.co/xfpNh0B/services-Wellness2.png",
    title: "Medical Record",
    // subtitle: "Maintaining a healthy lifestyle with regular exercise and proper diet"
  },
  {
    link: "/joy-card-three",
    imgSrc: "https://i.ibb.co/S3WKygw/services-Wellness3.png",
    title: "Wellness",
    // subtitle: "Engaging in social activities to stay connected and mentally active"
  },
  {
    link: "/joy-card-four",
    imgSrc:
      "https://i.ibb.co/CQpvSvX/Whats-App-Image-2024-07-30-at-1-42-05-PM.jpg",
    title: "24 x 7 Support IVR",
    // subtitle: "Pursuing hobbies and interests to enrich life experiences"
  },
  {
    link: "/joy-card-five",
    imgSrc: "https://i.ibb.co/pxpLdzk/ambulance.jpg",
    title: "Emergency Assist Ambulance",
    // subtitle: "Pursuing hobbies and interests to enrich life experiences"
  },
];

const Weelness = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sectionGap ">
      <div>
        <h3 className="joysTitle">wellness</h3>
        <p className="joysPara">
          The pivot of our existence. It is the state of optimum health – both
          of body and mind – that is crucial for a person to live fully and
          freely. We all want perfect health, but an endless litany of ailments
          plagues us day-in and day-out. Maybe not warranting hospitalization,
          but fretting us enough to take away our comfort and peace of mind.
          With the advancing years, these complaints increase exponentially, and
          are often the primary reasons for the lack of happiness of our elders.
          The Wellness component of Emopract will engage with this aspect.
        </p>
      </div>

      {/* ======== slider cards ========= */}
      <div className="slider-container">
        <Slider {...settings}>
          {joyItems.map((item, index) => (
            <div key={index} className="px-2">
              <div>
                <div className="joysSliderImgParent">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
                <div className="text-center">
                  <h3 className="joysFirstSliderTitle">{item.title}</h3>
                  <p className="joysFirstSliderSubtitle">{item.subtitle}</p>
                  {/* <button className='joysFirstSliderMorebtn cursor-pointer'>Read More</button> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Weelness;
