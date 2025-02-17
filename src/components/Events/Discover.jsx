import React from "react";

import Link from "next/link";

const Discover = () => {
  return (
    <div className="sectionGap ">
      {/* mobile */}
      <div className="block md:hidden">
        <div className="">
          <p
            className="eventGallarySmall 2xl:text-center xl:text-center
        lg:text-center md:text-center"
          >
            Discover Moments
          </p>
          <h2
            className="eventGarlleryTitle 2xl:text-center xl:text-center
        lg:text-center md:text-center"
          >
            a visual journey
          </h2>
        </div>

        <div
          className="  grid  grid-cols-2  2xl:grid-cols-2 2xl:justify-between 
        xl:grid-cols-2 xl:justify-between
        md:grid-cols-2 md:justify-between
        lg:grid-cols-2 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[30px]  lg:gap-x-[30px]  md:gap-x-[30px]"
        >
          <div className=" ">
            <div className="img1 w-full">
              <img
                className="h-full w-full object-cover  rounded-[10px]"
                src={"https://i.ibb.co/n0RR8hw/a7405850-66c2e3f298574.webp"}
                alt=""
              />
            </div>
            <div className="img2 w-full">
              <img
                className="h-full w-full object-cover rounded-[10px]"
                src={"https://i.ibb.co/NtyL9bn/a7406096-66c2e41eb3423.webp"}
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="h-[366px] ">
              <video
                className="h-full w-full object-cover rounded-[10px]"
                src={"/Images/reel.mp4"}
                controls
                height={800}
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="img4 w-full 2xl:pt-[15px] xl:pt-[15px] lg:pt-[15px]
      md:pt-[15px]"
        >
          <img
            className="h-full w-full object-cover rounded-[10px]"
            src={
              "https://i.ibb.co/Mn3hh8g/img-20240727-011328-66c2e48663bb5.webp"
            }
            alt=""
          />
        </div>

        <Link href="/gallery">
          <button className="discoverKnowMore">Know More</button>
        </Link>
      </div>

      {/* big screen */}

      <div className="hidden md:block">
        <div
          className="flex justify-center items-center 2xl:gap-x-[54px]
      xl:gap-x-[54px] lg:gap-x-[40px] md:gap-x-[30px]"
        >
          <div className="">
            <p className="eventGallarySmall">Discover Moments</p>
            <h2
              className="eventGarlleryTitle
        "
            >
              a visual journey through our gallery
            </h2>

            <Link href="/gallery">
              <button className="discoverKnowMore">Know More</button>
            </Link>
          </div>

          <div>
            <div
              className="  grid  grid-cols-3  2xl:grid-cols-3 2xl:justify-between 
        xl:grid-cols-3 xl:justify-between
        md:grid-cols-3 md:justify-between
        lg:grid-cols-3 lg:justify-between 
      justify-between gap-x-[15px]  2xl:gap-x-[30px] 
       xl:gap-x-[15px]  lg:gap-x-[15px]  md:gap-x-[10px]"
            >
              <div className=" ">
                <div className="discoverimg1 w-full">
                  <img
                    className="h-full w-full object-cover rounded-[15px]"
                    src={"https://i.ibb.co/n0RR8hw/a7405850-66c2e3f298574.webp"}
                    alt=""
                  />
                </div>
                <div className="discoverimg2 w-full">
                  <img
                    className="h-full w-full object-cover  rounded-[15px]"
                    src={"https://i.ibb.co/NtyL9bn/a7406096-66c2e41eb3423.webp"}
                    alt=""
                  />
                </div>
              </div>

              <div>
                <div className="discoverimg3 w-full">
                  <video
                    className="h-full w-full object-cover rounded-[15px]"
                    src={"/Images/reel.mp4"}
                    controls
                    height={800}
                    alt=""
                  />
                </div>
              </div>

              <div className=" ">
                <div className="h-[118px]  2xl:h-[242px]   xl:h-[200px]  lg:h-[150px] md:h-[100px]  w-full">
                  <img
                    className="h-full w-full object-cover  rounded-[15px]"
                    src={
                      "https://i.ibb.co/Mn3hh8g/img-20240727-011328-66c2e48663bb5.webp"
                    }
                    alt=""
                  />
                </div>
                <div
                  className="h-[233px] 
    2xl:h-[478px]
    xl:h-[270px]
    md:h-[200px]
    lg:h-[300px] mt-[15px]  2xl:mt-[30px]  xl:mt-[15px]  
                lg:mt-[15px] md:mt-[10px]  w-full"
                >
                  <img
                    className="h-full w-full object-cover rounded-[15px]"
                    src={
                      "https://i.ibb.co/WcM6dNf/whatsapp-image-2-66c2e63151f0f.webp"
                    }
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

export default Discover;
