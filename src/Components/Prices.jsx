import React from "react";
import premium from "../assets/premium.png";
import cup from "../assets/cup.png";
import purple from "../assets/Purple2.png";
import first from "../assets/1stPosition.png";
import second from "../assets/2ndPosition.png";
import third from "../assets/3rdPosition.png";

function Prices() {
  return (
    <div className="bg-[url('../assets/premium.png')] flex flex-col md:flex-row items-start overflow-hidden h-screen pt-32 mb-40">
      <div className="relative flex-none w-full md:w-1/2 h-80 md:h-full">
        <img
          className="relative z-0 w-full h-full object-cover"
          src={purple}
          alt="Purple Background"
        />
        <img
          className="absolute top-0 left-0 z-10 w-1/2 md:w-auto"
          src={cup}
          alt="Cup"
        />
      </div>

      <div className="flex-1 text-white flex flex-col justify-between h-full p-4 md:p-8">
        <div>
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            Prizes and <br />
            Rewards
          </h3>
          <p className="text-sm md:text-base mt-2">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <img className="h-48 md:h-80" src={second} alt="Second Position" />
          <img className="h-56 md:h-96" src={first} alt="First Position" />
          <img className="h-48 md:h-80" src={third} alt="Third Position" />
        </div>
      </div>
    </div>
  );
}

export default Prices;
