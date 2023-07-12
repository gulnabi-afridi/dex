import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { BiExpandVertical } from "react-icons/bi";

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

      {/* table ------------------------ */}
      <div className="w-full px-4 sm:px-10 bg-th-bkg-2">
        {/* table column */}
        <div className="w-full h-[72px] grid grid-cols-[0.2fr,1.2fr,1fr,0.8fr,0.8fr,0.8fr,0.8fr,1.2fr,0.2fr] justify-center items-center">
          {tableColumn.map((item, index) => {
            return (
              <>
                {index === 0 || tableColumn.length === index + 1 ? (
                  <div className="w-full flex justify-center items-center h-[40px] bg-[red]">
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
      </div>
    </div>
  );
};

const tableColumn = [
  {
    colName: "",
    isExpandIcon: false,
    timeLabel: false,
    timeLabelValue: "",
  },
  {
    colName: "name",
    isExpandIcon: false,
    timeLabel: false,
    timeLabelValue: "",
  },
  {
    colName: "pair",
    isExpandIcon: false,
    timeLabel: false,
    timeLabelValue: "",
  },
  {
    colName: "price",
    isExpandIcon: false,
    timeLabel: false,
    timeLabelValue: "",
  },
  {
    colName: "delta",
    isExpandIcon: true,
    timeLabel: true,
    timeLabelValue: "24h",
  },
  {
    colName: "volume",
    isExpandIcon: true,
    timeLabel: true,
    timeLabelValue: "24h",
  },
  {
    colName: "market cap",
    isExpandIcon: true,
    timeLabel: false,
    timeLabelValue: "",
  },
  {
    colName: "movement",
    isExpandIcon: false,
    timeLabel: true,
    timeLabelValue: "7D",
  },
  {
    colName: "",
    isExpandIcon: false,
    timeLabel: false,
    timeLabelValue: "",
  },
];

export default Markets;
