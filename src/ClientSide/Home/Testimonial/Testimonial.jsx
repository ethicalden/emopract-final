// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const Testimonial = () => {
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
    <div className="sectionGap ">
      <p className="tesSamll 2xl:text-center xl:text-center lg:text-center md:text-center">
        Testimonials
      </p>
      <h3 className="tesTitle 2xl:text-center xl:text-center lg:text-center md:text-center">
        our smiling family
      </h3>

      {/* mobile screen */}
      <div className="slider-container">
        <Slider {...settings}>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 2xl:px-[15px] md:px-[10px] 2xl:pb-[50px]"
            >
              <div
                className="border border-[#7EA254]  rounded-[20px] p-[30px]
         mb-[20px] 2xl:p-[60px] xl:p-[60px] lg:p-[40px] md:p-[30px]"
              >
                <p className="tesSlidePara">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature 45
                  BC, making.
                </p>
                <div className="flex justify-between items-center pt-[45px]">
                  <div>
                    <h4 className="tesSlideTitle">Aubrey Logan</h4>
                    <p>Manager</p>
                  </div>
                  <div className="h-[81px] w-[95px]">
                    <img
                      className="h-full w-full object-cover"
                      src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719928195/quoteImg_mfpgwl.png"
                      alt=""
                    />
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

export default Testimonial;
