// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import companionSrc from "../../../../public/Images/Service/comp.jpg";
// import entertainmentSrc from "../../../../public/Images/Service/ent.png";
// import entHomeSrc from "../../../../public/Images/Service/entHome.jpg";
// import outingSrc from "../../../../public/Images/Service/outing.jpg";
// import regWorkSrc from "../../../../public/Images/Service/regWork.jpg";
// import techHelp from "../../../../public/Images/Service/techHelp.png";

// mobile
// import companion from "../../../../public/Images/HomePopular/WDW_1142.jpg";
// import regularWork from "../../../../public/Images/HomePopular/IMG_2009.jpg";
// import tech from "../../../../public/Images/HomePopular/A7406038.png";
// import outing from "../../../../public/Images/HomePopular/WDW_0921.jpg";
// import enterHome from "../../../../public/Images/HomePopular/A7405947.png";
// import enter from "../../../../public/Images/Service/ent.png";

const joyItems = [
  {
    link: "/joy-card-four",
    imgSrc: "https://i.ibb.co/JvRpKxS/WDW-1142.jpg",
    LgImg: "https://i.ibb.co/tYDrSmq/comp-66c261211556d.webp",
    title: "Companion",
    subtitle: "People forego so many temptations because ",
    extendedSubtitle:
      "they have work, obligations, responsibilities, duties. A simple chat, maybe over a cup of tea, the quintessential 'adda' that Bengalis have patented and all Indians cherish. At other times, when even words feel like too much work, we might just want another person to share a companionable silence over a favorite television program. Or match steps with one on a walk through the nearby park. Simple demands? Yes, but often difficult to meet in our present day circumstances. Let our team members bring to you the greatest gift of all- the gift of time! Leave the worry to us and have a wonderful time of companionship.",
  },
  {
    link: "/joy-card-one",
    imgSrc: "https://i.ibb.co/423h2Lg/WDW-0921.jpg",
    LgImg: "https://i.ibb.co/6msRzQN/outing-66c261c51ba44.webp",
    title: "Outing",
    subtitle: "The mundane matters of everyday life take up a lot of ",
    extendedSubtitle:
      " time and energy They yearn to go out at times but hesitate because they lack the confidence to leave home alone. Our team members will be available on call for visits, long and short. Be it shopping malls, restaurants, religious places…the choice is with our members. Sometimes all that stands between an elder and an invigorating cup of coffee at a trending café is someone to take them there. The wish to have a relaxing drink at a favorite bar is qualified by the concern of getting back safely. Now the worries can depart and the desires rule; now our elders can sit back, drink in life and relish every sip.",
  },

  {
    link: "/joy-card-three",
    imgSrc: "https://i.ibb.co/gmnnD9M/ent.png",
    LgImg: "https://i.ibb.co/3WtZn6B/ent-66c2615532d12.webp",
    title: "Entertainment",
    subtitle: "Sometimes we just want someone to sit with us ",
    extendedSubtitle:
      "and make us feel cocooned in companionship. ‘We’ll do it later, when we retire”, that’s the common consolation to offer oneself. But when finally one has the much-awaited leisure, too many years have passed. Even going out to a multiplex for a film or the theatre for a play seems daunting. But what if there was someone always at hand to accompany a senior citizen to an event or an occasion? Suddenly the social gathering at a friend’s place or a garden sale at the nursery doesn’t seem an impossible venture. Team Emopract ensures cherished smiles.",
  },
  {
    link: "/joy-card-four",
    imgSrc: "https://i.ibb.co/H7nxFwq/A7406038.png",
    LgImg: "https://i.ibb.co/x69TdwQ/A7406038-1.webp",
    title: "Tech Help",
    subtitle: "People forego so many temptations because ",
    extendedSubtitle:
      "they have work, obligations, responsibilities, duties. The gap between yesterday’s people and the world today can be bridged by our team. Be it wrestling with new age devices or figuring out social media, nothing needs to be too difficult. Help is at hand to set up OTT services. Necessary apps for delivery and other important services will be downloaded and customised for members. Technology comes with its glitches, and elders need regular assistance to deal with them – from Wi-Fi fix to network issues. And almost every member will use video calls to connect with children and grandchildren abroad. For all such logistical support, our young tech-savvy team is at hand to help. ",
  },
  {
    link: "/joy-card-one",
    imgSrc: "https://i.ibb.co/ZcntB06/IMG-2009.jpg",
    LgImg: "https://i.ibb.co/f0jwhyg/regwork-66c262946005f.webp",
    title: "Regular Work",
    subtitle: "The mundane matters of everyday life take up a lot ",
    extendedSubtitle:
      "of time and energy leaving us utterly drained. How much more challenging must it seem then for the elderly. The daily to-do list seems like an insurmountable hurdle. What if there was someone who would take care of the nitty-gritties with regularity and responsibility? From banking and courier dispatches, we take care of it all. Grooming and salon appointments will be set up by us. Our team members will go grocery shopping with members; they will coordinate the many variables that invade our days.  Reminds you of the shoemaker’s little elves? Well, why shouldn’t life be a fairy tale?.",
  },

  {
    link: "/joy-card-two",
    imgSrc: "https://i.ibb.co/sCvYVxn/A7405947.png",
    LgImg: "https://i.ibb.co/PrnyML3/A7405947.webp",
    title: "Entertainment at Home",
    subtitle: "Every senior citizen you talk to will have a common ",
    extendedSubtitle:
      "grouse. If people are coming over for a meal or a gathering, the once competent host now finds herself unsure. All such worries can be taken care of with a single phone call. A hobby that was once a passion can now fill retirement hours with pure pleasure, thanks to our team. Even if it is something as simple as having someone to play a board game with, watch a film, or read out a favourite book, our Joys of Living stars are always ready to bring you the little Joys of Life. ",
  },
];
// b
const PopularService = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMoreClick = (e, index) => {
    e.preventDefault(); // Prevent Link from navigating
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  var settingsLarge = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };

  return (
    <div>
      <div className="">
        <div className="sectionGap md:mb-[100px] xs:mb-[0px]">
          <div className="md:text-center md:w-full">
            <p className="popularSmallText">Our Services</p>
            <h2 className="popularSmallTitle">
              experience the pleasure of life
            </h2>
            <p className="popularDes md:hidden">
              Joys of Life – the so-called trivialities and intangibles that add
              up to constitute a rich and full life, is our unique offering to
              our esteemed members. Our wellness buddies bring comfort and peace
              of mind with proactive care for health-related ailments.
            </p>
            <p className="popularDesLarge hidden md:block">
              Joys of Life – the so-called trivialities and intangibles that add
              up to constitute a rich and full life, is our unique offering to
              our esteemed members. Our wellness buddies bring comfort and peace
              of mind with proactive care for health-related ailments.
            </p>
          </div>
        </div>

        {/* mobile slider  */}
        <div className='md:hidden block bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719506684/Emopract/cardBg_g8b4cu.png")] bg-no-repeat bg-cover bg-center h-[1200px] '>
          <div className="w-[366px]  mx-auto">
            <div className="slider-container ">
              <Slider {...settings}>
                {/* Companion */}
                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src={
                        "https://i.ibb.co/fDZTC6q/wdw-1142-66c25b7e935d6.webp"
                      }
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Companion</h2>
                    <p className="popularSlidertext">
                      Sometimes we just want someone to sit with us and make
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
                {/* Outing */}
                <div className="">
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src={"https://i.ibb.co/XtSvxZh/WDW-0921-1.webp"}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Outing</h2>
                    <p className="popularSlidertext">
                      Every senior citizen you talk to will have a common
                      grouse.
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Entertainment*/}
                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src={"https://i.ibb.co/Tv7T8ms/ent.webp"}
                      alt=""
                    />
                  </div>

                  <div className="text-center">
                    <h2 className="popularSlidertitle">Entertainment</h2>
                    <p className="popularSlidertext">
                      People forego many temptations because they have work
                    </p>

                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Tech Help */}
                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src={"https://i.ibb.co/x69TdwQ/A7406038-1.webp"}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Tech Help</h2>
                    <p className="popularSlidertext">
                      Today’s world runs on Wi-Fi, and apps rule our world.
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Regular Work */}
                <div className="">
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src={"https://i.ibb.co/g6jTWB4/IMG-2009.webp"}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">Regular Work</h2>
                    <p className="popularSlidertext">
                      The mundane matters of everyday life take up a lot of
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Entertainment at home */}
                <div>
                  <div className="h-[350px] md:h-full">
                    <img
                      className="h-full w-full object-cover rounded-[10px]"
                      src={"https://i.ibb.co/PrnyML3/A7405947.webp"}
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="popularSlidertitle">
                      Entertainment at Home
                    </h2>
                    <p className="popularSlidertext">
                      Even within their home, challenges often flummox
                    </p>
                    <Link to="/service">
                      <button className="popularReadMoreBtn underline-offset-8">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>

          <div className="">
            <div className="px-[36px] pt-[40px]">
              <p className="getIntouchSmall">Get In Touch</p>
              <h3 className="getTitle">free consultation</h3>
              <p className="getParaText">
                We understand that you may need more details on our services and
                we care to clarify all of your doubts. Please reach out and help
                us to schedule a call with you.
              </p>
            </div>
            <div className="relative">
              <div className="getinTmgParent">
                <img
                  className="w-full h-full object-cover rounded-[10px]"
                  src="https://i.ibb.co/605DMmX/homeourservicesfreecon-66c260b27b8a4.webp"
                  alt=""
                />
              </div>
              <div className="absolute top-[165px] w-full ">
                <div className="bg-[#F2F2F2] mx-[36px]  rounded-[10px]">
                  <h3 className="eventCardTitle text-[#7EA254]">
                    request for a session!
                  </h3>
                  <form className="space-y-[20px] mt-[15px]">
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Full Name
                      </label>
                      <input className="contactInpufeild " type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Phone Number
                      </label>
                      <input className="contactInpufeild " type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Email Address
                      </label>
                      <input className="contactInpufeild " type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        {" "}
                        Message
                      </label>
                      <input className="contactInpufeild " type="text" />
                    </div>

                    <div className="inputParent pt-[30px] pb-[25px]">
                      <button className="contactSendBtn bg-[#7EA254]  text-white">
                        Send Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* large slider  */}
        <div className="slider-container hidden md:block">
          <Slider {...settingsLarge}>
            {joyItems.map((item, index) => (
              <div key={index} className="px-2">
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
