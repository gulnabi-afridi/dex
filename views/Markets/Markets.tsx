import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

const Markets = () => {
  const [filter, setFilter] = useState({
    all: false,
    favorite: false,
  });

  return (
    <div className="w-full flex flex-col">
      {/* filter section -------------- */}
      <div className="w-full bg-[url('/assets/marketsBg.png')] h-[195px] bg-cover bg-no-repeat bg-center flex flex-col gap-6 justify-center items-center">
        <p className="text-th-brand text-[32px] font-medium font-inter">
          Marktes
        </p>
        <div className="w-full max-w-[750px] gap-2 grid grid-cols-[1.4fr,2fr,1.5fr]">
          {/* all + favorite button */}
          <div className="w-full h-[60px] bg-[#121616] flex justify-center items-center rounded-[8px] p-[7px]">
            <button
              onClick={() => {
                setFilter({ all: true, favorite: false });
              }}
              className={`w-[68px] ${
                filter.all
                  ? "bg-gradient-to-r from-[#FF810A] to-[#FFAB5C] "
                  : "bg-transparent"
              }  text-[16px] h-full font-normal text-th-brand rounded-[8px]`}
            >
              All
            </button>
            <button
              onClick={() => {
                setFilter({ all: false, favorite: true });
              }}
              className={`${
                filter.favorite
                  ? "bg-gradient-to-r from-[#FF810A] to-[#FFAB5C]"
                  : "bg-transparent"
              } w-[calc(100%-68px)] h-full text-[16px] font-normal text-th-brand rounded-[8px]`}
            >
              Favorite
            </button>
          </div>
          {/* search input */}
          <div className="w-full grid grid-cols-[0.2fr,1fr] h-[60px] justify-center items-center bg-[#121616] rounded-[8px]">
            <button className="w-full flex justify-center items-center">
              <AiOutlineSearch className="text-[#676767] text-[27px]" />
            </button>
            <input
              className="bg-transparent text-[20px] font-inter font-thin text-th-brand outline-none placeholder:text-[20px] placeholder:font-inter placeholder:font-thin placeholder:text-[#676767]"
              placeholder="Search ticker or name..."
            />
          </div>
          {/* sort by volume select box */}
          <div className="w-full h-[60px] bg-[#2E3838] cursor-pointer flex justify-center items-center gap-2 rounded-[8px]">
            <p className="text-[20px] font-inter font-thin text-th-brand">
              Sorted by Volume
            </p>
            <FiChevronDown className="text-th-brand text-[28px] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Markets;
