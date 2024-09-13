import React from "react";

function Footer() {
  return (
    <div className="bg-[#100B20] text-white py-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="mb-10 lg:mb-0 lg:w-1/3">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">
            get<span className="text-[#D434FE]">Linked</span>
          </h3>
          <p className="text-base mb-4">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology.
          </p>
          <p className="text-sm">
            <a href="#terms" className="underline">
              Terms of Use
            </a>{" "}
            |{" "}
            <a href="#privacy" className="underline">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="mb-10 lg:mb-0 lg:w-1/3">
          <h3 className="text-xl font-semibold mb-3">Useful Links</h3>
          <ul className="list-disc pl-5 text-base space-y-2">
            <li>
              <a href="#overview" className="hover:underline">
                Overview
              </a>
            </li>
            <li>
              <a href="#timeline" className="hover:underline">
                Timeline
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#register" className="hover:underline">
                Register
              </a>
            </li>
            <li>
              <a href="#follow" className="hover:underline">
                Follow Us
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/3">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="list-none text-base space-y-2">
            <li>+234 6707653444</li>
            <li>27, Alara Street Yaba, 100012 Lagos State</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm mt-10">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
}

export default Footer;
