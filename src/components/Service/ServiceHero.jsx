// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../common/Navbar";
// import serviceHeroImage from "../../../../public/Images/servicePage/sservice.jpg";

const ServiceHero = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co/DGsB8p1/sservice-66c374265161f.webp"})`,
          }}
          className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] lg:h-[100vh]  backgroundImage brig flex flex-col justify-between"
        >
          <Navbar />

          {/* bg img footer content */}
          <div className="heroImgParent hidden">
            <div>
              <h2 className="heroImgTitle">Service</h2>
              <p className=" heroImgContentPara ">
                Home{" "}
                <span>
                  {" "}
                  <FaAngleRight></FaAngleRight>
                </span>{" "}
                Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHero;
