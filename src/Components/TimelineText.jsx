import React from "react";

function TimelineText({ title, description, date }) {
  return (
    <div className="flex flex-col md:flex-row items-start relative mb-8 md:mb-12 text-white">
      {/* Text Content */}
      <div
        className={`ml-0 md:ml-10 ${
          description.length > 80 ? "text-sm md:text-base" : "text-base"
        }`}
      >
        <h4 className="text-lg md:text-xl font-bold">{title}</h4>
        <p className="text-sm md:text-base mt-1">{description}</p>
        <p className="text-xs md:text-sm text-gray-300 mt-2">{date}</p>
      </div>
    </div>
  );
}

export default TimelineText;
