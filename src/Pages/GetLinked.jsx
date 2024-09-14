import React from "react";
import "./GetLinked.css";
import Navbar from "../Components/Navbar";

import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "../Components/Home";

function GetLinked() {
  return (
    <div className="background">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default GetLinked;
