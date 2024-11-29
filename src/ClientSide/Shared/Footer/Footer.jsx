// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { BsWhatsapp } from "react-icons/bs";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// import { IoSend } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="bg-[#D1D1D1] mt-[187px] 2xl:mt-[280px] xl:mt-[200px] relative">
//       <div className="absolute  top-[-127px] md:top-[-80px]  lg:top-[-80px] xl:top-[-110px] 2xl:top-[-150px] grid grid-cols-1 gap-y-[30px] justify-center w-full ">
//         <div className="lg:grid lg:grid-cols-2 lg:py-[40px]  bg-[#EDEDED] mx-[30px] md:mx-[50px] lg:mx-[100px] rounded-[10px] shadow-xl  xl:grid xl:grid-cols-2 gap-y-[30px] justify-center items-center">
//           <div className="footerTopSubParent">
//             <div className="footerTopImg h-[40px] w-[40px]">
//               <img
//                 className=" h-full w-full  rounded-full"
//                 size={10}
//                 src={"https://i.ibb.co/8rHMr3S/icon-66c3acc886557.webp"}
//                 alt=""
//               />
//             </div>
//             <div>
//               <h3 className="footerTopTitle">happy to connect</h3>
//             </div>
//             <div>
//               <a
//                 href="https://wa.me/919230977344"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <BsWhatsapp className="text-[30px] lg:text-[40px] 2xl:text-[70px] text-[#7EA254]" />
//               </a>
//             </div>
//             <div className=""></div>
//           </div>

//           <div className="flex-col justify-center items-center text-center border-t-[1px] border-[#7EA254] lg:border-none px-[32px]">
//             <div className="text-center pt-[20px] md:pt-[30px] lg:pt-[30px]">
//               <a href="tel:+919230977337">
//                 <button className="footerTopBtn">Request a call back</button>
//               </a>
//             </div>
//             <div>
//               <button className="footerTopnumber">+91 9230977337</button>
//             </div>
//           </div>
//         </div>

//         <div className=" bg-[#EDEDED] mx-[30px] md:mx-[50px] lg:mx-[100px] xl:mx-[100px] 2xl:mx-[100px] rounded-[10px] shadow-xl grid grid-cols-1 justify-center items-center">
//           <div
//             className="footerTopSubParent h-[120px] md:h-[150px] lg:h-[150px]
//           xl:h-[250px] 2xl:h-[250px]"
//           >
//             <div className=" text-center w-full ">
//               <h3 className="footerTopTitle ">24/7 IVR Support</h3>
//               <h4
//                 className="text-[14px] leading-[24px]  font-Ubuntu font-bold text-[#7EA254] pt-[10px] pb-[10px] xl:pt-[20px] xl:pb-[20px]  2xl:pt-[30px] 2xl:pb-[30px]  md:text-[20px]  lg:text-[25px] xl:text-[25px]
//               2xl:text-[30px]"
//               >
//                 +91 9230977338{" "}
//               </h4>
//               <p
//                 className="text-[14px] leading-[20px]
//     md:text-[14px] md:leading-[16px]
//   lg:text-[16px] lg:leading-[18px]
//      xl:text-[25px] xl:leading-[20px]
//     2xl:text-[30px] 2xl:leading-[26px]
//     font-Varela font-normal text-black"
//               >
//                 {" "}
//                 *only for members
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* foooter content */}
//       <div className="pt-[374px] md:pt-[500px] lg:pt-[400px] xl:pt-[600px] 2xl:pt-[700px]">
//         <div className="px-[30px] md:px-[50px]  lg:px-[60px] xl:px-[100px] pb-[25px] grid grid-cols-2 lg:grid-cols-5 justify-between gap-x-[50px] gap-y-[35px]">
//           <div>
//             <div className="footerLogoparent">
//               <img
//                 className="h-full w-full object-cover "
//                 src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png"
//                 alt=""
//               />
//             </div>

//             <div className=" ">
//               <div className="flex  pt-[20px] pb-[15px] gap-x-[10px]">
//                 <a href="https://www.facebook.com/p/Emopract-61561294300993/">
//                   <FaFacebook size={28} className="footerSocailIcon" />
//                 </a>
//                 <a href="https://www.instagram.com/emopract_official/">
//                   <FaInstagram size={28} className="footerSocailIcon" />
//                 </a>

//                 <a href="https://www.linkedin.com/company/emopract/?viewAsMember=true">
//                   <FaLinkedinIn size={28} className="footerSocailIcon" />
//                 </a>
//                 <a href="https://www.youtube.com/channel/UCxCh3hV_bvIUscScLCGI65Q">
//                   <FaYoutube size={28} className="footerSocailIcon" />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div>
//             <h2 className="footerMenuTextTitle">link</h2>
//             <Link to="/About">
//               <p className="footerMenuText">About Us</p>
//             </Link>
//             <Link to="/service">
//               <p className="footerMenuText">Services</p>
//             </Link>
//             <Link to="/membership">
//               {" "}
//               <p className="footerMenuText">Membership</p>
//             </Link>
//             <Link to="/blogs">
//               {" "}
//               <p className="footerMenuText">Blog</p>
//             </Link>
//             <Link to="/event">
//               {" "}
//               <p className="footerMenuText">Event</p>
//             </Link>
//             <Link to="/contact">
//               <p className="footerMenuText">Contact Us</p>
//             </Link>

//             <Link to="/career">
//               <p className="footerMenuText">Career</p>
//             </Link>
//             <Link to="/ticket">
//               <p className="footerMenuText">Ticket Page</p>
//             </Link>
//             <Link to="/gallery">
//               <p className="footerMenuText">Gallery</p>
//             </Link>
//           </div>

//           <div>
//             <h2 className="footerMenuTextTitle">emopract pvt ltd</h2>
//             <p className="footerMenuText">Bhakta Tower</p>
//             <p className="footerMenuText">KB-22, KB Block</p>
//             <p className="footerMenuText">Sector- 3, Salt Lake</p>
//             <p className="footerMenuText">WB, Kolkata- 700106</p>
//             <p className="footerMenuText">info@emopract.com</p>
//           </div>

//           <div>
//             <h2 className="footerMenuTextTitle">newsletter</h2>

//             <p className="footerMenuText">Please mail us</p>
//             <div className="relative inline-block">
//               <input
//                 type="text"
//                 placeholder="enter your mail here"
//                 className="text-[8px] md:text-[10px] font-Varela p-[10px] pr-[40px] font-normal w-full rounded-full outline-none mt-[15px]"
//               />
//               <div className="absolute right-2 top-1/2 transform -translate-y-1/4 h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center outline-none">
//                 <IoSend className="text-[#7EA254] text-[12px]" />
//               </div>
//             </div>
//           </div>

//           {/* term */}

//           <div
//             className="py-[35px]  2xl:py-[35px]
//            "
//           >
//             <Link to="/terms-of-use">
//               <p className="footerMenuText">Terms & Conditions </p>
//             </Link>
//             {/* <p className="footerMenuText">News & Letters </p> */}
//             <Link to="/privacy-policy">
//               <p className="footerMenuText">Privacy Policy</p>
//             </Link>
//           </div>
//         </div>

//         <hr />

//         <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
//           <div
//             className="flex justify-center items-center space-x-[40px]
//           "
//           >
//             <p className="footerMenuText ">
//               Copyright © Emopract 2024. Designed and Developed Ethically By{" "}
//               <span>
//                 <Link
//                   to="https://www.ethicalden.com/"
//                   target="_blank"
//                   className="underline"
//                 >
//                   Ethical Den
//                 </Link>
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#D1D1D1] mt-[187px] 2xl:mt-[280px] xl:mt-[200px] relative">
      <div className="absolute  top-[-127px] md:top-[-80px]  lg:top-[-80px] xl:top-[-110px] 2xl:top-[-150px] grid grid-cols-1 gap-y-[30px] justify-center w-full ">
        <div className="lg:grid lg:grid-cols-2 lg:py-[40px]  bg-[#EDEDED] mx-[30px] md:mx-[50px] lg:mx-[100px] rounded-[10px] shadow-xl  xl:grid xl:grid-cols-2 gap-y-[30px] justify-center items-center">
          <div className="footerTopSubParent">
            <div className="footerTopImg h-[40px] w-[40px]">
              <img
                className=" h-full w-full  rounded-full"
                size={10}
                src={"https://i.ibb.co/8rHMr3S/icon-66c3acc886557.webp"}
                alt=""
              />
            </div>
            <div>
              <h3 className="footerTopTitle">happy to connect</h3>
            </div>
            <div>
              <a
                href="https://wa.me/919230977344"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp className="text-[30px] lg:text-[40px] 2xl:text-[70px] text-[#7EA254]" />
              </a>
            </div>
            <div className=""></div>
          </div>

          <div className="flex-col justify-center items-center text-center border-t-[1px] border-[#7EA254] lg:border-none px-[32px]">
            <div className="text-center pt-[20px] md:pt-[30px] lg:pt-[30px]">
              <a href="tel:+919230977337">
                <button className="footerTopBtn">Request a call back</button>
              </a>
            </div>
            <div>
              <button className="footerTopnumber">+91 9230977337</button>
            </div>
          </div>
        </div>

        <div className=" bg-[#EDEDED] mx-[30px] md:mx-[50px] lg:mx-[100px] xl:mx-[100px] 2xl:mx-[100px] rounded-[10px] shadow-xl grid grid-cols-1 justify-center items-center">
          <div
            className="footerTopSubParent h-[120px] md:h-[150px] lg:h-[150px]
          xl:h-[250px] 2xl:h-[250px]"
          >
            <div className=" text-center w-full ">
              <h3 className="footerTopTitle ">24/7 IVR Support</h3>
              <h4
                className="text-[14px] leading-[24px]  font-Ubuntu font-bold text-[#7EA254] pt-[10px] pb-[10px] xl:pt-[20px] xl:pb-[20px]  2xl:pt-[30px] 2xl:pb-[30px]  md:text-[20px]  lg:text-[25px] xl:text-[25px] 
              2xl:text-[30px]"
              >
                +91 9230977338{" "}
              </h4>
              <p
                className="text-[14px] leading-[20px]
    md:text-[14px] md:leading-[16px]
  lg:text-[16px] lg:leading-[18px]
     xl:text-[25px] xl:leading-[20px]
    2xl:text-[30px] 2xl:leading-[26px]
    font-Varela font-normal text-black"
              >
                {" "}
                *only for members
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* foooter content */}
      {/* mobile */}
      <div className="md:hidden block pt-[374px] md:pt-[500px] lg:pt-[400px] xl:pt-[600px] 2xl:pt-[700px]">
        <div>
          <div className="px-[30px] md:px-[50px]  lg:px-[60px] xl:px-[100px] pb-[25px] flex justify-between">
            <div>
              <div className="footerLogoparent">
                <img
                  className="h-full w-full object-cover "
                  src="/Images/emopractLogoUp.png"
                  alt=""
                />
              </div>

              <div className=" ">
                <div className="flex  pt-[20px] pb-[15px] gap-x-[10px]">
                  <a href="https://www.facebook.com/p/Emopract-61561294300993/">
                    <FaFacebook size={25} className="footerSocailIcon" />
                  </a>
                  <a href="https://www.instagram.com/emopract_official/">
                    <FaInstagram size={25} className="footerSocailIcon" />
                  </a>

                  <a href="https://www.linkedin.com/company/emopract/?viewAsMember=true">
                    <FaLinkedinIn size={25} className="footerSocailIcon" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCxCh3hV_bvIUscScLCGI65Q">
                    <FaYoutube size={25} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="text-center">
                <h2 className="footerMenuTextTitle">newsletter</h2>

                {/* <p className="footerMenuText">Please mail us</p> */}
              </div>
              <div className="relative inline-block">
                <input
                  type="text"
                  placeholder="enter your mail here"
                  className="text-[8px] md:text-[10px] font-Varela p-[10px] pr-[40px] font-normal w-full rounded-full outline-none mt-[15px]"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/4 h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center outline-none">
                  <IoSend className="text-[#7EA254] text-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* emopract pvt ltd */}
        <div
          className="mt-[30px] px-[30px] md:px-[50px]  lg:px-[60px] xl:px-[100px] pb-[25px] 
      flex justify-between 
      
      "
        >
          <div>
            <div>
              <h2 className="footerMenuTextTitle">emopract pvt ltd</h2>
              <p className="footerMenuText">Bhakta Tower</p>
              <p className="footerMenuText">KB-22, KB Block</p>
              <p className="footerMenuText">Sector- 3, Salt Lake</p>
              <p className="footerMenuText">WB, Kolkata- 700106</p>
              <p className="footerMenuText">info@emopract.com</p>
            </div>

            <div
              className=" py-[30px] 2xl:py-[35px]   
           "
            >
              <Link to="/terms-of-use">
                <p className="footerMenuText">Terms & Conditions </p>
              </Link>
              {/* <p className="footerMenuText">News & Letters </p> */}
              <Link to="/privacy-policy">
                <p className="footerMenuText">Privacy Policy</p>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="footerMenuTextTitle">link</h2>
            <Link to="/About">
              <p className="footerMenuText">About Us</p>
            </Link>
            <Link to="/service">
              <p className="footerMenuText">Services</p>
            </Link>
            <Link to="/membership">
              {" "}
              <p className="footerMenuText">Membership</p>
            </Link>
            <Link to="/blogs">
              {" "}
              <p className="footerMenuText">Blog</p>
            </Link>
            <Link to="/event">
              {" "}
              <p className="footerMenuText">Event</p>
            </Link>
            <Link to="/contact">
              <p className="footerMenuText">Contact Us</p>
            </Link>

            <Link to="/career">
              <p className="footerMenuText">Career</p>
            </Link>
            <Link to="/ticket">
              <p className="footerMenuText">Ticket Page</p>
            </Link>
            <Link to="/gallery">
              <p className="footerMenuText">Gallery</p>
            </Link>
          </div>
        </div>
      </div>

      {/* large device */}
      <div className="hidden md:block pt-[374px] md:pt-[500px] lg:pt-[450px] xl:pt-[600px] 2xl:pt-[700px]">
        <div>
          <div className="px-[30px] md:px-[50px]  lg:px-[60px] xl:px-[100px] pb-[25px] flex justify-between">
            <div>
              <div className="footerLogoparent">
                <img
                  className="h-full w-full object-cover "
                  src="/Images/emopractLogoUp.png"
                  alt=""
                />
              </div>

              <div className=" ">
                <div className="flex  pt-[20px] pb-[15px] gap-x-[10px]">
                  <a href="https://www.facebook.com/p/Emopract-61561294300993/">
                    <FaFacebook size={28} className="footerSocailIcon" />
                  </a>
                  <a href="https://www.instagram.com/emopract_official/">
                    <FaInstagram size={28} className="footerSocailIcon" />
                  </a>

                  <a href="https://www.linkedin.com/company/emopract/?viewAsMember=true">
                    <FaLinkedinIn size={28} className="footerSocailIcon" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCxCh3hV_bvIUscScLCGI65Q">
                    <FaYoutube size={28} className="footerSocailIcon" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="footerMenuTextTitle">link</h2>
              <Link to="/About">
                <p className="footerMenuText">About Us</p>
              </Link>
              <Link to="/service">
                <p className="footerMenuText">Services</p>
              </Link>
              <Link to="/membership">
                {" "}
                <p className="footerMenuText">Membership</p>
              </Link>
              <Link to="/blogs">
                {" "}
                <p className="footerMenuText">Blog</p>
              </Link>
              <Link to="/event">
                {" "}
                <p className="footerMenuText">Event</p>
              </Link>
              <Link to="/contact">
                <p className="footerMenuText">Contact Us</p>
              </Link>

              <Link to="/career">
                <p className="footerMenuText">Career</p>
              </Link>
              <Link to="/ticket">
                <p className="footerMenuText">Ticket Page</p>
              </Link>
              <Link to="/gallery">
                <p className="footerMenuText">Gallery</p>
              </Link>
            </div>

            <div>
              <div>
                <h2 className="footerMenuTextTitle">emopract pvt ltd</h2>
                <p className="footerMenuText">Bhakta Tower</p>
                <p className="footerMenuText">KB-22, KB Block</p>
                <p className="footerMenuText">Sector- 3, Salt Lake</p>
                <p className="footerMenuText">WB, Kolkata- 700106</p>
                <p className="footerMenuText">info@emopract.com</p>
              </div>

              <div
                className=" py-[30px] 2xl:py-[35px]   
           "
              >
                <Link to="/terms-of-use">
                  <p className="footerMenuText">Terms & Conditions </p>
                </Link>
                {/* <p className="footerMenuText">News & Letters </p> */}
                <Link to="/privacy-policy">
                  <p className="footerMenuText">Privacy Policy</p>
                </Link>
              </div>
            </div>

            <div>
              <div className="text-center">
                <h2 className="footerMenuTextTitle">newsletter</h2>

                {/* <p className="footerMenuText">Please mail us</p> */}
              </div>
              <div className="relative inline-block">
                <input
                  type="text"
                  placeholder="enter your mail here"
                  className="text-[8px] md:text-[10px] font-Varela p-[10px] pr-[40px] font-normal w-full rounded-full outline-none mt-[15px]"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/4 h-[25px] w-[25px] rounded-full bg-black flex justify-center items-center outline-none">
                  <IoSend className="text-[#7EA254] text-[12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center">
        <div
          className="flex justify-center items-center space-x-[40px]
          "
        >
          <p className="footerMenuText ">
            Copyright © Emopract 2024. Designed and Developed Ethically By{" "}
            <span>
              <Link
                to="https://www.ethicalden.com/"
                target="_blank"
                className="underline"
              >
                Ethical Den
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
