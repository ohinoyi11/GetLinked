import React from "react";
import key from "../assets/key.png";
import guykey from "../assets/guykey.png";
import GradientButton from "./Buttons";

function Policy() {
  return (
    <div className="text-white px-4 sm:px-8 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:ml-20 mb-8 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl font-bold pb-3 sm:pb-5">
            Privacy Policy and <br />
            Terms
          </h3>
          <p className="text-sm sm:text-base pb-6">
            Last updated on September 12, 2023
          </p>
          <p className="text-sm sm:text-base pb-10 w-full lg:w-96">
            Below are our privacy & policy, which outline a lot of goodies. It’s
            our aim to always take care of our participants.
          </p>
          <div className="border-purple-950 border-2 p-6 sm:p-10 w-full lg:w-[70%] font text-sm leading-6 sm:leading-8">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h4 className="font-bold mt-4">Licensing Policy</h4>
            <p className="font-bold mt-2">
              Here are terms of our Standard License:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>
                The Standard License grants you a non-exclusive right to
                navigate and register for our event.
              </li>
              <li>
                You are licensed to use the item available at any free source
                sites for your project development.
              </li>
            </ul>
            <GradientButton text="Read More" className="mt-4" />
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full lg:w-auto max-w-xs lg:max-w-none"
            src={key}
            alt=""
          />
          <img
            className="absolute z-10 lg:w-96 bottom-[-30%] lg:bottom-[-10%] left-0 lg:right-0"
            src={guykey}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Policy;
