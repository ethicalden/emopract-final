// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 4;
    slidesToScroll = 1;
  } else if (isXl) {
    slidesToShow = 4;
    slidesToScroll = 2;
  } else if (isLg) {
    slidesToShow = 3;
    slidesToScroll = 2;
  } else if (isMd) {
    slidesToShow = 2;
    slidesToScroll = 1;
  }

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
  };

  return (
    <div
      className="mt-[200px] px-[32px] 2xl:px-[100px] 2xl:mt-[100px]
    xl:px-[100px] xl:mt-[100px] lg:px-[60px] lg:mt-[80px] md:px-[60px] md:mt-[80px]"
    >
      <div>
        <p className="memberSmall">Events</p>
        <h2 className="memberTitle pb-[25px] lg:pb-[50px] md:pb-[50px] ">
          Celebration
        </h2>
      </div>

      {/* =========large slider ==== */}
      <div className="slider-container hidden md:block">
        <Slider {...settings}>
          <div className='rounded-[10px]  bg-[url("https://i.ibb.co/1Z3MXFw/image-01-2-66c2dfebaa657.webp")] bg-no-repeat  bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Independence Day</h3>
                <div className="flex items-center justify-start">
                  <div>
                    <p className="memberSliderSubtitle">
                      our pride ... our glory
                    </p>
                    <p className="memberSliderSubtitle">15th August 2024</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/xmMJVFh/image-02-2-66c2e047e4d76.webp")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Story Telling Session</h3>
                <div className="flex items-center justify-start">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">sharing treasure …</p>
                    <p className="memberSliderSubtitle">21 Sep'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/jWNjt8q/image-03-66c2e09a30498.webp")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Durga Puja Preview</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      experience excellence
                    </p>
                    <p className="memberSliderSubtitle">30 Sep - 4 Oct'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/q9nqP57/image-04-3-66c2e0f7a96fc.webp")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Diwali On</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">moments of sparkle</p>
                    <p className="memberSliderSubtitle">26 Oct'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/pQqkvSf/image-05-1-66c2e16c78839.webp")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Children's Day</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">elders' way</p>
                    <p className="memberSliderSubtitle">14 Nov'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/8KjQrTW/image-07-66c2e1ed99cf0.webp")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Laugh all the Way </h3>
                <div className="flex items-center justify-start">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">fun together</p>
                    <p className="memberSliderSubtitle">14 Dec'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/grh7HGd/image-11-66c2e223c9170.webp")] bg-no-repeat bg-center bg-cover h-[504px]'>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Xmas to New Year </h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">let's celebrate</p>
                    <p className="memberSliderSubtitle">28 Dec'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* mobile */}
      <div className="slider-container md:hidden block">
        <Slider {...settings}>
          <div className='rounded-[10px] bg-[url("https://i.ibb.co/mGBFjQv/Independence-Day-Fusion-Celebration.webp")] bg-no-repeat  bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full border">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Independence Day</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      our pride ... our glory
                    </p>
                    <p>15th August 2024 </p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/n0Fy5YB/Story-Telling-Session.webp")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Story Telling Session</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">sharing treasure …</p>
                    <p>21 Sep'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/rZ3n3Lm/Durga-Puja-Preview.webp")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Durga Puja Preview</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">
                      experience excellence
                    </p>
                    <p>30 Sep - 4 Oct'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/LrHrFMn/Diwali-On.webp")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Diwali On</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">moments of sparkle</p>
                    <p>26 Oct'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/HDtWV10/Children-s-Day-Elders-Way.webp")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Children's Day</h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">elders' way</p>
                    <p>14 Nov'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/VNGRX5t/Laugh-all-the-way.webp")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Laugh all the way </h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">fun together</p>
                    <p>14 Dec'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='rounded-[10px] bg-[url("https://i.ibb.co/Gt9bzT2/Xmas-to-New-Year-Party-copy.webp")] bg-no-repeat bg-center bg-cover h-[504px] '>
            <div className="px-[26px] pb-[25px] flex items-end h-full">
              <div className="bg-white px-[25px] py-[17px] rounded-[10px] h-[190px] w-full flex flex-col justify-between">
                <h3 className="memberSliderTitle">Xmas to New Year </h3>
                <div className="flex items-center justify-start ">
                  {/* <IoLocationSharp className="text-[#7EA254]" /> */}
                  <div>
                    <p className="memberSliderSubtitle">lets' celebrate</p>
                    <p>28 Dec'24</p>
                  </div>
                </div>
                <div className="flex space-x-[15px] pt-[25px] pb-[15px] justify-center items-center">
                  <Link to="/event">
                    <button className="memberHoverBtn">Members</button>
                  </Link>
                  <Link to="/NonEvents">
                    <button className="nonMemberHoverBtn">Non-Members</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Events;
