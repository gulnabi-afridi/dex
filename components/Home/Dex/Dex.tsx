import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";

const Dex = () => {
  return (
    // <div className="w-full flex items-center justify-end bg-th-bkg-4 relative pt-[12rem]">
    // <div className="w-full max-w-[600px] absolute left-36 flex flex-col gap-6 items-start">
    //   <p className="text-th-brand leading-[55px] font-inter text-[54px] font-bold">
    //     An unmatched DEX trading experience.
    //   </p>
    //   <p className="text-th-brand font-inter text-[24px] font-thin">
    //     Regardless of your trading level, Solape can accommodate you for a
    //     seamless, integrated experience trading in the Solana ecosystem.
    //   </p>
    //   <Link href="#" className="flex justify-center items-center gap-2">
    //     <p className="text-th-brand-secondary text-[24px] font-semibold font-inter">
    //       Explore the DEX
    //     </p>
    //     <BsArrowRight className="text-th-brand-secondary text-[26px]" />
    //   </Link>
    // </div>
    //   {/* 2nd col */}
    //   <div className="w-full max-w-[1050px] h-[620px] relative">
    //     <Image src="/assets/dex.png" alt="" fill className="object-cover" />
    //   </div>
    // </div>
    <Wrapper style="bg-th-bkg-4 min-h-[880px] flex  justify-center items-center relative">
      <div className="w-full max-w-[600px] flex flex-col gap-6 items-start mt-28">
        <p className="text-th-brand leading-[55px] font-inter text-[54px] font-bold">
          An unmatched DEX trading experience.
        </p>
        <p className="text-th-brand font-inter text-[24px] font-thin">
          Regardless of your trading level, Solape can accommodate you for a
          seamless, integrated experience trading in the Solana ecosystem.
        </p>
        <Link href="#" className="flex justify-center items-center gap-2">
          <p className="text-th-brand-secondary text-[24px] font-semibold font-inter">
            Explore the DEX
          </p>
          <BsArrowRight className="text-th-brand-secondary text-[26px]" />
        </Link>
      </div>
      <div className="w-full max-w-[1150px] absolute right-0 bottom-0">
        <div className="w-full h-[650px] relative">
          <Image src="/assets/dex.png" alt="" fill className="object-fill" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Dex;
