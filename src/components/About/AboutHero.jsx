//

// eslint-disable-next-line no-unused-vars

import { FaAngleRight } from "react-icons/fa";
import Navbar from "../common/Navbar";

const AboutHero = () => {
  return (
    <div>
      <div className="">
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co/PYCww6Q/a7406383-66c2e6c8eac64.webp"})`,
          }}
          className="
            bg-no-repeat bg-bottom bg-cover w-[100%] h-[80vh] xs:h-[65vh] lg:h-[100vh]  backgroundImage flex flex-col justify-between"
        >
          <Navbar />

          {/* bg img footer content */}
          <div className="heroImgParent hidden">
            <div>
              <h2 className="heroImgTitle">About</h2>
              <p className=" heroImgContentPara ">
                Home
                <span>
                  <FaAngleRight />
                </span>
                About
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
