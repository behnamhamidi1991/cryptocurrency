import Welcome from "@/components/Home/Main/Welcome/Welcome";
import "./main.scss";
import React from "react";
import Slider from "@/components/Home/Main/Slider/Slider";

const Home = () => {
  return (
    <div className="main-page">
      <Welcome />
      <Slider />
    </div>
  );
};

export default Home;
