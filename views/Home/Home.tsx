import React from "react";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Dex from "@/components/Home/Dex/Dex";
import SeeTradingPairs from "@/components/Home/SeeTradingPairs/SeeTradingPairs";
import SolapeToken from "@/components/Home/SolapeToken/SolapeToken";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Dex />
      <SeeTradingPairs />
      <SolapeToken />
    </>
  );
};

export default Home;
