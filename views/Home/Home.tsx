import React from "react";
import HeroSection from "@/components/Home/HeroSection/HeroSection";
import Dex from "@/components/Home/Dex/Dex";
import SeeTradingPairs from "@/components/Home/SeeTradingPairs/SeeTradingPairs";
import SolapeToken from "@/components/Home/SolapeToken/SolapeToken";
import TryTheSwap from "@/components/Home/TryTheSwap/TryTheSwap";
import Roadmap from "@/components/Home/Roadmap/Roadmap";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Dex />
      <SeeTradingPairs />
      <TryTheSwap />
      <SolapeToken />
      <Roadmap />
    </>
  );
};

export default Home;
