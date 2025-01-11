/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const DemoMember = () => {
  //   ----
  const [formData, setFormData] = useState({
    from_name: "",
    from_number: "",
    from_email: "",
    from_message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isFormValid, setFormValid] = useState(false);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Check if all fields are filled
    const isValid = Object.values(updatedFormData).every(
      (field) => field.trim() !== ""
    );
    setFormValid(isValid);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm("service_bxcnts6", "template_he6i3oh", form.current, {
        publicKey: "VUWc7PqsSgNMXsdOL",
      })
      .then(
        () => {
          setModalVisible(true); // Show the modal on success
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // Function to handle the "Got it" button click
  const handleGotItClick = () => {
    setModalVisible(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="sectionGap">
      <div className="lg:text-center">
        <p className="memberSmall">Membership</p>
        <h2
          className="memberTitle pb-[50px] lg:pb-[50px] md:mb-[100px] xl:pb-[100px] 2xl:pb-[100px]
        justify-center"
        >
          lifestyle package
        </h2>
      </div>
      {/*======== membership cards ========= */}

      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 xl:justify-center  gap-y-[60px] md:gap-x-[15px] lg:gap-x-[25px]  xl:gap-x-[25px] 2xl:gap-x-[25px] lg:gap-y-[60px] 2xl:gap-y-[60px] md:gap-y-[60px] mt-[100px] ">
        {/* ============ card one========== */}

        <div className="relative bg-[#7EA254]  rounded-[10px]">
          <div className="absolute top-[-95px]  right-[130px]  md:top-[-95px]  md:right-[60px] lg:right-[90px] xl:right-[150px] 2xl:right-[60px]">
            <img
              src="https://i.ibb.co/8rHMr3S/icon-66c3acc886557.webp"
              alt="Logo"
              className="h-24 "
            />
          </div>
          <div className="max-w-md mx-auto  rounded-xl shadow-lg overflow-hidden ">
            <div className="py-6 md:py-6 text-center">
              <h2 className="text-4xl font-bold text-white ">
                ep{""} {""}
                <span className="font-chyali text-[14px]">era</span>{" "}
                {/* Replace with the actual class name */}
              </h2>

              <p className="text-white pt-[10px] md:text-[14px]">
                Validity : 12 months
              </p>

              <p className="text-4xl md:text-2xl font-bold text-white pt-[10px]">
                30,000/- yearly
              </p>
              <p className="text-white pt-[10px] md:text-[14px]">
                (For Couple - Rs 55,000)
              </p>
              <p className="text-white pt-[10px] md:text-[14px]">
                plan rate excluding GST
              </p>
              <button
                onClick={toggleModal}
                className="mt-[20px]  bg-white text-[#7EA254] font-semibold py-2 px-[100px] md:text-[14px] md:py-2 md:px-[50px] lg:py-4 lg:px-[80px] lg:text-[18px] rounded-full "
              >
                Apply Now
              </button>
              {/* --make modal */}
              {isModalOpen && (
                <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                  <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    {/* Close button */}
                    <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                      onClick={toggleModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* form content */}
                    <div className="bg-[#F2F2F2] mx-[36px]  rounded-[10px]">
                      <h3 className="eventCardTitle text-[#7EA254]">
                        request for a session!
                      </h3>
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="space-y-[20px] mt-[15px]"
                      >
                        <div className="inputParent">
                          <label
                            className="formTitle text-black"
                            htmlFor="full_name"
                          >
                            Full Name
                          </label>
                          <input
                            className="contactInpufeild "
                            type="text"
                            name="from_name"
                            id="full_name"
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="inputParent">
                          <label
                            className="formTitle text-black"
                            htmlFor="mobile_number"
                          >
                            Phone Number
                          </label>
                          <input
                            className="contactInpufeild "
                            type="text"
                            name="from_number"
                            id="mobile_number"
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="inputParent">
                          <label
                            className="formTitle text-black"
                            htmlFor="email"
                          >
                            Email Address
                          </label>
                          <input
                            className="contactInpufeild "
                            type="email"
                            name="from_email"
                            id="email"
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="inputParent">
                          <label
                            className="formTitle text-black"
                            htmlFor="from_message"
                          >
                            {" "}
                            Message
                          </label>
                          <input
                            className="contactInpufeild "
                            type="text"
                            name="from_message"
                            id="from_message"
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="inputParent pt-[30px] pb-[25px]">
                          {/* <button className="contactSendBtn bg-[#7EA254]  text-white">
                        Send Now
                      </button> */}
                          <input
                            className={`contactSendBtn bg-[#7EA254]  text-white ${
                              isFormValid ? "" : "cursor-not-allowed opacity-50"
                            }`}
                            disabled={!isFormValid}
                            type="submit"
                            value="Send Now"
                          />

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
                                    We have received your request and will get
                                    back to you shortly.
                                  </p>
                                </div>
                                <button
                                  className="contactSendBtn"
                                  onClick={handleGotItClick}
                                >
                                  Got it
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoMember;
