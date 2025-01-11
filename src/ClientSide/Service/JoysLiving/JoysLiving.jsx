/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./JoyLiving.css";

const joyItems = [
  {
    link: "/joy-card-four",
    imgSrc: "https://i.ibb.co/fDZTC6q/wdw-1142-66c25b7e935d6.webp",
    LgImg: "https://i.ibb.co/tYDrSmq/comp-66c261211556d.webp",
    title: "Companion",
    subtitle: "People forego so many temptations because ",
    extendedSubtitle:
      "they have work, obligations, responsibilities, duties. A simple chat, maybe over a cup of tea, the quintessential 'adda' that Bengalis have patented and all Indians cherish. At other times, when even words feel like too much work, we might just want another person to share a companionable silence over a favorite television program. Or match steps with one on a walk through the nearby park. Simple demands? Yes, but often difficult to meet in our present day circumstances. Let our team members bring to you the greatest gift of all- the gift of time! Leave the worry to us and have a wonderful time of companionship.",
  },
  {
    link: "/joy-card-one",
    imgSrc: "https://i.ibb.co/XtSvxZh/WDW-0921-1.webp",
    LgImg: "https://i.ibb.co/6msRzQN/outing-66c261c51ba44.webp",
    title: "Outing",
    subtitle: "The mundane matters of everyday life take up a lot of ",
    extendedSubtitle:
      " time and energy They yearn to go out at times but hesitate because they lack the confidence to leave home alone. Our team members will be available on call for visits, long and short. Be it shopping malls, restaurants, religious places…the choice is with our members. Sometimes all that stands between an elder and an invigorating cup of coffee at a trending café is someone to take them there. The wish to have a relaxing drink at a favorite bar is qualified by the concern of getting back safely. Now the worries can depart and the desires rule; now our elders can sit back, drink in life and relish every sip.",
  },

  {
    link: "/joy-card-three",
    imgSrc: "https://i.ibb.co/Tv7T8ms/ent.webp",
    LgImg: "https://i.ibb.co/3WtZn6B/ent-66c2615532d12.webp",
    title: "Entertainment",
    subtitle: "Sometimes we just want someone to sit with us ",
    extendedSubtitle:
      "and make us feel cocooned in companionship. ‘We’ll do it later, when we retire”, that’s the common consolation to offer oneself. But when finally one has the much-awaited leisure, too many years have passed. Even going out to a multiplex for a film or the theatre for a play seems daunting. But what if there was someone always at hand to accompany a senior citizen to an event or an occasion? Suddenly the social gathering at a friend’s place or a garden sale at the nursery doesn’t seem an impossible venture. Team Emopract ensures cherished smiles.",
  },
  {
    link: "/joy-card-four",
    imgSrc: "https://i.ibb.co/x69TdwQ/A7406038-1.webp",
    LgImg: "https://i.ibb.co/x69TdwQ/A7406038-1.webp",
    title: "Tech Help",
    subtitle: "People forego so many temptations because ",
    extendedSubtitle:
      "they have work, obligations, responsibilities, duties. The gap between yesterday’s people and the world today can be bridged by our team. Be it wrestling with new age devices or figuring out social media, nothing needs to be too difficult. Help is at hand to set up OTT services. Necessary apps for delivery and other important services will be downloaded and customised for members. Technology comes with its glitches, and elders need regular assistance to deal with them – from Wi-Fi fix to network issues. And almost every member will use video calls to connect with children and grandchildren abroad. For all such logistical support, our young tech-savvy team is at hand to help. ",
  },
  {
    link: "/joy-card-one",
    imgSrc: "https://i.ibb.co/g6jTWB4/IMG-2009.webp",
    LgImg: "https://i.ibb.co/8rvxrzN/regWork.jpg",
    title: "Regular Work",
    subtitle: "The mundane matters of everyday life take up a lot ",
    extendedSubtitle:
      "of time and energy leaving us utterly drained. How much more challenging must it seem then for the elderly. The daily to-do list seems like an insurmountable hurdle. What if there was someone who would take care of the nitty-gritties with regularity and responsibility? From banking and courier dispatches, we take care of it all. Grooming and salon appointments will be set up by us. Our team members will go grocery shopping with members; they will coordinate the many variables that invade our days.  Reminds you of the shoemaker’s little elves? Well, why shouldn’t life be a fairy tale?.",
  },

  {
    link: "/joy-card-two",
    imgSrc: "https://i.ibb.co/PrnyML3/A7405947.webp",
    LgImg: "https://i.ibb.co/PrnyML3/A7405947.webp",
    title: "Entertainment at Home",
    subtitle: "Every senior citizen you talk to will have a common ",
    extendedSubtitle:
      "grouse. If people are coming over for a meal or a gathering, the once competent host now finds herself unsure. All such worries can be taken care of with a single phone call. A hobby that was once a passion can now fill retirement hours with pure pleasure, thanks to our team. Even if it is something as simple as having someone to play a board game with, watch a film, or read out a favourite book, our Joys of Living stars are always ready to bring you the little Joys of Life. ",
  },
];
// \b
const JoysLiving = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (e, index) => {
    e.preventDefault(); // Prevent Link from navigating
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 425,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sectionGap pt-[0px] md:pt-[0px]">
      <div>
        <h3 className="joysTitle">joys of living</h3>
        <p className="joysPara">
          Staying healthy is certainly the major component of a happy life. But
          it is certainly not the only one. Someone might be perfectly fit, yet
          may not be fine. We does not live by bread alone, and this is true for
          the basics of our existence. Once the primary needs of health and
          safety are met, there still remains the key component of staying well
          and living well – an aspect that is very often overlooked when it
          comes to our senior citizens. They have the time, but no one to spend
          it with; they have the means, but no motivation to utilize them fully.
          We can call this component the Joys of Life – the so called
          trivialities and intangibles that add up to constitute a rich and full
          life. What might these be !! Here at Emopract we plan to address this
          and create smiles all around for the elders -- " Joys of Living "
        </p>
      </div>

      {/* ======== slider cards ========= */}

      {/* mobile */}
      <div className="slider-container md:hidden block">
        <Slider {...settings}>
          {joyItems.map((item, index) => (
            <Link to={""} key={index} className="px-2">
              <div>
                <div className="joyofLivingsSliderImgParent">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                </div>
                <div className="text-center">
                  <h3 className="joysFirstSliderTitle">{item.title}</h3>
                  <p className="joysFirstSliderSubtitle text-center">
                    {item.subtitle}
                    <span>
                      {expandedIndex === index && (
                        <p className="joysExtendedSubtitle">
                          {item.extendedSubtitle}
                        </p>
                      )}
                      {expandedIndex !== index && (
                        <button
                          className="joysFirstSliderMorebtn cursor-pointer"
                          onClick={(e) => handleReadMoreClick(e, index)}
                        >
                          Read More
                        </button>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>

      {/* large */}
      <div className="slider-container hidden md:block">
        <Slider {...settings}>
          {joyItems.map((item, index) => (
            <Link to={""} key={index} className="px-2">
              <div>
                <div className="joyofLivingsSliderImgParent">
                  <img
                    className="h-full w-full object-cover rounded-[10px]"
                    src={item.LgImg}
                    alt={item.title}
                  />
                </div>
                <div className="text-center">
                  <h3 className="joysFirstSliderTitle">{item.title}</h3>
                  <p className="joysFirstSliderSubtitle text-center">
                    {item.subtitle}
                    <span>
                      {expandedIndex === index && (
                        <p className="joysExtendedSubtitle">
                          {item.extendedSubtitle}
                        </p>
                      )}
                      {expandedIndex !== index && (
                        <button
                          className="joysFirstSliderMorebtn cursor-pointer"
                          onClick={(e) => handleReadMoreClick(e, index)}
                        >
                          Read More
                        </button>
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default JoysLiving;
