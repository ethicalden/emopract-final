import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../common/Navbar";

const EventHeroSection = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co/xjFQn85/wdw-0942-66c3af200be71.webp"})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] lg:h-[100vh] backgroundImage brig flex flex-col justify-between"
        >
          <Navbar />

          {/* bg img footer content */}
          <div className="heroImgParent hidden">
            <div>
              <h2 className="heroImgTitle">Events</h2>
              <p className=" heroImgContentPara ">
                Home{" "}
                <span>
                  {" "}
                  <FaAngleRight></FaAngleRight>
                </span>{" "}
                events
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHeroSection;
