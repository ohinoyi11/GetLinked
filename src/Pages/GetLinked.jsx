import React from "react";
import "./GetLinked.css";
import Navbar from "../Components/Navbar";

import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "../Components/Home";
import RegistrationConfirmation from "../Components/RegistrationConfirmation";

function GetLinked() {
  return (
    <div className="background">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/confirmation" element={<RegistrationConfirmation />} />
      </Routes>
    </div>
  );
}

export default GetLinked;
