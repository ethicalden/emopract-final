// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../common/Navbar";

const HeroSecGallery = () => {
  return (
    <div>
      <div
        className="
            bg-no-repeat   bg-top bg-cover h-[80vh] xs:h-[65vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh]  flex flex-col justify-between"
        style={{
          backgroundImage: `url(${"https://i.ibb.co.com/fSrDNwY/gallery-1-66e32d10021ca.webp"})`,
        }}
      >
        <Navbar />
        {/* bg img footer content */}
        <div className="heroImgParent hidden">
          <div>
            <h2 className="heroImgTitle">Contact</h2>
            <p className=" heroImgContentPara ">
              Home{" "}
              <span>
                {" "}
                <FaAngleRight></FaAngleRight>
              </span>{" "}
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSecGallery;
