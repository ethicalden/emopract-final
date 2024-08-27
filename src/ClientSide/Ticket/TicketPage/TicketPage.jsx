import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { TiTickOutline } from "react-icons/ti";

const TicketPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialog2Open, setIsDialog2Open] = useState(false);
  const [isDialog3Open, setIsDialog3Open] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isNotARobot, setIsNotARobot] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOpenTicketClick = () => {
    if (inputValue.trim()) {
      setIsDialogOpen(true);
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsNotARobot(e.target.checked);
  };

  const handleOtpChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const handleGetOtpClick = () => {
    setIsDialogOpen(false);
    setIsDialog2Open(true);
  };

  const handleVerifyClick = () => {
    if (otpValues.every((otp) => otp.trim() !== "")) {
      setIsDialog2Open(false);
      setIsDialog3Open(true);
    } else {
      alert("Please fill in all OTP fields.");
    }
  };

  // Check if all form fields are valid
  const isFormValid = phoneNumber.trim() && email.trim() && isNotARobot;

  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex  justify-center items-center">
        <div className="ticketInputDiv bg-white rounded-full flex items-center">
          <input
            type="text"
            placeholder="Here unicode"
            value={inputValue}
            onChange={handleInputChange}
            className="text-[#6E6E6E] flex-grow ticketInput focus:outline-none"
          />
          <button
            onClick={handleOpenTicketClick}
            disabled={!inputValue.trim()}
            className="ticketButton bg-[#7EA254] text-white hover:bg-[#acd47e] transition"
          >
            Open Ticket
          </button>

          {/* ----- Dialog */}
          {isDialogOpen && (
            <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
              <div className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[70px] lg:px-[100px] xl:px-[80px] xl:py-[40px] 2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative">
                <div className="my-8 text-center">
                  <form className="space-y-[50px] md:space-y-[25px] lg:space-y-[30px] xl:space-y-[30px] 2xl:space-y-[40px] text-left">
                    <div className="inputParent">
                      <label
                        className="formTitleTicket"
                        htmlFor="mobile_number"
                      >
                        Phone Number
                      </label>
                      <input
                        className="contactInpufeild"
                        type="text"
                        name="from_number"
                        id="mobile_number"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        required
                      />
                    </div>
                    <div className="inputParent">
                      <label className="formTitleTicket" htmlFor="from_email">
                        Email Address
                      </label>
                      <input
                        className="contactInpufeild"
                        type="email"
                        name="from_email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                      />
                    </div>
                    <div className="inputParent flex flex-row gap-[10px]">
                      <input
                        type="checkbox"
                        id="not_a_robot"
                        name="not_a_robot"
                        className="h-4 w-4"
                        checked={isNotARobot}
                        onChange={handleCheckboxChange}
                        required
                      />
                      <label className="formTitleTicket" htmlFor="not_a_robot">
                        I'm not a robot
                      </label>
                    </div>
                  </form>
                </div>
                <button
                  onClick={handleGetOtpClick}
                  className="ticketOtpGetBtn bg-[#7EA254] hover:bg-[#acd47e] transition"
                  disabled={!isFormValid}
                >
                  Get Otp
                </button>
              </div>
            </div>
          )}

          {/* Dialog 2 */}
          {isDialog2Open && (
            <div
              className="fixed inset-0 2xl:px-[240px] xl:px-[240px]  lg:px-[200px] 
            md:px-[150px] px-[100px]
            flex flex-wrap w-full justify-center items-center h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
            >
              <div
                className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[30px] lg:px-[30px] 2xl:py-[80px] 2xl:px-[110px]  
              xl:py-[30px] xl:px-[30px]   bg-white shadow-lg rounded-lg relative"
              >
                <div className="text-center">
                  <form className="text-left">
                    <div className="2xl:px-[155px] xl:px-[45px]  lg:px-[45px]  md:px-[15px]">
                      <h1
                        className="text-[24px] text-center leading-[28px] 
                        md:text-[24px]  md:leading-[28px] 2xl:text-[36px] 2xl:leading-[43px] xl:text-[25px] xl:leading-[40px]
                      lg:text-[25px] lg:leading-[40px] font-medium font-Ubuntu"
                      >
                        Verify Your Phone Number
                      </h1>
                      <p
                        className="pt-[24px] pb-[20px] leading-[18px] 2xl:text-[24px] 2xl:leading-[36px] xl:text-[22px] xl:leading-[25px] 
                      lg:text-[18px] lg:leading-[25px] md:text-[18px] md:leading-[25px]  text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal "
                      >
                        Lorem ipsum dolor sit amet consectetur. Enim proin
                        pellentesque erat mattis. Amet pharetra pellentesque
                        ultricies sit. Magna in nibh nisl vulputate purus in. At
                        arcu sapien nisl netus mattis sem.
                      </p>
                    </div>
                    {/* OTP Input Boxes */}
                    <div className="flex justify-center gap-[10px] pb-[40px]">
                      {otpValues.map((otp, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          value={otp}
                          onChange={(e) =>
                            handleOtpChange(index, e.target.value)
                          }
                          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[50px] xl:h-[50px] text-center border border-[#1E1E1E99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EA254] text-lg font-medium"
                        />
                      ))}
                    </div>
                  </form>
                </div>
                <div className="flex justify-center items-center h-full">
                  <button
                    onClick={handleVerifyClick}
                    className="ticketVerifyBtn w-full bg-[#7EA254] hover:bg-[#acd47e] transition"
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Dialog 3 */}
          {isDialog3Open && (
            <div className="fixed inset-0 2xl:px-[240px] xl:px-[150px] flex flex-wrap w-full justify-center items-center h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
              <div
                className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[70px] lg:px-[100px] xl:py-[60px] xl:px-[80px]
              2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative"
              >
                <div className="text-center">
                  <form className="text-left">
                    <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#7EA254] rounded-full mx-auto mb-[30px]">
                      <TiTickOutline size={35} className="text-white" />
                    </div>

                    <h1 className="text-[24px] text-center leading-[28px] font-medium font-Ubuntu">
                      Thanks For Verifying
                    </h1>
                    <p className="pt-[24px] pb-[20px] text-center text-[#1E1E1E99] font-Ubuntu font-normal leading-[18px] xl:text-[24px] xl:leading-[36px] text-[12px]">
                      Lorem ipsum dolor sit amet consectetur. Enim proin
                      pellentesque erat mattis. Amet pharetra pellentesque
                      ultricies sit. Magna in nibh nisl vulputate purus in. At
                      arcu sapien nisl netus mattis sem.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
