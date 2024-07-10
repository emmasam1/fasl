import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import { IoHome, IoLogoTwitter } from "react-icons/io5";
import { IoMdCall, IoMdTime } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-[#454545] h-28 hidden sm:block">
        <div className="w-4/5 m-auto flex flex-row justify-between p-5">
          <div>
            <h2 className="font-bold text-white text-2xl">
              <span className="font-mono">F</span>A<span className="font-mono">S</span>L
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="flex items-center border-r-2 pr-5 border-gray-500">
              <div className="">
                <IoHome size={30} className="mr-2 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-white font-semibold">
                  No D22 Abdulwajahuni Plaza by Ado U turn,
                </p>
                <p className="text-xs text-gray-300 font-semibold">
                  Karu LGA Nasarawa State Nigeria,
                </p>
              </div>
            </div>
            <div className="flex items-center border-r-2 pr-5 pl-2 border-gray-500">
              <div>
                <IoMdCall size={30} className="mr-2 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-white font-semibold">
                  08082100835, 08092100835
                </p>
                <p className="text-xs text-gray-300 font-semibold">
                  frankafrica9@gmail.com francisesale31@yahoo.co.uk
                </p>
              </div>
            </div>
            <div className="flex items-center border-r-2 pr-5 pl-2 border-gray-500">
              <div>
                <IoMdTime size={30} className="mr-2 text-gray-300" />
              </div>
              <div>
                <p className="text-xs text-white font-semibold">Mon-Fri 8:00-5:00</p>
                <p className="text-xs text-gray-300 font-semibold">Sat-Sun CLOSED</p>
              </div>
            </div>
            <div className="flex items-center border-r-2 pr-5 pl-2 border-gray-500">
              <TiSocialFacebook
                size={20}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
              <IoLogoTwitter
                size={18}
                className="text-gray-300 cursor-pointer hover:text-red-600"
              />
            </div>
          </div>
        </div>
      </div>
      <nav
        className={`bg-white z-10 w-full m-auto lg:w-4/5 lg:relative lg:-top-7 ${
          isScrolled ? "fixed top-0 shadow-md transition duration-300" : ""
        }`}
      >
        <div className="pa-10 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <h2 className="font-bold text-2xl">
              <span className="font-mono">F</span>A<span className="font-mono">S</span>L
            </h2>
          </Link>
          <div className="relative md:hidden z-20">
            <Hamburger toggled={isOpen} toggle={toggleMenu} size={27} />
          </div>
          <div
            className={`mobile-menu ${isOpen ? "open" : ""} md:hidden`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 bg-white h-full">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 font-bold text-[#454545] hover:text-green-900 ${
                    location.pathname === "/" ? "nav-item-active" : ""
                  }`}
                  aria-current="page"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`block py-2 px-3 font-bold text-[#454545] hover:text-green-900 ${
                    location.pathname === "/services" ? "nav-item-active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="block py-2 px-3 font-bold text-[#454545] hover:text-green-900"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#"
                  className="block py-2 px-3 font-bold text-[#454545] hover:text-green-900"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
            <Link
              to="/"
              className={`relative py-2 px-3 font-bold text-[#454545] hover:text-green-900 ${
                location.pathname === "/" ? "nav-item-active" : ""
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                  location.pathname === "/" ? "after-visible" : "after-hidden"
                }`}
              ></span>
            </Link>
            <Link
              to="/services"
              className={`relative py-2 px-3 font-bold text-[#454545] hover:text-green-900 ${
                location.pathname === "/services" ? "nav-item-active" : ""
              }`}
            >
              Services
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                  location.pathname === "/services" ? "after-visible" : "after-hidden"
                }`}
              ></span>
            </Link>
            <Link
              to="/#"
              className={`relative py-2 px-3 font-bold text-[#454545] hover:text-green-900 ${
                location.pathname === "/#" ? "nav-item-active" : ""
              }`}
            >
              About
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                  location.pathname === "/#" ? "after-visible" : "after-hidden"
                }`}
              ></span>
            </Link>
            <Link
              to="/#"
              className={`relative py-2 px-3 font-bold text-[#454545] hover:text-green-900 ${
                location.pathname === "/#" ? "nav-item-active" : ""
              }`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                  location.pathname === "/#" ? "after-visible" : "after-hidden"
                }`}
              ></span>
            </Link>
          </div>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-10"
              onClick={closeMenu}
            ></div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

