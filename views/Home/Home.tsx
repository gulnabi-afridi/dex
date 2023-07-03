import React from "react";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Dex from "@/components/Home/Dex/Dex";
import SeeTradingPairs from "@/components/Home/SeeTradingPairs/SeeTradingPairs";
import SolapeToken from "@/components/Home/SolapeToken/SolapeToken";
import TryTheSwap from "@/components/Home/TryTheSwap/TryTheSwap";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Dex />
      <SeeTradingPairs />
      <TryTheSwap />
      <SolapeToken />
    </>
  );
};

export default Home;
