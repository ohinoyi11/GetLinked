import React from "react";
import idea from "../assets/BigIdea.png";

function Introduction() {
  return (
    <div className="border-b-[1px] flex flex-col md:flex-row gap-10 p-4 md:p-10 md:px-28 items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          className="w-80 md:w-[600px] lg:w-[800px] object-contain"
          src={idea}
          alt="Big Idea"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-10">
        <h3 className="text-2xl md:text-4xl text-white font-bold">
          Introduction to getLinked <br />{" "}
          <span className="text-[#D434FE]">Tech Hackathon 1.0</span>
        </h3>
        <p className="text-white mt-4 text-sm md:text-base font leading-10">
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

export default Introduction;
