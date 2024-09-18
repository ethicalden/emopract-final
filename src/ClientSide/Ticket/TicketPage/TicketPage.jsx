import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { TiTickOutline } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5"; // Importing a close icon

const TicketPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDialog2Open, setIsDialog2Open] = useState(false);
  const [isDialog3Open, setIsDialog3Open] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [phoneError, setPhoneError] = useState(""); // State for phone validation

  // List of valid phone numbers
  const validPhoneNumbers = [
    "9884110942",
    "9903309083",
    "9830083226",
    "19874045634",
  ];

  // Function to validate if phone number is one of the allowed numbers
  const validatePhoneNumber = (phone) => {
    // Check if the number is in the list of valid numbers
    return validPhoneNumbers.includes(phone);
  };

  const handleInputChange = (e) => {
    const phone = e.target.value;
    setInputValue(phone);

    // Check if the entered phone number is valid
    if (!validatePhoneNumber(phone)) {
      setPhoneError("Please enter one of the valid phone numbers.");
    } else {
      setPhoneError("");
    }
  };

  const handleOtpChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };

  const handleGetOtpClick = () => {
    if (!validatePhoneNumber(inputValue)) {
      setPhoneError("Please enter one of the valid phone numbers.");
    } else {
      setIsDialog2Open(true);
    }
  };

  const handleVerifyClick = () => {
    if (otpValues.every((otp) => otp.trim() !== "")) {
      setIsDialog2Open(false);
      setIsDialog3Open(true);
    } else {
      alert("Please fill in all OTP fields.");
    }
  };

  // Function to close Dialog 3 (Thanks For Verifying Modal)
  const handleCloseDialog3 = () => {
    setIsDialog3Open(false);
  };

  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex justify-center items-center">
        <div className="flex flex-col  items-center ">
          <div className="ticketInputDiv mb-[16px] bg-white rounded-full flex items-center w-[100%] xs:w-[100%] md:w-[85%] lg:w-[80%] xl:w-[95%]">
            <input
              type="text"
              placeholder="Enter phone number with country code"
              value={inputValue}
              onChange={handleInputChange}
              className="text-[#6E6E6E] flex-grow ticketInput focus:outline-none "
              required
            />
            <button
              onClick={handleGetOtpClick}
              disabled={!inputValue.trim() || phoneError}
              className="ticketButton bg-[#7EA254] text-white hover:bg-[#acd47e] transition"
            >
              Get Pass
            </button>
          </div>
          {phoneError && (
            <p className="text-white text-[16px] ">{phoneError}</p>
          )}
        </div>

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
                      Enter the OTP sent to your phone number.
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
                        onChange={(e) => handleOtpChange(index, e.target.value)}
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
          <div className="fixed inset-0 flex justify-center items-center z-[1000]">
            <div
              className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[60px] lg:px-[60px] xl:py-[60px] xl:px-[80px]
              2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative"
            >
              {/* Close button in the top right corner */}
              <button
                className="absolute top-[10px] right-[10px] p-2 text-gray-500 hover:text-gray-700 transition"
                onClick={handleCloseDialog3}
              >
                <IoCloseSharp size={24} />
              </button>

              <div className="text-center">
                <form className="text-left">
                  <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#7EA254] rounded-full mx-auto mb-[30px]">
                    <TiTickOutline size={35} className="text-white" />
                  </div>

                  <h1 className="text-[24px] text-center leading-[28px] font-medium font-Ubuntu lg:text-[30px]">
                    Thanks For Verifying
                  </h1>
                  <p
                    className="pt-[24px] pb-[20px] text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal leading-[18px] lg:text-[24px] lg:leading-[36px] 
                    xl:text-[24px] xl:leading-[36px]"
                  >
                    Your phone number has been successfully verified.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketPage;
