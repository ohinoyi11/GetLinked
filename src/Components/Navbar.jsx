import React, { useState } from "react";
import GradientButton from "./Buttons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex p-6 md:p-10 gap-10 text-white border-b-[1px] border-pink-500 justify-between items-center">
        <h3 className="text-3xl md:text-4xl p-6 font-bold">
          get<span className="text-[#D434FE]">Linked</span>
        </h3>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div className="hidden md:flex list-none gap-8 md:gap-10 text-base items-center">
          <li className="py-2 md:py-0">Timeline</li>
          <li className="py-2 md:py-0">Overview</li>
          <li className="py-2 md:py-0">FAQs</li>
          <li className="py-2 md:py-0">Contact</li>
          <Link to="/login">
            <GradientButton text="Register" />
          </Link>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full font text-white">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <ul className="flex flex-col items-center space-y-6 text-lg font">
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>
              <Link to="/login">
                <GradientButton text="Register" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
