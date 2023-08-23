import React, { useState } from "react";
import WideWrapper from "@/components/shared/ComponentWrapper/WideWrapper";
import { HiOutlineStar } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import * as Icons from "../../SVG/Icons";

const Dex = () => {
  // states ------------->
  const [isFavorite, setIsFavorite] = useState(false);
  // states ends here ----------------->

  return (
    <WideWrapper style="bg-black">
      <div className="w-full h-[100px] flex justify-between items-center">
        {/* left portion --------------> */}
        <div className="flex justify-center items-center gap-2">
          {/* add to favorite icon */}
          {isFavorite ? (
            <HiOutlineStar
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-white text-[28px] cursor-pointer"
            />
          ) : (
            <HiStar
              onClick={() => setIsFavorite(!isFavorite)}
              className="text-white text-[32px] cursor-pointer"
            />
          )}
          {/* coin name */}
          <div className="flex justify-center items-center">
            <Icons.SolapeCoin className="w-[28px] h-[28px]" />
          </div>
        </div>
      </div>
    </WideWrapper>
  );
};

export default Dex;
