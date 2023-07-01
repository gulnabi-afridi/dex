import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import FillButton from "@/components/shared/Buttons/FillButton";
import OutlineButton from "@/components/shared/Buttons/OutlineButton";
import { LiaExchangeAltSolid } from "react-icons/lia";
import Card from "./Card";

const HeroSection = () => {
  return (
    <div className="w-full h-full bg-th-bkg-2">
      <Wrapper style="bg-th-bkg-2 min-h-[calc(100vh-100px)] flex flex-col  justify-center items-center">
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
          {/* powerd by openbook */}
          <div className="flex justify-center items-center">
            <p className="text-th-brand font-inter font-thin text-[16px]">
              Powered by
            </p>
            <Image
              src="/assets/openBookLogo.svg"
              width={150}
              height={60}
              alt=""
              className="object-cover"
            />
          </div>
          <h1 className="text-th-brand font-inter text-center leading-[95px] text-[80px] font-bold">
            The sharpest <br /> DEX on Solana.
          </h1>
          <p className="text-th-brand text-[24px] font-normal font-inter">
            Built for Apes, by Apes.
          </p>
          {/* ===> buttons */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <FillButton
              text="DEX trading"
              styles="w-[230px] h-[60px] bg-th-brand-secondary text-[24px] font-medium"
            />
            <OutlineButton
              text="Swap"
              isIcon={true}
              style="w-[170px] h-[60px] text-th-brand text-[24px] border-[3px] border-th-brand-secondary font-medium"
              icon=<LiaExchangeAltSolid className="text-th-brand text-[26px]" />
            />
          </div>
          {/* ====> cards */}
        </div>
        {/* ====> image */}
        {/* <div className="absolute -left-[16rem] -bottom-[7rem] ">
          <div className="w-[800px] h-[660px] relative">
            <Image
              src="/assets/leftPortion.png"
              alt=""
              fill
              className="object-contain "
            />
          </div>
        </div> */}
      </Wrapper>
      {/* ===> card */}
      <Card />
    </div>
  );
};

export default HeroSection;
