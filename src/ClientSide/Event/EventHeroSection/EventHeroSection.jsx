// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../../Shared/Navbar/Navbar";
// import EventsHero from "../../../../public/Images/EventPage/WDW_0942.jpg";

const EventHeroSection = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co/rv5GPqN/WDW-0942.jpg"})`,
          }}
          className="bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] lg:h-[100vh] backgroundImage brig flex flex-col justify-between"
        >
          <Navbar></Navbar>

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
