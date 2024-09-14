import React from "react";
import Hero from "../Components/Hero";
import Introduction from "../Components/Introduction";
import Rules from "../Components/Rules";
import Criteria from "../Components/Criteria";
import FAQs from "../Components/FAQs";
import Timeline from "../Components/Timeline";
import Prices from "../Components/Prices";
import Sponsors from "../Components/Sponsors";
import Policy from "../Components/Policy";
import Footer from "../Components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";

function Home() {
  return (
    <div>
      <Hero />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <Introduction />
      <Rules />
      <Criteria />
      <FAQs />
      <Timeline />
      <Prices />
      <Sponsors />
      <Policy />
      <Footer />
    </div>
  );
}

export default Home;
