import React from "react";
import sponsors from "../assets/Partners.png";

function Sponsors() {
  return (
    <div className="text-white">
      <h1 className="text-center text-white text-3xl md:text-4xl font-bold mt-8 mb-4">
        Partners and Sponsors
      </h1>
      <p className="text-center text-white font text-sm md:text-base mb-8">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <img
        className="mx-auto h-auto max-w-full md:max-w-4/5 lg:max-w-3/4"
        src={sponsors}
        alt="Sponsors"
      />
    </div>
  );
}

export default Sponsors;
