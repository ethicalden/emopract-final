// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const MemberTrending = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 4;
    slidesToScroll = 4;
  } else if (isXl) {
    slidesToShow = 3;
    slidesToScroll = 3;
  } else if (isLg) {
    slidesToShow = 2;
    slidesToScroll = 2;
  } else if (isMd) {
    slidesToShow = 1;
    slidesToScroll = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <div className="sectionGap">
      <div>
        <p className="memberSmall">Events</p>
        <h2 className="memberTitle pb-[25px] lg:pb-[50px]">trending events</h2>
      </div>

      {/* ========= mobile slider ==== */}

      <div className="slider-container">
        <Slider {...settings}>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 2xl:px-[15px] md:px-[10px] 2xl:pb-[50px]"
            >
              <div className='rounded-[10px] bg-[url("./Images/membershipBanner2.png")] bg-no-repeat bg-center bg-cover h-[504px]'>
                <div className="px-[26px] pb-[25px] flex items-end h-full">
                  <div className="bg-white px-[25px] py-[17px] rounded-[10px] ">
                    <h3 className="memberSliderTitle">
                      A non-profit organization
                    </h3>
                    <div className="flex items-center justify-center text-center">
                      <IoLocationSharp className="text-[#7EA254]" />
                      <p className="memberSliderSubtitle">
                        Contrary to popular belief, is not
                      </p>
                    </div>
                    <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                      <Link to="/event">
                        <button className="memberHoverBtn">Members</button>
                      </Link>
                      <Link to="/NonEvents">
                        <button className="nonMemberHoverBtn">
                          Non-Members
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MemberTrending;
