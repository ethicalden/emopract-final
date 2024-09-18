import { useEffect, useRef, useState } from "react"
import Navbar from "../../Shared/Navbar/Navbar"
// import { TiTickOutline } from "react-icons/ti"
import { IoCloseSharp } from "react-icons/io5" // Importing a close icon
import ReactDom from "react-dom/client"

const TicketPage = () => {
    const [inputValue, setInputValue] = useState("")
    const [isDialog2Open, setIsDialog2Open] = useState(false)
    const [isDialog3Open, setIsDialog3Open] = useState(false)
    const [otpValues, setOtpValues] = useState(Array(6).fill(""))
    const inputRef = useRef(null)
    const [phoneError, setPhoneError] = useState("")

    const validPhoneNumbers = [
        "9884110942",
        "9903309083",
        "9830083226",
        "19874045634",
    ]
    const htmlContent = `
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
    </div>
    
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
      </div>
    </div>
    `
            : ""
    }
    
    ${
        isDialog3Open
            ? `
    <div class="fixed inset-0 flex justify-center items-center z-[1000]">
      <div class="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[60px] lg:px-[60px] xl:py-[60px] xl:px-[80px] 2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative">
        <button class="absolute top-[10px] right-[10px] p-2 text-gray-500 hover:text-gray-700 transition">
               <span class="iconPlaceholder cursor-pointer TiTickOutline handleCloseDialog3"></span>
        </button>
        <div class="text-center">
          <form class="text-left">
            <div class="flex justify-center items-center w-[80px] h-[80px] bg-[#7EA254] rounded-full mx-auto mb-[30px]">
            </div>
            <h1 class="text-[24px] text-center leading-[28px] font-medium font-Ubuntu lg:text-[30px]">
              Thanks For Verifying
            </h1>
            <p class="pt-[24px] pb-[20px] text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal leading-[18px] lg:text-[24px] lg:leading-[36px] xl:text-[24px] xl:leading-[36px]">
              Your phone number has been successfully verified.
            </p>
          </form>
        </div>
      </div>
    </div>
    `
            : ""
    }
    `
    const validatePhoneNumber = (phone) => {
        return validPhoneNumbers.includes(phone)
    }
    function insertIcons() {
        const iconPlaceholder = document.querySelector(".iconPlaceholder")
        if (iconPlaceholder) {
            iconPlaceholder.innerHTML = ""
            const iconElement = document.createElement("div")
            ReactDom.createRoot(
                document.querySelector(".iconPlaceholder")
            ).render(
                <IoCloseSharp
                    className="text-black"
                    width="35"
                    height="35"
                    size={24}
                />
            )
            iconPlaceholder.appendChild(iconElement)
        }
    }
    const handleInputChange = (e) => {
        const phone = e.target.value
        if (!validatePhoneNumber(phone)) {
            setPhoneError("Please enter one of the valid phone numbers.")
            setInputValue(phone)
        } else {
            setPhoneError("")
            setInputValue(phone)
        }
    }
    const handleOtpChange = (index, e) => {
        const updatedOtpValues = [...otpValues]
        updatedOtpValues[index] = e.target.value
        setOtpValues([...updatedOtpValues])
        setPhoneError("")
    }

    const handleGetOtpClick = () => {
        if (!validatePhoneNumber(inputValue)) {
            setPhoneError("Please enter one of the valid phone numbers.")
        } else {
            setIsDialog2Open(true)
        }
    }

    const handleCloseDialog3 = () => {
        setIsDialog3Open(false)
        setInputValue("")
        setOtpValues(Array(6).fill(""))
    }
    const handleVerifyClick = () => {
        if (otpValues.every((otp) => otp.trim() !== "")) {
            setIsDialog2Open(false)
            setIsDialog3Open(true)
        } else {
            alert("Please fill in all OTP fields.")
        }
    }

    useEffect(() => {
        const getPhoneNumber = document.querySelector(".phone_number")
        if (getPhoneNumber) {
            getPhoneNumber.value = inputValue

            inputRef.current = getPhoneNumber

            getPhoneNumber.addEventListener("input", handleInputChange)

            const length = inputRef.current.value.length
            if (inputRef.current) {
                inputRef.current.focus()
                inputRef.current.setSelectionRange(length, length)
            }
        }

        const getOtpValue = document.querySelectorAll(".otp_input")
        if (getOtpValue) {
            // getOtpValue.addEventListener("input", handleOtpChange)
            getOtpValue.forEach((input, index) => {
                input.addEventListener("input", (e) =>
                    handleOtpChange(index, e)
                )
            })
        }

        const getPassButton = document.querySelector(".ticketButton")
        if (getPassButton) {
            getPassButton.addEventListener("click", handleGetOtpClick)
        }

        // Verify button click listener
        const verifyButton = document.querySelector(".ticketVerifyBtn")
        if (verifyButton) {
            verifyButton.addEventListener("click", handleVerifyClick)
        }

        // Close Dialog 3 button click listener
        const closeDialogButton = document.querySelector(".handleCloseDialog3")
        if (closeDialogButton) {
            closeDialogButton.addEventListener("click", handleCloseDialog3)
        }

        return () => {
            // Cleanup listeners on unmount
            if (getPhoneNumber)
                getPhoneNumber.removeEventListener("change", handleInputChange)
            if (getPassButton)
                getPassButton.removeEventListener("click", handleGetOtpClick)
            if (verifyButton)
                verifyButton.removeEventListener("click", handleVerifyClick)
            if (closeDialogButton)
                closeDialogButton.removeEventListener(
                    "click",
                    handleCloseDialog3
                )

            if (getOtpValue) {
                getOtpValue.forEach((input, index) => {
                    insertIcons()
                    input.removeEventListener("input", (e) =>
                        handleOtpChange(index, e)
                    )
                })
            }
        }
    }, [inputValue, otpValues, isDialog2Open, isDialog3Open])
    return (
        <div className="relative">
            <Navbar />
            <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex justify-center items-center">
                <div className="flex flex-col  items-center ">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `${htmlContent}`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default TicketPage

/* 













*/
// function kd(){
//     <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex justify-center items-center">
//     <div className="flex flex-col  items-center ">
//         <div
//             dangerouslySetInnerHTML={{
//                 __html: `
//   <div class="ticketInputDiv mb-[16px] bg-white rounded-full flex items-center w-[100%] xs:w-[100%] md:w-[85%] lg:w-[80%] xl:w-[95%]">
//     <input
//       type="text"
//       placeholder="Enter your phone number"
//       class="text-[#6E6E6E] flex-grow ticketInput focus:outline-none phone_number"
//       required
//       value="${inputValue}"

//     />
//     <button
//       class="ticketButton bg-[#7EA254] text-white hover:bg-[#acd47e] transition pass"

//     >
//       Get Pass
//     </button>
//   </div>
//   ${
//       phoneError
//           ? `<p class="text-white text-[16px]">${phoneError}</p>`
//           : ""
//   }
//   `,
//             }}
//         ></div>

//         {/* Dialog 2 */}
//         {isDialog2Open && (
//             <div
//                 className="fixed inset-0 2xl:px-[240px] xl:px-[240px] lg:px-[200px]
// md:px-[150px] px-[100px]
// flex flex-wrap w-full justify-center items-center h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
//             >
//                 <div
//                     className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[30px] lg:px-[30px] 2xl:py-[80px] 2xl:px-[110px]
//   xl:py-[30px] xl:px-[30px]   bg-white shadow-lg rounded-lg relative"
//                 >
//                     <div className="text-center">
//                         <form className="text-left">
//                             <div className="2xl:px-[155px] xl:px-[45px]  lg:px-[45px]  md:px-[15px]">
//                                 <h1
//                                     className="text-[24px] text-center leading-[28px]
//             md:text-[24px]  md:leading-[28px] 2xl:text-[36px] 2xl:leading-[43px] xl:text-[25px] xl:leading-[40px]
//           lg:text-[25px] lg:leading-[40px] font-medium font-Ubuntu"
//                                 >
//                                     Verify Your Phone Number
//                                 </h1>
//                                 <p
//                                     className="pt-[24px] pb-[20px] leading-[18px] 2xl:text-[24px] 2xl:leading-[36px] xl:text-[22px] xl:leading-[25px]
//           lg:text-[18px] lg:leading-[25px] md:text-[18px] md:leading-[25px]  text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal "
//                                 >
//                                     Enter the OTP sent to your phone
//                                     number.
//                                 </p>
//                             </div>
//                             {/* OTP Input Boxes */}
//                             <div className="flex justify-center gap-[10px] pb-[40px]">
//                                 {otpValues.map((otp, index) => (
//                                     <input
//                                         key={index}
//                                         type="text"
//                                         maxLength="1"
//                                         value={otp}
//                                         onChange={(e) =>
//                                             handleOtpChange(
//                                                 index,
//                                                 e.target.value
//                                             )
//                                         }
//                                         className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[50px] xl:h-[50px] text-center border border-[#1E1E1E99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EA254] text-lg font-medium"
//                                     />
//                                 ))}
//                             </div>
//                         </form>
//                     </div>
//                     <div className="flex justify-center items-center h-full">
//                         <button
//                             onClick={handleVerifyClick}
//                             className="ticketVerifyBtn w-full bg-[#7EA254] hover:bg-[#acd47e] transition"
//                         >
//                             Verify
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         )}

//         {/* Dialog 3 */}
//         {isDialog3Open && (
//             <div className="fixed inset-0 flex justify-center items-center z-[1000]">
//                 <div
//                     className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[60px] lg:px-[60px] xl:py-[60px] xl:px-[80px]
//   2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative"
//                 >
//                     <button
//                         className="absolute top-[10px] right-[10px] p-2 text-gray-500 hover:text-gray-700 transition close-dialog-3"
//                         onClick={handleCloseDialog3}
//                     >
//                         <IoCloseSharp size={24} />
//                     </button>

//                     <div className="text-center">
//                         <form className="text-left">
//                             <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#7EA254] rounded-full mx-auto mb-[30px]">
//                                 <TiTickOutline
//                                     size={35}
//                                     className="text-white"
//                                 />
//                             </div>

//                             <h1 className="text-[24px] text-center font-Ubuntu font-medium">
//                                 Verified
//                             </h1>
//                             <p
//                                 className="pt-[24px] pb-[20px] leading-[18px] text-[12px] text-center text-[#1E1E1E99]
//         font-Ubuntu font-normal"
//                             >
//                                 Your phone number has been verified
//                                 successfully.
//                             </p>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )}
//     </div>
// </div>
// }

// function k (){
//   <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex justify-center items-center">
//   <div className="flex flex-col  items-center ">
//       <div className="ticketInputDiv mb-[16px] bg-white rounded-full flex items-center w-[100%] xs:w-[100%] md:w-[85%] lg:w-[80%] xl:w-[95%]">
//           <input
//               type="text"
//               placeholder="Enter your phone number"
//               value={inputValue}
//               onChange={handleInputChange}
//               className="text-[#6E6E6E] flex-grow ticketInput focus:outline-none "
//               required
//           />
//           <button
//               onClick={handleGetOtpClick}
//               disabled={!inputValue.trim() || phoneError}
//               className="ticketButton bg-[#7EA254] text-white hover:bg-[#acd47e] transition"
//           >
//               Get Pass
//           </button>
//       </div>
//       {phoneError && (
//           <p className="text-white text-[16px] ">{phoneError}</p>
//       )}
//   </div>

//   {/* Dialog 2 */}
//   {isDialog2Open && (
//       <div
//           className="fixed inset-0 2xl:px-[240px] xl:px-[240px]  lg:px-[200px]
// md:px-[150px] px-[100px]
// flex flex-wrap w-full justify-center items-center h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
//       >
//           <div
//               className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[30px] lg:px-[30px] 2xl:py-[80px] 2xl:px-[110px]
// xl:py-[30px] xl:px-[30px]   bg-white shadow-lg rounded-lg relative"
//           >
//               <div className="text-center">
//                   <form className="text-left">
//                       <div className="2xl:px-[155px] xl:px-[45px]  lg:px-[45px]  md:px-[15px]">
//                           <h1
//                               className="text-[24px] text-center leading-[28px]
//           md:text-[24px]  md:leading-[28px] 2xl:text-[36px] 2xl:leading-[43px] xl:text-[25px] xl:leading-[40px]
//         lg:text-[25px] lg:leading-[40px] font-medium font-Ubuntu"
//                           >
//                               Verify Your Phone Number
//                           </h1>
//                           <p
//                               className="pt-[24px] pb-[20px] leading-[18px] 2xl:text-[24px] 2xl:leading-[36px] xl:text-[22px] xl:leading-[25px]
//         lg:text-[18px] lg:leading-[25px] md:text-[18px] md:leading-[25px]  text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal "
//                           >
//                               Enter the OTP sent to your phone
//                               number.
//                           </p>
//                       </div>
//                       {/* OTP Input Boxes */}
//                       <div className="flex justify-center gap-[10px] pb-[40px]">
//                           {otpValues.map((otp, index) => (
//                               <input
//                                   key={index}
//                                   type="text"
//                                   maxLength="1"
//                                   value={otp}
//                                   onChange={(e) =>
//                                       handleOtpChange(
//                                           index,
//                                           e.target.value
//                                       )
//                                   }
//                                   className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[50px] xl:h-[50px] text-center border border-[#1E1E1E99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EA254] text-lg font-medium"
//                               />
//                           ))}
//                       </div>
//                   </form>
//               </div>
//               <div className="flex justify-center items-center h-full">
//                   <button
//                       onClick={handleVerifyClick}
//                       className="ticketVerifyBtn w-full bg-[#7EA254] hover:bg-[#acd47e] transition"
//                   >
//                       Verify
//                   </button>
//               </div>
//           </div>
//       </div>
//   )}

//   {/* Dialog 3 */}
//   {isDialog3Open && (
//       <div className="fixed inset-0 flex justify-center items-center z-[1000]">
//           <div
//               className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[60px] lg:px-[60px] xl:py-[60px] xl:px-[80px]
// 2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative"
//           >
//               {/* Close button in the top right corner */}
//               <button
//                   className="absolute top-[10px] right-[10px] p-2 text-gray-500 hover:text-gray-700 transition"
//                   onClick={handleCloseDialog3}
//               >
//                   <IoCloseSharp size={24} />
//               </button>

//               <div className="text-center">
//                   <form className="text-left">
//                       <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#7EA254] rounded-full mx-auto mb-[30px]">
//                           <TiTickOutline
//                               size={35}
//                               className="text-white"
//                           />
//                       </div>

//                       <h1 className="text-[24px] text-center leading-[28px] font-medium font-Ubuntu lg:text-[30px]">
//                           Thanks For Verifying
//                       </h1>
//                       <p
//                           className="pt-[24px] pb-[20px] text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal leading-[18px] lg:text-[24px] lg:leading-[36px]
//       xl:text-[24px] xl:leading-[36px]"
//                       >
//                           Your phone number has been successfully
//                           verified.
//                       </p>
//                   </form>
//               </div>
//           </div>
//       </div>
//   )}
// </div>
// }

// import { useEffect, useState } from "react"
// import { TiTickOutline } from "react-icons/ti"
// import { IoCloseSharp } from "react-icons/io5"

// const TicketPage = () => {
//     const [inputValue, setInputValue] = useState("")
//     const [isDialog2Open, setIsDialog2Open] = useState(false)
//     const [isDialog3Open, setIsDialog3Open] = useState(false)
//     const [otpValues, setOtpValues] = useState(Array(6).fill(""))
//     const [phoneError, setPhoneError] = useState("")

//     const validPhoneNumbers = [
//         "9884110942",
//         "9903309083",
//         "9830083226",
//         "19874045634",
//     ]

//     // Handle Get OTP Click
//     const handleGetOtpClick = () => {
//         if (validPhoneNumbers.includes(inputValue)) {
//             setIsDialog2Open(true)
//             setPhoneError("") // Clear any previous error
//         } else {
//             setPhoneError("Invalid phone number.")
//         }
//     }

//     // Handle Verify Click
//     const handleVerifyClick = () => {
//         if (otpValues.every((otp) => otp !== "")) {
//             setIsDialog3Open(true)
//             setIsDialog2Open(false)
//         } else {
//             alert("Please fill in all OTP fields.")
//         }
//     }

//     // Handle OTP Change
//     const handleOtpChange = (index, value) => {
//         const newOtpValues = [...otpValues]
//         newOtpValues[index] = value
//         setOtpValues(newOtpValues)
//     }

//     // Handle Close Dialog 3
//     const handleCloseDialog3 = () => {
//         setIsDialog3Open(false)
//     }

//     // Add event listeners after the HTML has been injected
//     useEffect(() => {
//         // Get Pass button click listener
//         const getPassButton = document.querySelector(".ticketButton")
//         if (getPassButton) {
//             getPassButton.addEventListener("click", handleGetOtpClick)
//         }

//         // Verify button click listener
//         const verifyButton = document.querySelector(".ticketVerifyBtn")
//         if (verifyButton) {
//             verifyButton.addEventListener("click", handleVerifyClick)
//         }

//         // Close Dialog 3 button click listener
//         const closeDialogButton = document.querySelector(".close-dialog-3")
//         if (closeDialogButton) {
//             closeDialogButton.addEventListener("click", handleCloseDialog3)
//         }

//         return () => {
//             // Cleanup listeners on unmount
//             if (getPassButton)
//                 getPassButton.removeEventListener("click", handleGetOtpClick)
//             if (verifyButton)
//                 verifyButton.removeEventListener("click", handleVerifyClick)
//             if (closeDialogButton)
//                 closeDialogButton.removeEventListener(
//                     "click",
//                     handleCloseDialog3
//                 )
//         }
//     }, [inputValue, otpValues])

//     return (
//         <div>
//             <div className="w-full h-[80vh] xs:h-[65vh] md:h-[80vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] bg-[#7EA254] flex justify-center items-center">
//                 <div className="flex flex-col  items-center ">
//                     <div
//                         dangerouslySetInnerHTML={{
//                             __html: `
//               <div class="ticketInputDiv mb-[16px] bg-white rounded-full flex items-center w-[100%] xs:w-[100%] md:w-[85%] lg:w-[80%] xl:w-[95%]">
//                 <input
//                   type="text"
//                   placeholder="Enter your phone number"
//                   class="text-[#6E6E6E] flex-grow ticketInput focus:outline-none"
//                   required
//                   value="${inputValue}"
//                 />
//                 <button
//                   class="ticketButton bg-[#7EA254] text-white hover:bg-[#acd47e] transition"
//                   disabled
//                 >
//                   Get Pass
//                 </button>
//               </div>
//               ${
//                   phoneError
//                       ? `<p class="text-white text-[16px]">${phoneError}</p>`
//                       : ""
//               }
//               `,
//                         }}
//                     ></div>

//                     {/* Dialog 2 */}
//                     {isDialog2Open && (
//                         <div
//                             className="fixed inset-0 2xl:px-[240px] xl:px-[240px] lg:px-[200px]
//             md:px-[150px] px-[100px]
//             flex flex-wrap w-full justify-center items-center h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
//                         >
//                             <div
//                                 className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[30px] lg:px-[30px] 2xl:py-[80px] 2xl:px-[110px]
//               xl:py-[30px] xl:px-[30px]   bg-white shadow-lg rounded-lg relative"
//                             >
//                                 <div className="text-center">
//                                     <form className="text-left">
//                                         <div className="2xl:px-[155px] xl:px-[45px]  lg:px-[45px]  md:px-[15px]">
//                                             <h1
//                                                 className="text-[24px] text-center leading-[28px]
//                         md:text-[24px]  md:leading-[28px] 2xl:text-[36px] 2xl:leading-[43px] xl:text-[25px] xl:leading-[40px]
//                       lg:text-[25px] lg:leading-[40px] font-medium font-Ubuntu"
//                                             >
//                                                 Verify Your Phone Number
//                                             </h1>
//                                             <p
//                                                 className="pt-[24px] pb-[20px] leading-[18px] 2xl:text-[24px] 2xl:leading-[36px] xl:text-[22px] xl:leading-[25px]
//                       lg:text-[18px] lg:leading-[25px] md:text-[18px] md:leading-[25px]  text-[12px] text-center text-[#1E1E1E99] font-Ubuntu font-normal "
//                                             >
//                                                 Enter the OTP sent to your phone
//                                                 number.
//                                             </p>
//                                         </div>
//                                         {/* OTP Input Boxes */}
//                                         <div className="flex justify-center gap-[10px] pb-[40px]">
//                                             {otpValues.map((otp, index) => (
//                                                 <input
//                                                     key={index}
//                                                     type="text"
//                                                     maxLength="1"
//                                                     value={otp}
//                                                     onChange={(e) =>
//                                                         handleOtpChange(
//                                                             index,
//                                                             e.target.value
//                                                         )
//                                                     }
//                                                     className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[55px] lg:h-[55px] xl:w-[50px] xl:h-[50px] text-center border border-[#1E1E1E99] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7EA254] text-lg font-medium"
//                                                 />
//                                             ))}
//                                         </div>
//                                     </form>
//                                 </div>
//                                 <div className="flex justify-center items-center h-full">
//                                     <button
//                                         onClick={handleVerifyClick}
//                                         className="ticketVerifyBtn w-full bg-[#7EA254] hover:bg-[#acd47e] transition"
//                                     >
//                                         Verify
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}

//                     {/* Dialog 3 */}
//                     {isDialog3Open && (
//                         <div className="fixed inset-0 flex justify-center items-center z-[1000]">
//                             <div
//                                 className="py-[50px] xs:px-[20px] xs:py-[25px] px-[24px] md:py-[60px] md:px-[90px] lg:py-[60px] lg:px-[60px] xl:py-[60px] xl:px-[80px]
//               2xl:py-[80px] 2xl:px-[110px] bg-white shadow-lg rounded-lg relative"
//                             >
//                                 <button
//                                     className="absolute top-[10px] right-[10px] p-2 text-gray-500 hover:text-gray-700 transition close-dialog-3"
//                                     onClick={handleCloseDialog3}
//                                 >
//                                     <IoCloseSharp size={24} />
//                                 </button>

//                                 <div className="text-center">
//                                     <form className="text-left">
//                                         <div className="flex justify-center items-center w-[80px] h-[80px] bg-[#7EA254] rounded-full mx-auto mb-[30px]">
//                                             <TiTickOutline
//                                                 size={35}
//                                                 className="text-white"
//                                             />
//                                         </div>

//                                         <h1 className="text-[24px] text-center font-Ubuntu font-medium">
//                                             Verified
//                                         </h1>
//                                         <p
//                                             className="pt-[24px] pb-[20px] leading-[18px] text-[12px] text-center text-[#1E1E1E99]
//                     font-Ubuntu font-normal"
//                                         >
//                                             Your phone number has been verified
//                                             successfully.
//                                         </p>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TicketPage
