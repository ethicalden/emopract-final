
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const InduvisulBlogHero = () => {

    const [open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const menuClose=()=>{
        setOpen(false) ;
    }


    return (
        <div>
            <div>
                <div className='bg-[url("https://res.cloudinary.com/dshn2s0tc/image/upload/v1719490307/Emopract/coomonHero_jzrn0s.png")]
            bg-no-repeat bg-center bg-cover w-[100%] h-[100dvh] backgroundImage brig'>


                    {/* ============= mobile menu ========== */}
                    <nav className="lg:hidden ">
                        <div className="navbarLeftRightSpace flex justify-between items-center">
                            <div className="headerLogo">
                               <Link to ="/"> <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png" alt="brand logo" /></Link>
                            </div>
                            <div>
                                <IoMenu className="text-[35px] text-white" onClick={handleMenu}></IoMenu>
                            </div>
                            {
                                open && <ul className="p-[32px] absolute top-0 right-0 bg-slate-100 w-[100%] z-50  transition-transform duration-1000 ease-in-out">


                                    <div className=" pb-[30px] flex justify-between items-center border-b-2 border-gray-200 ">

                                        <div className="headerLogo ">
                                           <Link to ="/"> <img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png" alt="brand logo" /></Link>
                                        </div>

                                        <div className="md:text-[30px] text-[35px] font-title " onClick={handleClose}>
                                            <MdClose className=''></MdClose >
                                        </div>


                                    </div>
                                    <div className="mobileMenuParent">
                                        <Link to="/" onClick={menuClose}><li>Home</li></Link>
                                        <Link to="/About" onClick={menuClose}><li>About Us</li></Link>
                                        <Link to="/service" onClick={menuClose}><li>Our Service</li></Link>
                                        <Link to="/membership" onClick={menuClose}><li>Membership</li></Link>
                                        <Link to="/event" onClick={menuClose}><li>Events</li></Link>
                                        
                                        {/* <Link to="/blogs" onClick={menuClose}><li>Blogs</li></Link> */}
                                        <Link to="/contact" onClick={menuClose}><li>Contact us</li></Link>

                                    </div>
                                </ul>
                            }
                        </div>
                    </nav>

                     {/* j=============== Large Navbar =========== */}
                <div>
                    <div className='hidden lg:block absolute z-50 w-full'>
                        <div className='largeScreenMenu '>
                            <div className="headerLogo">
                                <Link to="/"><img className="h-full w-full object-cover" src="https://res.cloudinary.com/dshn2s0tc/image/upload/v1719302631/Emopract/mHeroLogo_techun.png" alt="brand logo" /></Link>
                            </div>

                            <div>
                                <div className="mobileMenuParent">
                                    <Link to="/" onClick={menuClose}><li>Home</li></Link>
                                    <Link to="/About" onClick={menuClose}><li>About Us</li></Link>
                                    <Link to="/service" onClick={menuClose}><li>Our Service</li></Link>
                                    <Link to="/membership" onClick={menuClose}><li>Membership</li></Link>
                                    <Link to="/event" onClick={menuClose}><li>Events</li></Link>

                                    {/* <Link to="/blogs" onClick={menuClose}><li>Blogs</li></Link> */}
                                    <Link to="/contact" onClick={menuClose}><li>Contact us</li></Link>

                                </div>
                            </div>
                            <div>
                                <button className='homeLargeAppoinMent'>Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                    {/* bg img footer content */}
                    <div className='heroImgParent hidden'>
                        <div>
                            <h2 className='heroImgTitle'> Blog</h2>
                            <p className=' heroImgContentPara '>Home <span> <FaAngleRight ></FaAngleRight></span> Induvisul Blog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InduvisulBlogHero;