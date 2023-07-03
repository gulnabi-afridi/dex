import React from "react";
import Image from "next/image";
import { PiCopyBold } from "react-icons/pi";
import { Data } from "@/data/JSON";

const SolapeToken = () => {
  return (
    <div className="w-full flex flex-col">
      {/* ========> solape token */}
      <div className="w-full h-[280px] bg-th-gradient-1">
        <div className="flex h-full justify-center items-center gap-8">
          {/* logo */}
          <div className="w-[200px] h-[200px] rounded-full bg-th-bkg-2 flex justify-center items-center">
            <Image
              src="/assets/sloapeToken.svg"
              alt=""
              width={137}
              height={134}
            />
          </div>
          {/* right portion */}
          <div className="flex flex-col items-start gap-5">
            <p className="text-[64px] leading-[50px] font-semibold text-th-brand font-inter">
              $SOLAPE Token
            </p>
            {/* copy token link */}
            <div className="flex bg-th-fkg-2 p-2 px-3 rounded-[30px] justify-center items-center gap-2">
              <p className="text-[18px] font-medium font-inter text-th-brand">
                GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGNa
              </p>
              <button className="w-[24px] h-[24px] bg-th-brand-secondary rounded-full flex justify-center items-center">
                <PiCopyBold className="text-th-brand text-[16px]" />
              </button>
            </div>
            {/* buttons */}
            <div className="flex justify-center items-center gap-3">
              {Data.solapeTokenButtonImage.map((item, index) => {
                return (
                  <button
                    key={index}
                    className="flex h-[46px] px-4 rounded-[8px] justify-center items-center bg-th-bkg-2"
                  >
                    <Image
                      src={`/${item.img}`}
                      width={item.width}
                      height={item.height}
                      alt=""
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =========> buy solape section */}
      <div className="w-full "></div>
    </div>
  );
};

export default SolapeToken;
