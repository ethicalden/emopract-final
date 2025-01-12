import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Navbar from "../common/Navbar";
import { useRouter } from "next/navigation";

const TicketPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDialog2Open, setIsDialog2Open] = useState(false);
  const [isDialog3Open, setIsDialog3Open] = useState(false);
  const [isDialog4Open, setIsDialog4Open] = useState(false); // Add state for Dialog 4
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const inputRef = useRef(null);
  const [phoneError, setPhoneError] = useState("");
  const [otpError, setOtpError] = useState(""); // Add state for OTP error message
  const router = useRouter;

  const validPhoneNumbers = [
    "9884110942",
    "9903309083",
    "9830083226",
    "19874045634",
  ];

  const validatePhoneNumber = (phone) => {
    return validPhoneNumbers.includes(phone);
  };

  const handleInputChange = (e) => {
    const phone = e.target.value;
    if (!validatePhoneNumber(phone)) {
      setPhoneError("Please enter one of the valid phone numbers.");
      setInputValue(phone);
    } else {
      setPhoneError("");
      setInputValue(phone);
    }
  };

  const handleOtpChange = (index, e) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = e.target.value;
    setOtpValues([...updatedOtpValues]);
    setPhoneError("");
  };

  const handleGetOtpClick = () => {
    if (!validatePhoneNumber(inputValue)) {
      setPhoneError("Please enter one of the valid phone numbers.");
    } else {
      setIsDialog2Open(true);
    }
  };

  const handleCloseDialog3 = () => {
    setIsDialog3Open(false);
    setInputValue("");
    setOtpValues(Array(6).fill(""));
  };

  const handleCloseDialog4 = () => {
    setIsDialog4Open(false);
    setOtpValues(Array(6).fill(""));
  };

  const validateOtp = (otpArray) => {
    const validOtp = ["1", "2", "3", "4", "5", "6"]; // Example of correct OTP
    return otpArray.every((otp, index) => otp === validOtp[index]);
  };

  const handleVerifyClick = () => {
    if (otpValues.every((otp) => otp.trim() !== "")) {
      if (validateOtp(otpValues)) {
        // OTP is correct, show Dialog 3
        setIsDialog2Open(false);
        setIsDialog3Open(true);
        setOtpError(""); // Clear OTP error if all fields are filled
      } else {
        // OTP is incorrect, show Dialog 4
        setIsDialog2Open(false);
        setIsDialog4Open(true);
      }
    } else {
      setOtpError("Please fill up all the digits."); // Set the OTP error message
    }
  };
  const handleBackBtn = () => {
    setIsDialog4Open(false);
    setOtpValues(Array(6).fill(""));
    setIsDialog2Open(true);
  };
  const handleNavigateTktForm = () => {
    router.push("/ticketForm");
  };
  useEffect(() => {
    const getPhoneNumber = document.querySelector(".phone_number");
    if (getPhoneNumber) {
      getPhoneNumber.value = inputValue;

      inputRef.current = getPhoneNumber;

      getPhoneNumber.addEventListener("input", handleInputChange);

      const length = inputRef.current.value.length;
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(length, length);
      }
    }
    const bckBtn = document.querySelector(".bkBtn");
    if (bckBtn) {
      bckBtn.addEventListener("click", handleBackBtn);
    }

    const getOtpValue = document.querySelectorAll(".otp_input");
    if (getOtpValue) {
      getOtpValue.forEach((input, index) => {
        input.addEventListener("input", (e) => handleOtpChange(index, e));
      });
    }

    const getPassButton = document.querySelector(".ticketButton");
    if (getPassButton) {
      getPassButton.addEventListener("click", handleGetOtpClick);
    }

    const verifyButton = document.querySelector(".ticketVerifyBtn");
    if (verifyButton) {
      verifyButton.addEventListener("click", handleVerifyClick);
    }

    const closeDialogButton3 = document.querySelector(".handleCloseDialog3");
    if (closeDialogButton3) {
      closeDialogButton3.addEventListener("click", handleCloseDialog3);
    }

    const closeDialogButton4 = document.querySelector(".handleCloseDialog4");
    if (closeDialogButton4) {
      closeDialogButton4.addEventListener("click", handleCloseDialog4);
    }
    const opnFormBtn = document.querySelector(".opnFrmBtn");
    if (opnFormBtn) {
      opnFormBtn.addEventListener("click", handleNavigateTktForm);
    }
    if (isDialog2Open || isDialog3Open || isDialog4Open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      if (getPhoneNumber)
        getPhoneNumber.removeEventListener("change", handleInputChange);
      if (getPassButton)
        getPassButton.removeEventListener("click", handleGetOtpClick);
      if (verifyButton)
        verifyButton.removeEventListener("click", handleVerifyClick);
      if (closeDialogButton3)
        closeDialogButton3.removeEventListener("click", handleCloseDialog3);
      if (closeDialogButton4)
        closeDialogButton4.removeEventListener("click", handleCloseDialog4);

      if (getOtpValue) {
        getOtpValue.forEach((input, index) => {
          input.removeEventListener("input", (e) => handleOtpChange(index, e));
        });
      }
      if (bckBtn) {
        bckBtn.removeEventListener("click", handleBackBtn);
      }
      if (opnFormBtn)
        opnFormBtn.removeEventListener("click", handleNavigateTktForm);
      document.body.style.overflow = "";
    };
  }, [inputValue, otpValues, isDialog2Open, isDialog3Open, isDialog4Open]);

  return (
    <div className="relative">
      <Navbar />
      <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex justify-center items-center">
        <div className="flex flex-col items-center ">
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <div class="flex flex-col items-center ">
                  <div class="ticketInputDiv mb-[16px] bg-white rounded-full flex items-center w-[100%] xs:w-[100%] md:w-[85%] lg:w-[80%] xl:w-[95%]">
                    <input type="text" placeholder="Enter your phone number" value="${inputValue}" class="text-[#6E6E6E] flex-grow ticketInput focus:outline-none phone_number" required>
                    <button ${!inputValue.trim() ||
                      (phoneError &&
                        "disabled")} class="ticketButton bg-[#7EA254] text-white hover:bg-[#acd47e] transition">
                      Get Pass
                    </button>
                  </div>
                  ${
                    phoneError
                      ? `<p class="text-white text-[16px] ">${phoneError}</p>`
                      : ""
                  }
                  ${
                    isDialog2Open
                      ? `
                  <div class="fixed inset-0 2xl:px-[240px] xl:px-[240px] lg:px-[200px] md:px-[150px] px-[100px] flex flex-wrap w-full justify-center items-center h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                    <div class="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[30px] lg:px-[30px] 2xl:py-[80px] 2xl:px-[110px] xl:py-[30px] xl:px-[30px] bg-white shadow-lg rounded-lg relative">
                      <div class="text-center">
                        <form class="text-left">
                          <div class="2xl:px-[155px] xl:px-[45px] lg:px-[45px] md:px-[15px]">
                            <h1 class="text-[24px] text-center leading-[28px] md:text-[24px] md:leading-[28px] 2xl:text-[36px] 2xl:leading-[43px] xl:text-[25px] xl:leading-[40px] lg:text-[25px] lg:leading-[40px] font-medium font-Ubuntu">
                              Verify Your Phone Number
                            </h1>
                            <p class="pt-[24px] pb-[20px] leading-[18px] 2xl:text-[24px] 2xl:leading-[36px] xl:text-[22px] xl:leading-[25px] lg:text-[18px] lg:leading-[25px] md:text-[18px] md:leading-[25px] text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal">
                              Enter the OTP sent to your phone number.
                            </p>
                          </div>
                          <div class="flex justify-center gap-[10px] pb-[40px]">
                            ${otpValues
                              .map(
                                (otp, index) =>
                                  `<input key="${index}" type="text" maxLength="1" value="${otp}" class="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[50px] xl:h-[50px] text-center border border-[#1E1E1E99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EA254] text-lg font-medium otp_input">`
                              )
                              .join("")}
                          </div>
                        </form>
                      </div>
                      <div class="flex justify-center items-center h-full">
                        <button class="ticketVerifyBtn w-full bg-[#7EA254] hover:bg-[#acd47e] transition">
                          Verify
                        </button>
                      </div>
                      ${
                        otpError
                          ? `<p class="text-red-500 text-center mt-2">${otpError}</p>`
                          : ""
                      } <!-- OTP Error Message -->
                    </div>
                  </div>
                  `
                      : ""
                  }
                  <div class="flex flex-col items-center">
          ${
            isDialog3Open
              ? `
          <div class="fixed inset-0 flex justify-center items-center z-[1000]">
            <div class="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[60px] lg:px-[60px] xl:py-[60px] xl:px-[80px] 2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative">
              
              <div class="text-center">
                  <div class="flex justify-center items-center w-[80px] h-[80px]  mx-auto mb-[50px]">
                    <img src="/Animation - 1726910192569.gif" alt="" className="mb-[30px]"/>
                  </div>
                  
                  <p class="pt-[24px] pb-[20px] text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal leading-[18px] lg:text-[24px] lg:leading-[36px] xl:text-[24px] xl:leading-[36px]">
                    Your OTP has been successfully verified.
                  </p>
                  <div class="flex justify-center bottom-0 items-center z-[1001]">
                            <button class="bg-[#7EA254] text-white px-[20px] py-[10px] rounded-lg hover:bg-[#acd47e] transition opnFrmBtn">
                                Open Form
                            </button>
                     </div>
              </div>
            </div>
          </div>`
              : ""
          }
          
                <!-- Dialog 4 for incorrect OTP -->
                <div class="flex flex-col items-center">
                  ${
                    isDialog4Open
                      ? `
                  <div class="fixed inset-0 flex justify-center items-center z-[1000] overflow-hidden h-screen">
                    <div class="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[60px] lg:px-[60px] xl:py-[60px] xl:px-[80px] 2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative">
                      
                       <div class="text-center">
                  <div class="flex justify-center items-center w-[80px] h-[80px]  mx-auto">
                    <img
            src="/Animation - 1726908974976 (1).gif"
            alt=""
          />
                  </div>
                  
                  <p class="pt-[24px] pb-[20px] text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal leading-[18px] lg:text-[24px] lg:leading-[36px] xl:text-[24px] xl:leading-[36px]">
                    wrong OTP please try again
                  </p>
                    </div>
                    <div class="flex justify-center bottom-0 items-center z-[1001]">
                            <button class="bg-[#7EA254] text-white px-[20px] py-[10px] rounded-lg hover:bg-[#acd47e] transition bkBtn">
                                Go Back
                            </button>
                    </div>
                  </div>`
                      : ""
                  }
                </div>
              `,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
