import React, { useState } from "react";
import logo from "../images/rectangle-608@2x.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-midnight-blue-100 w-1/2">
          <img src={logo} alt="logo" className="w-1/2" />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-midnight-blue-100 hover:text-midnight-blue-200 hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full  flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-midnight-blue-100 hover:text-midnight-blue-200 mr-4"
            >
              Home
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-midnight-blue-100 hover:text-midnight-blue-200 mr-4"
            >
              Advertise
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-midnight-blue-100 hover:text-midnight-blue-200"
            >
              Supports
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-midnight-blue-100 hover:text-midnight-blue-200"
            >
              About
            </a>
          </div>
          {/* <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-midnight-blue-100 border-white hover:border-transparent hover:text-midnight-blue-200 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div> */}
        </div>
      </nav>
    </>
  );
}
