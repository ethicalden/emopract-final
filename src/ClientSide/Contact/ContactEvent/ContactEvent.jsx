/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const ContactEvent = () => {
  return (
    <div className="sectionGap">
      <div className="lg:grid grid-cols-2 justify-between items-center">
        <div>
          <p className="contactEventSmall md:text-center lg:text-left">
            Get in touch
          </p>
          <h3 className="conatactEventTitle md:text-center lg:text-left">
            let's chat!
          </h3>

          <div className="contactTitleSubttitleParent">
            <div className="contactIconParent">
              <a href="tel:+919230977337">
                <IoCallSharp className="contactEventIcon text-white" />
              </a>
            </div>
            <div>
              <h4 className="contactCTAtitle">+91 9230977337</h4>
            </div>
          </div>
          <div className="contactTitleSubttitleParent pt-[25px]">
            <div className="contactIconParent">
              <a href="mailto:info@emopract.com">
                <MdEmail className="contactEventIcon text-white" />
              </a>
            </div>
            <div>
              <h4 className="contactCTAtitle">info@emopract.com</h4>
            </div>
          </div>
        </div>
        <div className="bg-[#7EA254] mt-[35px] py-[35px] md:py-[50px] lg:py-[70px] xl:py-[80px] 2xl:py-[120px] rounded-[10px]">
          <h3 className="eventCardTitle">request for a session!</h3>
          <form className="space-y-[20px] md:space-y-[25px] lg:space-y-[30px] xl:space-y-[30px] 2xl:space-y-[40px]">
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                Full Name
              </label>
              <input className="contactInpufeild" type="text" />
            </div>
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                Phone Number
              </label>
              <input className="contactInpufeild" type="text" />
            </div>
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                Email Address
              </label>
              <input className="contactInpufeild" type="text" />
            </div>
            <div className="inputParent">
              <label className="formTitle" htmlFor="">
                {" "}
                Message
              </label>
              <input className="contactInpufeild" type="text" />
            </div>

            <div className="inputParent pt-[30px] pb-[15px] md:pt-[35px] md:pb-[20px] lg:pt-[40px] lg:pb-[20px] xl:pt-[40px] xl:pb-[20px]  2xl:pb-[30px]">
              <button className="contactSendBtn">Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactEvent;
