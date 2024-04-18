import Welcome from "@/components/Home/Main/Welcome/Welcome";
import "./main.scss";
import React from "react";
import Slider from "@/components/Home/Main/Slider/Slider";
import Icons from "@/components/Home/Main/Icons/Icons";
import Market from "@/components/Home/Main/Market/Market";

const Home = () => {
  return (
    <div className="main-page">
      <Welcome />
      <Slider />
      <Icons />
      <Market />
    </div>
  );
};

export default Home;
