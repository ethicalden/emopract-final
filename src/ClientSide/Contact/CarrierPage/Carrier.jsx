/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const CarrierPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        },
        (error) => {
          console.log(error.text);
        }
      );
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
    </div>
  );
};

export default CarrierPage;
