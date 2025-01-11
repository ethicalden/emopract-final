/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const CarrierPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const cvUrl = formData.get("cv_url");

    console.log(form.current);
    emailjs
      .sendForm(
        "service_5gep125",
        "template_eh7h9wl",
        form.current,
        "VUWc7PqsSgNMXsdOL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsModalVisible(true); // Show modal on success
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleGotItClick = () => {
    setIsModalVisible(false); // Hide modal when "Got it" is clicked
  };

  return (
    <div className="sectionGap">
      <div className="lg:grid grid-cols-2 justify-between items-center">
        <div>
          <p className="contactEventSmall">Get hired!</p>
          <h3 className="conatactEventTitle">Apply here!</h3>
        </div>
        <div className="bg-[#7EA254] mt-[35px] py-[35px] md:py-[50px] lg:py-[70px] xl:py-[80px] 2xl:py-[120px] rounded-[10px]">
          <h3 className="eventCardTitle">career@emopract!</h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-[20px] md:space-y-[25px] lg:space-y-[30px] xl:space-y-[30px] 2xl:space-y-[40px]"
          >
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="full_name">
                Full Name
              </label>
              <input
                className="contactInpufeild h-[17px]"
                type="text"
                name="from_name"
                id="full_name"
                required
              />
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="mobile_number">
                Mobile Number
              </label>
              <input
                className="contactInpufeild h-[17px]"
                type="text"
                name="from_number"
                id="mobile_number"
                required
              />
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="email">
                Email
              </label>
              <input
                className="contactInpufeild h-[17px]"
                type="email"
                name="from_email"
                id="email"
                required
              />
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="address">
                Address
              </label>
              <input
                className="contactInpufeild h-[17px]"
                type="text"
                name="from_address"
                id="address"
              />
            </div>
            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="date_of_birth">
                Date of Birth
              </label>
              <input
                className="contactInpufeild h-[25px]"
                type="date"
                name="from_date"
                id="date_of_birth"
              />
            </div>
            <div className="inputParent gap-[7px]">
              <label className="formTitle" htmlFor="occupation">
                Are you a student or a working professional?
              </label>
              <select name="from_occupation" id="occupation">
                <option value="Student">Student</option>
                <option value="Working Professional">
                  Working Professional
                </option>
              </select>
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="current_employer">
                If you are a working professional, specify the name of your
                present employer and your current designation
              </label>
              <input
                className="contactInpufeild h-[17px]"
                type="text"
                name="from_employer"
                id="current_employer"
              />
            </div>
            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="employment_type">
                Are you looking for an internship or full-time employment?
              </label>
              <select name="from_employment_type" id="employment_type">
                <option value="Internship">Internship</option>
                <option value="Full time">Full time</option>
              </select>
            </div>
            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="role_interest">
                What type of role are you interested in?
              </label>
              <select name="from_role_interest" id="role_interest">
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
              <label className="formTitle" htmlFor="why_emopract">
                Why Emopract? Please specify
              </label>
              <input
                className="contactInpufeild h-[17px]"
                type="text"
                name="from_why_emopract"
                id="why_emopract"
              />
            </div>
            <div className="inputParent gap-[5px]">
              <label className="formTitle" htmlFor="strengths">
                Highlight two of your strength areas
              </label>
              <input
                className="contactInpufeild h-[17px]"
                type="text"
                name="from_strengths"
                id="strengths"
              />
            </div>
            <div className="inputParent gap-[10px]">
              <label className="formTitle" htmlFor="join_date">
                By when can you join us?
              </label>
              <select name="from_join_date" id="join_date">
                <option value="Immediately">Immediately</option>
                <option value="15days">15 days</option>
                <option value="30days">30 days</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* <div className="inputParent gap-[15px]">
              <label className="formTitle" htmlFor="cv">
                Please attach your CV
              </label> */}
            {/* <input
                className="contactInpufeild pb-[30px]"
                type="file"
                name="from_cv"
                id="cv"
              /> */}
            <div className="inputParent gap-[15px]">
              <label className="formTitle" htmlFor="cv_url">
                Please attach your CV
              </label>

              <input
                className="contactInpufeild h-[17px]"
                type="text"
                name="cv_url"
                id="cv_url"
              />
            </div>

            <div className="inputParent pt-[30px] pb-[15px] md:pt-[35px] md:pb-[20px] lg:pt-[40px] lg:pb-[20px] xl:pt-[40px] xl:pb-[20px]  2xl:pb-[30px]">
              <input className="contactSendBtn" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {isModalVisible && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
              viewBox="0 0 320.591 320.591"
              onClick={handleGotItClick}
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>

            <div className="my-8 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 shrink-0 fill-green-500 inline"
                viewBox="0 0 512 512"
              >
                <path
                  d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-7.965-8.18-21.105-8.481-29.285-.515-8.181 7.965-8.481 21.106-.515 29.285l78.021 80.129c3.94 4.046 9.367 6.305 15.041 6.314.015 0 .031 0 .046-.001 5.678-.013 11.115-2.297 15.045-6.351l144.702-141.528c8.318-7.899 8.674-21.038.775-29.343z"
                  data-original="#000000"
                ></path>
                <path
                  d="M256 0C114.848 0 0 114.852 0 256s114.848 256 256 256c141.153 0 256-114.852 256-256S397.152 0 256 0zm0 472.727c-119.387 0-216.727-97.34-216.727-216.727S136.613 39.273 256 39.273 472.727 136.613 472.727 256 375.387 472.727 256 472.727z"
                  data-original="#000000"
                ></path>
              </svg>
              <h3 className="text-xl font-[700] leading-normal my-6">
                Success!
              </h3>
              <p className="text-sm leading-[1.5] text-gray-500 font-[500]">
                We have received your info. Thank You!.
              </p>
            </div>
            <button onClick={handleGotItClick} className="contactSendBtn">
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarrierPage;
