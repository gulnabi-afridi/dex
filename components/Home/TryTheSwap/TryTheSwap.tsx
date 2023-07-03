import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const TryTheSwap = () => {
  return (
    <Wrapper style=" bg-th-bkg-2 py-10">
      <div className="w-full grid grid-cols-2 justify-center items-center">
        {/* ==> 2nd col */}
        <div className="w-full flex flex-col items-start gap-6">
          <p className="text-th-brand leading-[40px] sm:leading-[55px] font-inter text-[34px] sm:text-[40px] lg:text-[45px] xl:text-[54px] font-bold">
            A rich offering of tradeable assets.
          </p>
          <p className="text-th-brand font-inter text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] font-normal">
            We have one of the most diverse and rapidly growing offering of
            tradeable assets. We move fast but also try to maintain quality.
          </p>
          <Link href="#" className="flex justify-center items-center gap-2">
            <p className="text-th-brand-secondary text-[18px] sm:text-[24px] font-semibold font-inter">
              Explore the DEX
            </p>
            <BsArrowRight className="text-th-brand-secondary text-[26px]" />
          </Link>
        </div>
        {/* ====> image */}
        <div className="w-full  h-[600px] relative">
          <Image src="/assets/trySwap.svg" fill alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default TryTheSwap;
