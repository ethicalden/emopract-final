// eslint-disable-next-line no-unused-vars
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const menuClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* Fixed Navbar */}
      <nav className={`lg:hidden fixed-navbar ${scrolled ? "hidden" : ""}`}>
        <div className="navbarLeftRightSpace flex justify-between items-center bg-white">
          <div className="headerLogo ">
            <Link href="/">
              <img
                className="h-full w-full object-cover"
                src="/Images/emopractLogoUp.png"
                alt="brand logo"
              />
            </Link>
          </div>
          <div>
            <IoMenu
              className="text-[35px] md:text-[38px] text-[#7EA254]"
              onClick={handleMenu}
            ></IoMenu>
          </div>
          {open && (
            <ul className="px-[32px] py-[12px] absolute top-0 right-0 bg-white w-[100%] z-50 transition-transform duration-1000 ease-in-out">
              <div className="pb-[30px] flex justify-between items-center border-b-2 border-gray-200">
                <div className="headerLogo">
                  <Link href="/">
                    <img
                      className="h-full w-full object-cover"
                      src="/Images/emopractLogoUp.png"
                      alt="brand logo"
                    />
                  </Link>
                </div>
                <div
                  className="md:text-[38px] text-[35px] font-title"
                  onClick={handleClose}
                >
                  <MdClose className="text-[#7EA254]" />
                </div>
              </div>
              <div className="mobileMenuParent">
                <Link href="/" onClick={menuClose}>
                  <li>Home</li>
                </Link>
                <Link href="/about" onClick={menuClose}>
                  <li>About Us</li>
                </Link>
                <Link href="/service" onClick={menuClose}>
                  <li>Our Service</li>
                </Link>
                <Link href="/membership" onClick={menuClose}>
                  <li>Membership</li>
                </Link>
                <Link href="/event" onClick={menuClose}>
                  <li>Events</li>
                </Link>
                <Link href="/gallery" onClick={menuClose}>
                  <li>Gallery</li>
                </Link>

                <Link href="/blogs" onClick={menuClose}>
                  <li>Blogs</li>
                </Link>
                <Link href="/contact" onClick={menuClose}>
                  <li>Contact us</li>
                </Link>
              </div>
            </ul>
          )}
        </div>
      </nav>
      {/* large screen nav */}
      <div>
        <div className="hidden lg:block w-full absolute z-50">
          <div className="largeScreenMenu bg-white">
            <div className="headerLogo">
              <Link href="/">
                <img
                  className="h-full w-full object-cover"
                  src="/Images/emopractLogoUp.png"
                  alt="brand logo"
                />
              </Link>
            </div>

            <div>
              <div className="mobileMenuParent">
                <Link href="/" onClick={menuClose}>
                  <li>Home</li>
                </Link>
                <Link href="/about" onClick={menuClose}>
                  <li>About Us</li>
                </Link>
                <Link href="/service" onClick={menuClose}>
                  <li>Our Service</li>
                </Link>
                <Link href="/membership" onClick={menuClose}>
                  <li>Membership</li>
                </Link>
                <Link href="/event" onClick={menuClose}>
                  <li>Events</li>
                </Link>
                <Link href="/gallery" onClick={menuClose}>
                  <li>Gallery</li>
                </Link>

                <Link href="/blogs" onClick={menuClose}>
                  <li>Blogs</li>
                </Link>
                <Link href="/contact" onClick={menuClose}>
                  <li>Contact us</li>
                </Link>
              </div>
            </div>
            {/* <div>
              <button className="homeLargeAppoinMent">Appointment</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
