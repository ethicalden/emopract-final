// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../common/Navbar";
// import membershipBanner from "../../../../public/Images/Home/membership/WhatsApp-Image-2.jpg";
const MembershipHero = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co/WcM6dNf/whatsapp-image-2-66c2e63151f0f.webp"})`,
          }}
          className="
            bg-no-repeat bg-center bg-cover w-[100%] h-[80vh] xs:h-[65vh] lg:h-[100vh]  backgroundImage brig flex flex-col justify-between"
        >
          <Navbar />
          {/* bg img footer content */}
          <div className="heroImgParent hidden">
            <div>
              <h2 className="heroImgTitle">Membership</h2>
              <p className=" heroImgContentPara ">
                Home{" "}
                <span>
                  {" "}
                  <FaAngleRight></FaAngleRight>
                </span>{" "}
                Membership
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipHero;
