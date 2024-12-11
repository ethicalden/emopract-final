// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState({
    from_name: "",
    from_number: "",
    from_email: "",
    from_message: "",
  });

  const [isModalVisible, setModalVisible] = useState(false);
  const [isFormValid, setFormValid] = useState(false);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Check if all fields are filled
    const isValid = Object.values(updatedFormData).every(
      (field) => field.trim() !== ""
    );
    setFormValid(isValid);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm("service_bxcnts6", "template_he6i3oh", form.current, {
        publicKey: "VUWc7PqsSgNMXsdOL",
      })
      .then(
        () => {
          setModalVisible(true); // Show the modal on success
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Function to handle the "Got it" button click
  const handleGotItClick = () => {
    form.current.reset();
    setModalVisible(false);
  };

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
        <div className="sectionGap  xs:mb-[0px]">
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
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-[20px] mt-[15px]"
                  >
                    <div className="inputParent">
                      <label
                        className="formTitle text-black"
                        htmlFor="full_name"
                      >
                        Full Name
                      </label>
                      <input
                        className="contactInpufeild "
                        type="text"
                        name="from_name"
                        id="full_name"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="inputParent">
                      <label
                        className="formTitle text-black"
                        htmlFor="mobile_number"
                      >
                        Phone Number
                      </label>
                      <input
                        className="contactInpufeild "
                        type="text"
                        name="from_number"
                        id="mobile_number"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        className="contactInpufeild "
                        type="email"
                        name="from_email"
                        id="email"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="inputParent">
                      <label
                        className="formTitle text-black"
                        htmlFor="from_message"
                      >
                        {" "}
                        Message
                      </label>
                      <input
                        className="contactInpufeild "
                        type="text"
                        name="from_message"
                        id="from_message"
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="inputParent pt-[30px] pb-[25px]">
                      {/* <button className="contactSendBtn bg-[#7EA254]  text-white">
                        Send Now
                      </button> */}
                      <input
                        className={`contactSendBtn bg-[#7EA254]  text-white ${
                          isFormValid ? "" : "cursor-not-allowed opacity-50"
                        }`}
                        disabled={!isFormValid}
                        type="submit"
                        value="Send Now"
                      />

                      {isModalVisible && (
                        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
                              viewBox="0 0 320.591 320.591"
                              onClick={handleGotItClick}
                            >
                              <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"
                              ></path>
                              <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"
                              ></path>
                            </svg>

                            <div className="my-8 text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-14 shrink-0 fill-green-500 inline"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-7.965-8.18-21.105-8.481-29.285-.515-8.181 7.965-8.481 21.106-.515 29.285l78.021 80.129c3.94 4.046 9.367 6.305 15.041 6.314.015 0 .031 0 .046-.001 5.678-.013 11.115-2.297 15.045-6.351l144.702-141.528c8.318-7.899 8.674-21.038.775-29.343z"
                                  data-original="#000000"
                                ></path>
                                <path
                                  d="M256 0C114.848 0 0 114.852 0 256s114.848 256 256 256c141.153 0 256-114.852 256-256S397.152 0 256 0zm0 472.727c-119.387 0-216.727-97.34-216.727-216.727S136.613 39.273 256 39.273 472.727 136.613 472.727 256 375.387 472.727 256 472.727z"
                                  data-original="#000000"
                                ></path>
                              </svg>
                              <h3 className="text-xl font-[700] leading-normal my-6">
                                Success!
                              </h3>
                              <p className="text-sm leading-[1.5] text-gray-500 font-[500]">
                                We have received your request and will get back
                                to you shortly.
                              </p>
                            </div>
                            <button
                              className="contactSendBtn"
                              onClick={handleGotItClick}
                            >
                              Got it
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* large slider  */}

        <div className=" hidden md:block ">
          <div className="slider-container">
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

          <div className=' hidden md:block bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719506684/Emopract/cardBg_g8b4cu.png")] bg-no-repeat bg-cover bg-center xl:h-[650px] 2xl:h-[800px]  lg:h-[660px] md:h-[655px]'>
            <div className="sectionGap pt-[15px]   flex flex-row justify-center items-center xl:gap-x-[100px]   lg:gap-x-[50px] md:gap-x-[50px]">
              <div className="  w-full pt-[50px]">
                <div
                  className="bg-[#F2F2F2] pt-[50px] 2xl:max-w-[800px] xl:max-w-[500px]  
                 mx-auto  rounded-[10px]"
                >
                  <h3 className="eventCardTitle   text-[#7EA254]">
                    request for a session!
                  </h3>
                  {/* <form className="space-y-[20px] mt-[15px]">
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Full Name
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Phone Number
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        Email Address
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="">
                        {" "}
                        Message
                      </label>
                      <input className="contactInpufeild" type="text" />
                    </div>

                    <div className="inputParent pt-[30px] pb-[15px]">
                      <button className="contactSendBtn bg-[#7EA254] text-white">
                        Send Now
                      </button>
                    </div>
                  </form> */}
                  <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="space-y-[20px] mt-[15px]"
                  >
                    <div className="inputParent">
                      <label
                        className="formTitle text-black"
                        htmlFor="full_name"
                      >
                        Full Name
                      </label>
                      <input
                        className="contactInpufeild "
                        type="text"
                        name="from_name"
                        id="full_name"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="inputParent">
                      <label
                        className="formTitle text-black"
                        htmlFor="mobile_number"
                      >
                        Phone Number
                      </label>
                      <input
                        className="contactInpufeild "
                        type="text"
                        name="from_number"
                        id="mobile_number"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="inputParent">
                      <label className="formTitle text-black" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        className="contactInpufeild "
                        type="email"
                        name="from_email"
                        id="email"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="inputParent">
                      <label
                        className="formTitle text-black"
                        htmlFor="from_message"
                      >
                        {" "}
                        Message
                      </label>
                      <input
                        className="contactInpufeild "
                        type="text"
                        name="from_message"
                        id="from_message"
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="inputParent pt-[30px] pb-[25px]">
                      {/* <button className="contactSendBtn bg-[#7EA254]  text-white">
                        Send Now
                      </button> */}
                      <input
                        className={`contactSendBtn bg-[#7EA254]  text-white ${
                          isFormValid ? "" : "cursor-not-allowed opacity-50"
                        }`}
                        disabled={!isFormValid}
                        type="submit"
                        value="Send Now"
                      />

                      {isModalVisible && (
                        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
                              viewBox="0 0 320.591 320.591"
                              onClick={handleGotItClick}
                            >
                              <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"
                              ></path>
                              <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"
                              ></path>
                            </svg>

                            <div className="my-8 text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-14 shrink-0 fill-green-500 inline"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-7.965-8.18-21.105-8.481-29.285-.515-8.181 7.965-8.481 21.106-.515 29.285l78.021 80.129c3.94 4.046 9.367 6.305 15.041 6.314.015 0 .031 0 .046-.001 5.678-.013 11.115-2.297 15.045-6.351l144.702-141.528c8.318-7.899 8.674-21.038.775-29.343z"
                                  data-original="#000000"
                                ></path>
                                <path
                                  d="M256 0C114.848 0 0 114.852 0 256s114.848 256 256 256c141.153 0 256-114.852 256-256S397.152 0 256 0zm0 472.727c-119.387 0-216.727-97.34-216.727-216.727S136.613 39.273 256 39.273 472.727 136.613 472.727 256 375.387 472.727 256 472.727z"
                                  data-original="#000000"
                                ></path>
                              </svg>
                              <h3 className="text-xl font-[700] leading-normal my-6">
                                Success!
                              </h3>
                              <p className="text-sm leading-[1.5] text-gray-500 font-[500]">
                                We have received your request and will get back
                                to you shortly.
                              </p>
                            </div>
                            <button
                              className="contactSendBtn"
                              onClick={handleGotItClick}
                            >
                              Got it
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>

              <div className="h-full">
                <div className="">
                  <p className="getIntouchService">Get In Touch</p>
                  <h3 className="getTitle">free consultation</h3>
                  <p className="getParaText">
                    We understand that you may need more details on our services
                    and we care to clarify all of your doubts. Please reach out
                    and help us to schedule a call with you.
                  </p>
                </div>

                <div className="getinTmgParent">
                  <img
                    className="w-full h-full object-cover rounded-[10px]"
                    src="https://i.ibb.co/605DMmX/homeourservicesfreecon-66c260b27b8a4.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
