import React from "react";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Dex from "@/components/Home/Dex/Dex";
import SeeTradingPairs from "@/components/Home/SeeTradingPairs/SeeTradingPairs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Dex />
      <SeeTradingPairs />
    </>
  );
};

export default Home;
