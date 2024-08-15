/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

const CarrierPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="sectionGap">
      <div className="lg:grid grid-cols-2 justify-between items-center">
        <div>
          <p className="contactEventSmall">Get hired !</p>
          <h3 className="conatactEventTitle">apply here! </h3>
        </div>
        <div className="bg-[#7EA254] mt-[35px] py-[35px] md:py-[50px] lg:py-[70px] xl:py-[80px] 2xl:py-[120px] rounded-[10px]">
          <h3 className="eventCardTitle">career@emopract !</h3>
          <form className="space-y-[20px] md:space-y-[25px] lg:space-y-[30px] xl:space-y-[30px] 2xl:space-y-[40px]">
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="">
                Full Name
              </label>
              <input className="contactInpufeild h-[17px]" type="text" />
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="">
                Mobile Number
              </label>
              <input className="contactInpufeild h-[17px]" type="text" />
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="">
                Email
              </label>
              <input className="contactInpufeild h-[17px]" type="text" />
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="">
                Address
              </label>
              <input className="contactInpufeild h-[17px]" type="text" />
            </div>

            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="">
                Date of Birth
              </label>
              <input className="contactInpufeild  h-[25px]" type="date" />
            </div>

            <div className="inputParent gap-[7px]">
              <label className="formTitle" htmlFor="">
                Are you a student or a working professional
              </label>
              <select>
                <option value="Student">Student</option>
                <option value="Working Professional">
                  Working Professional
                </option>
              </select>
            </div>

            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="">
                If you are a working professional, specify the name of your
                present employer and your current designation
              </label>
              <input className="contactInpufeild h-[17px]" type="text" />
            </div>

            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="">
                Are you looking for internship or full-time employment ?
              </label>
              <select>
                <option value="Internship">Internship</option>
                <option value="Full time">Full time</option>
              </select>
            </div>

            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="">
                What type of role you are interested ?
              </label>
              <select>
                <option value="Marketing & Promotion">
                  Marketing & Promotion
                </option>
                <option value="Business Development">
                  Business Development
                </option>
                <option value="Human Resource">Human Resource</option>
                <option value="Joys of Living Star">Joys of Living Star</option>
                <option value="Wellness Buddy">Wellness Buddy</option>
                <option value="Back Office">Back Office</option>
              </select>
            </div>

            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="">
                What emopract ? Please specify
              </label>
              <input className="contactInpufeild h-[17px]" type="text" />
            </div>

            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="">
                Highlight two of your strength areas
              </label>
              <input className="contactInpufeild h-[17px]" type="text" />
            </div>

            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="">
                By when you can join us
              </label>
              <select>
                <option value="Immediately">Immediately</option>
                <option value="15days">15days</option>
                <option value="30days">30days</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="inputParent gap-[15px]">
              <label className="formTitle" htmlFor="">
                Please attach your CV
              </label>
              <input className="contactInpufeild pb-[30px]" type="file" />
            </div>

            <div className="inputParent pt-[30px] pb-[15px] md:pt-[35px] md:pb-[20px] lg:pt-[40px] lg:pb-[20px] xl:pt-[40px] xl:pb-[20px]  2xl:pb-[30px]">
              <button className="contactSendBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarrierPage;
