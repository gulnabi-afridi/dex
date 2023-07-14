import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BiExpandVertical } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BsInfoLg } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import Image from "next/image";
import { Checkbox } from "@mui/material";
import { Pagination } from "@mui/material";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Data } from "@/data/JSON";

const Markets = () => {
  const [filter, setFilter] = useState({
    all: true,
    favorite: false,
  });

  const gradientForGraph = "url(#gradient)";

  return (
    <div className="w-full min-h-full flex flex-col">
      {/* filter section -------------- */}
      <div className="w-full bg-[url('/assets/marketsBg.png')] h-[195px] bg-cover bg-no-repeat bg-center flex flex-col gap-6 justify-center items-center">
        <p className="text-th-brand text-[32px] font-medium font-inter">
          Marktes
        </p>

        <div className="w-full max-w-[750px] gap-2 grid grid-cols-[1.4fr,2fr,1.5fr]">
          {/* all + favorite button */}
          <div className="w-full h-[57px] bg-[#121616] flex justify-center items-center rounded-[8px] p-[7px]">
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
          <div className="w-full grid grid-cols-[0.2fr,1fr] h-[57px] justify-center items-center bg-[#121616] rounded-[8px]">
            <button className="w-full flex justify-center items-center">
              <AiOutlineSearch className="text-[#676767] text-[27px]" />
            </button>
            <input
              className="bg-transparent text-[18px] font-inter font-thin text-th-brand outline-none placeholder:text-[18px] placeholder:font-inter placeholder:font-thin placeholder:text-[#676767]"
              placeholder="Search ticker or name..."
            />
          </div>

          {/* sort by volume select box */}
          <div className="w-full h-[56px] bg-[#2E3838] cursor-pointer flex justify-center items-center gap-2 rounded-[8px]">
            <p className="text-[18px] font-inter font-thin text-th-brand">
              Sorted by Volume
            </p>
            <FiChevronDown className="text-th-brand text-[26px] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* table ------------------------ */}
      <div className="w-full px-4 sm:px-10 bg-th-bkg-2">
        {/* table column */}

        <div className="w-full h-[72px] grid grid-cols-[0.3fr,1.2fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,1.2fr,0.2fr] justify-center items-center">
          {Data.marketsData.tableColumn.map((item, index) => {
            return (
              <>
                {index === 0 ||
                Data.marketsData.tableColumn.length === index + 1 ? (
                  <div className="w-full flex justify-center items-center h-[40px]">
                    {item.colName}
                  </div>
                ) : (
                  <div
                    key={index}
                    className="w-full flex justify-start  items-center gap-[5px]"
                  >
                    {item.isExpandIcon && (
                      <BiExpandVertical className="text-[#676767] text-[16px] cursor-pointer" />
                    )}
                    <p className="text-[16px] capitalize font-medium font-inter text-[#676767]">
                      {item.colName}
                    </p>
                    {item.timeLabel && (
                      <p className="text-[11px] font-inter font-normal text-[#FFCB99] bg-[#2E3838] p-[1px] rounded-[2px]">
                        {item.timeLabelValue}
                      </p>
                    )}
                  </div>
                )}
              </>
            );
          })}
        </div>
        {/* table row */}
        <div className="w-full flex flex-col">
          {Data.marketsData.tableRows.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full h-[72px] grid grid-cols-[0.3fr,1.2fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,1.2fr,0.2fr] justify-center items-center"
              >
                {/* favorite icon */}
                <div className="w-full flex justify-start items-center">
                  <Checkbox
                    // {...label}
                    icon={
                      <AiOutlineStar className="text-[28px] text-th-brand" />
                    }
                    checkedIcon={
                      <BsStarFill className="text-[28px] text-th-gradient-1" />
                    }
                  />
                </div>
                {/* name */}
                <div className="w-full flex justify-start items-center gap-3">
                  <Image
                    src={item.name.image}
                    width={40}
                    height={40}
                    className="object-contain"
                    alt=""
                  />
                  <div className="flex flex-col">
                    <p className="text-[16px] font-inter font-normal text-th-brand">
                      {item.name.coinName}
                    </p>
                    <p className="uppercase text-[16px] font-inter font-semibold text-th-brand">
                      {item.name.coinType}
                    </p>
                  </div>
                </div>
                {/* pair */}
                <div className="w-full flex justify-start items-center">
                  <p className="uppercase text-[16px] text-th-brand font-inter font-normal">
                    {item.pair}
                  </p>
                </div>
                {/* price */}
                <div className="w-full flex justify-start items-center">
                  <p className="uppercase text-[16px] text-th-brand font-inter font-normal">
                    ${item.price}
                  </p>
                </div>
                {/* delta */}
                <div className="w-full flex gap-1 justify-start items-center">
                  {parseInt(item.delta) < 10 ? (
                    <BiSolidUpArrow className="text-[#FD499D] rotate-180 text-[14px]" />
                  ) : (
                    <BiSolidUpArrow className="text-[#0AD171] text-[14px]" />
                  )}
                  <p
                    className={`${
                      parseInt(item.delta) < 10
                        ? "text-[#FD499D]"
                        : "text-[#0AD171]"
                    } text-[16px] font-inter font-normal`}
                  >
                    {item.delta}%
                  </p>
                </div>
                {/* volume */}
                <div className="w-full flex justify-start items-center">
                  <p className="uppercase text-[16px] text-th-brand font-inter font-normal">
                    ${item.volume}
                  </p>
                </div>
                {/* market cap */}
                <div className="w-full flex justify-start items-center">
                  <p className="uppercase text-[16px] text-th-brand font-inter font-normal">
                    ${item.marketCap}
                  </p>
                </div>
                {/* movement */}
                <div className="w-full flex justify-center items-center">
                  <ResponsiveContainer width="100%" height={50}>
                    <AreaChart
                      height={44}
                      data={item.movement}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="rgba(255,129,10,1)" />
                          <stop
                            offset="100%"
                            stopColor="rgba(255,129,10,0.5)"
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        dataKey="value"
                        strokeWidth={2}
                        stroke="#f47c0c"
                        fill={gradientForGraph}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                {/* info icon */}
                <div className="w-full flex justify-center items-center">
                  <button className="w-[30px] h-[30px] rounded-full bg-[#2E3838] flex justify-center items-center">
                    <BsInfoLg className="text-[#f47c0c] text-[18px]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* pagination --------------- */}
      <div className="w-full bg-th-bkg-2 h-[150px] flex justify-center items-center">
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
  );
};

export default Markets;
