// import React from 'react';

// const JoyCardOneHero = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default JoyCardOneHero;

// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const ServiceHero = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default ServiceHero;


// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const JoyCardOneHero = () => {

    const [open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <div>
                <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302380/Emopract/mHeroContact_bfrsw9.png")]
            bg-no-repeat bg-center bg-cover w-[100%] h-[100dvh] backgroundImage brig'>


                    {/* ============= mobile menu ========== */}
                    <nav className="lg:hidden ">
                        <div className="navbarLeftRightSpace flex justify-between items-center">
                            <div className="headerLogo">
                                <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png" alt="brand logo" />
                            </div>
                            <div>
                                <IoMenu className="text-[35px] text-white" onClick={handleMenu}></IoMenu>
                            </div>
                            {
                                open && <ul className="p-[32px] absolute top-0 right-0 bg-slate-100 w-[100%] z-50  transition-transform duration-1000 ease-in-out">


                                    <div className=" pb-[30px] flex justify-between items-center border-b-2 border-gray-200 ">

                                        <div className="headerLogo ">
                                            <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png" alt="brand logo" />
                                        </div>

                                        <div className="md:text-[30px] text-[35px] font-title " onClick={handleClose}>
                                            <MdClose className=''></MdClose >
                                        </div>


                                    </div>
                                    <div className="pt-[32px]">
                                        <li>Home</li>
                                        <Link to=""

                                        ><li >About Us</li></Link>

                                        <Link
                                            to=""

                                        ><li>Service</li></Link>

                                        <Link
                                            to=""


                                        ><li >Our team</li></Link>
                                        <Link
                                            to=""
                                        ><li>For Agencies</li></Link>
                                    </div>
                                    {/* <div className="herobtnParent">
                                    <button className="headerBtnTextWhite ">Start A Conversation</button>
                                    <button className="headerBtnText bg-[#E12026] text-white">Get a Quote</button>
                                </div> */}
                                </ul>
                            }
                        </div>
                    </nav>
                    {/* bg img footer content */}
                    <div className='heroImgParent hidden'>
                        <div>
                            <h2 className='heroImgTitle'>Joys of Living</h2>
                            <p className=' heroImgContentPara '>Home <span> <FaAngleRight ></FaAngleRight></span> service <FaAngleRight ></FaAngleRight>  Joys of Living</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoyCardOneHero;