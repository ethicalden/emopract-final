// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../common/Navbar";

const BlogHero = () => {
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
      <div className="">
        <div
          style={{
            backgroundImage: `url(${"https://i.ibb.co/tbL2hjp/galleryheader-66d94a3796652.webp"})`,
          }}
          className="
            bg-no-repeat bg-bottom bg-cover w-[100%] h-[80vh] xs:h-[65vh] lg:h-[100vh]  backgroundImage flex flex-col justify-between"
        >
          <Navbar />

          {/* bg img footer content */}
          <div className="heroImgParent hidden">
            <div>
              <h2 className="heroImgTitle">Blog</h2>
              <p className=" heroImgContentPara ">
                Home{" "}
                <span>
                  {" "}
                  <FaAngleRight></FaAngleRight>
                </span>{" "}
                Blog
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
