// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// import membershipCardOne from "../../../../public/Images/membership/Card 2.png";
// import membershipCardTwo from "../../../../public/Images/membership/Card 1.png";
// import membershipCardThree from "../../../../public/Images/membership/Card 3.png";

const MembershipHome = () => {
  const joyItems = [
    {
      imgSrc: "https://i.ibb.co/H4VRMNr/card-2-66c2e2de49edb.webp",
    },
    {
      imgSrc: "https://i.ibb.co/GFk72gg/card-1-66c2e32b80c0a.webp",
    },
    {
      imgSrc: "https://i.ibb.co/pJvM6jk/card-3-66c2e36a6fb9a.webp",
    },
  ];

  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 3;
    slidesToScroll = 1;
  } else if (isXl) {
    slidesToShow = 3;
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
      className="bg-[#EDEDED] 
     mt-[85px] px-[30px]
   
    md:mt-[85px] md:px-[32px]
   
    lg:px-[60px] lg:mt-[105px]
    
    xl:px-[100px] xl:mt-[125px]
    
    2xl:px-[100px] 2xl:mt-[125px]"
    >
      <div className="py-[51px] px-[30px] 2xl-[100px] xl-[100px] md-[100px] ">
        <div>
          <p className="homeMemberShipSamll 2xl:text-center xl:text-center lg:text-center md:text-center">
            Membership
          </p>
          <h3 className="homeMemberShipTitle ">lifestyle package</h3>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {joyItems.map((item, index) => (
              <Link to={item.link} key={index} className="px-2">
                <div>
                  <Link to="/membership">
                    <div className="h-[404]">
                      <img
                        className="h-full w-full object-cover rounded-[10px]"
                        src={item.imgSrc}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MembershipHome;
