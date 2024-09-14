import React from "react";

const GradientButton = ({ text, onClick, className = "" }) => {
  return (
    <button
      className={`text-base p-2 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GradientButton;
