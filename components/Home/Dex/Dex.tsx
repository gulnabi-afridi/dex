import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const Dex = () => {
  return (
    <div className="w-full flex items-center justify-end bg-th-bkg-4 relative pt-[12rem]">
      {/* 1st col */}
      <div className="w-full max-w-[500px] absolute left-36 flex flex-col gap-6 items-start">
        <p className="text-th-brand leading-[46px] font-inter text-[44px] font-bold">
          An unmatched DEX trading experience.
        </p>
        <p className="text-th-brand font-inter text-[18px] font-thin">
          Regardless of your trading level, Solape can accommodate you for a
          seamless, integrated experience trading in the Solana ecosystem.
        </p>
        <Link href="#" className="flex justify-center items-center gap-2">
          <p className="text-th-brand-secondary text-[20px] font-semibold font-inter">
            Explore the DEX
          </p>
          <BsArrowRight className="text-th-brand-secondary text-[26px]" />
        </Link>
      </div>
      {/* 2nd col */}
      <div className="w-full max-w-[1050px] h-[620px] relative">
        <Image src="/assets/dex.png" alt="" fill className="object-cover" />
      </div>
    </div>
  );
};

export default Dex;
