import React, { useState } from "react";
import gdesigner from "../assets/gdesigner.png";
import GradientButton from "../Components/Buttons";
import congratulation from "../assets/congratulation.png";

function Login() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show confirmation overlay
    setShowConfirmation(true);
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center pt-10 px-4 sm:px-6 md:px-8 lg:px-16 h-screen bg-[#150E28]">
      <div className="flex flex-1 items-center justify-center h-full space-y-6 md:space-y-0">
        {/* Image Section */}
        <div className="hidden md:block flex-1 h-full">
          <img
            className="w-full h-full object-cover"
            src={gdesigner}
            alt="Designer"
          />
        </div>

        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center w-full h-full">
          <div className="border-white border-2 leading-8 text-white p-3 sm:p-4 md:p-6 bg-[#150E28] rounded-lg shadow-lg w-full max-w-md h-auto">
            {/* Title */}
            <h3 className="text-[#D434FE] text-xl sm:text-lg md:text-2xl font-bold mb-2 text-center">
              Register
            </h3>
            <p className="text-sm md:text-base mb-2 text-center">
              Be part of this movement!
            </p>
            <h3 className="font font-bold text-base md:text-lg mb-4 text-center">
              CREATE YOUR ACCOUNT
            </h3>

            {/* Form */}
            <form className="space-y-3 mb-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Left Column */}
                <div>
                  <label
                    htmlFor="team-name"
                    className="block text-sm md:text-base mb-1"
                  >
                    Team's Name
                  </label>
                  <input
                    id="team-name"
                    type="text"
                    className="shadow bg-[#150E28] text-sm md:text-base text-white border border-gray-500 w-full rounded-md py-1 px-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />

                  <label
                    htmlFor="email"
                    className="block mt-2 text-sm md:text-base mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="shadow bg-[#150E28] text-sm md:text-base text-white border border-gray-500 w-full rounded-md py-1 px-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />

                  <label
                    htmlFor="category"
                    className="block mt-2 text-sm md:text-base mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="shadow bg-[#150E28] text-sm md:text-base text-white border border-gray-500 w-full rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
                    <option>Design</option>
                    <option>Development</option>
                    <option>Marketing</option>
                  </select>
                </div>

                {/* Right Column */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm md:text-base mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    className="shadow bg-[#150E28] text-sm md:text-base text-white border border-gray-500 w-full rounded-md py-1 px-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />

                  <label
                    htmlFor="project-topic"
                    className="block mt-2 text-sm md:text-base mb-1"
                  >
                    Project Topic
                  </label>
                  <input
                    id="project-topic"
                    type="text"
                    className="shadow bg-[#150E28] text-sm md:text-base text-white border border-gray-500 w-full rounded-md py-1 px-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  />

                  <label
                    htmlFor="group-size"
                    className="block mt-2 text-sm md:text-base mb-1"
                  >
                    Group Size
                  </label>
                  <select
                    id="group-size"
                    name="group-size"
                    className="shadow bg-[#150E28] text-sm md:text-base text-white border border-gray-500 w-full rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
              <div className="text-sm md:text-base mb-2">
                <p>Please review your registration details before submitting</p>
              </div>
              <div className="flex items-center space-x-2 text-white mb-3">
                <input
                  type="checkbox"
                  id="agree"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="agree" className="text-sm md:text-base">
                  I agree with the{" "}
                  <a href="#" className="text-indigo-500 underline">
                    event terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-indigo-500 underline">
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              <GradientButton
                className="block w-full text-sm md:text-base"
                text="Register Now"
              />
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Overlay */}
      {showConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r text-white text-2xl font-bold z-50">
          <div className="relative flex items-center justify-center h-screen w-screen z-10">
            <div className="border-[#D434FE] p-6 border-2 rounded-md flex flex-col items-center justify-center text-center">
              <img
                src={congratulation}
                alt="Congratulations"
                className="mb-4"
              />
              <p className="text-2xl mb-2 font">
                Congratulations! <br />
                You have successfully Registered!
              </p>
              <p className="text-sm font">
                Yes, it was easy and you did it! <br />
                Check your mailbox for the next step.
              </p>
              {/* Wider Button */}
              <GradientButton
                className="w-full mt-4 font text-sm"
                text="Back"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-[#150E28] opacity-80" />
        </div>
      )}
    </div>
  );
}

export default Login;
