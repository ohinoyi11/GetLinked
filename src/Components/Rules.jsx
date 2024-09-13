import React from "react";
import rules from "../assets/rules.png";

function Rules() {
  return (
    <div className="flex flex-col md:flex-row-reverse p-6 md:p-32 text-white items-center border-b-[1px]">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          className="w-64 md:w-auto object-contain"
          src={rules}
          alt="Rules and Guidelines"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pr-10">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Rules and <br />
          Guidelines
        </h3>
        <p className="text-sm md:text-base">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </div>
  );
}

export default Rules;
