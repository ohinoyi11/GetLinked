import React from "react";
import Navbar from "./Navbar";
import light from "../assets/Purple-Lens.png";
import bulb from "../assets/Creative.svg";
import metrix from "../assets/metrix.png";
import glassman from "../assets/glassman.png";
import Countdown from "../assets/Countdown.png";
import "./Hero.css";
import GradientButton from "./Buttons";
import { Route } from "react-router-dom";
import Login from "../Pages/Login";

function Hero() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Route path="/Login" element={<Login />}></Route>
      {/* Hero Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left p-4 md:p-10">
        <h3 className="text-xl md:text-2xl text-white font mt-4 md:mt-8">
          Igniting a Revolution in HR Innovation
        </h3>

        <div className="flex flex-col md:flex-row border-b-[1px] border-white mt-4 md:mt-8">
          {/* Left Side Content */}
          <div className="flex flex-col items-center md:items-start md:pl-10">
            <img className="lens1 w-40 md:w-auto" src={light} alt="" />
            <img className="w-32 md:w-auto mt-4 md:mt-0" src={bulb} alt="" />
            <h1 className="text-4xl md:text-6xl font-bold text-white z-[100] mt-4 md:mt-6">
              getLinked Tech <br />
              Hackathon <span>1.0</span>
            </h1>
            <p className="text-white text-lg md:text-xl mt-2 md:mt-4">
              Participate in getLinked Tech Hackathon 2023 and stand a chance to
              win a big prize.
            </p>
            <GradientButton className="m-6 text-white" text="Register" />
            <img
              className="w-48 md:w-auto mt-6 md:mt-10"
              src={Countdown}
              alt=""
            />
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img className="glass w-64 md:w-auto" src={glassman} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
