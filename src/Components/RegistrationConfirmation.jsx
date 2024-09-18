import React from "react";
import { useNavigate } from "react-router-dom";
import congratulation from "../assets/congratulation.png";

function RegistrationConfirmation() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#150e28] text-white text-2xl font-bold z-50">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img className="h-36 w-56" src={congratulation} alt="" />
        <p>Congratulations, you've registered!</p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50" />
    </div>
  );
}

export default RegistrationConfirmation;
