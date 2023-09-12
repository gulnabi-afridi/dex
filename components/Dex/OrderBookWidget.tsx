import React from "react";
import * as Icons from "../../SVG/Icons";
import { Data } from "@/data/JSON";

const OrderBookWidget = () => {
  return (
    <div className="w-full bg-[#121616] rounded-md flex flex-col gap-2 p-3">
      <p className="text-white text-center font-inter text-[14px] font-semibold">
        Orderbook
      </p>
      {/* buy side + sell side + price --------------> */}
      <div className="w-full flex justify-between items-center">
        {/* buy side */}
        <div className="flex justify-center items-center gap-1 bg-[#1C2222] px-2 py-1 rounded-md">
          <div className="w-[10px] h-[10px] rounded-sm bg-[#0AD171]"></div>
          <p className="text-[14px] font-normal font-inter text-white">
            Buy side
          </p>
        </div>
        {/* price */}
        <div className="flex justify-center items-center gap-1">
          <Icons.ArrowUp className="w-[16px] h-[16px]" fill="#08AF5F" />
          <p className="text-[14px] text-[#08AF5F] font-semibold font-inter">
            0.5402
          </p>
        </div>
        {/* sell side */}
        <div className="flex justify-center items-center gap-1 bg-[#1C2222] px-2 py-1 rounded-md">
          <div className="w-[10px] h-[10px] rounded-sm bg-[#FD499D]"></div>
          <p className="text-[14px] font-normal font-inter text-white">
            Buy side
          </p>
        </div>
      </div>
      {/* size + price + size column ------>  */}
      <div className="w-full grid grid-cols-3 py-1">
        {/* size --> */}
        <div className="w-full flex justify-start items-center">
          <p className="text-[14px] text-[#676767] font-inter font-normal ">
            Size (SOLAPE)
          </p>
        </div>
        {/* price --> */}
        <div className="w-full flex justify-center items-center">
          <p className="text-[14px] text-[#676767] font-inter font-normal ">
            Price (USDC)
          </p>
        </div>
        {/* size --> */}
        <div className="w-full flex justify-end items-center">
          <p className="text-[14px] text-[#676767] font-inter font-normal ">
            Size (SOLAPE)
          </p>
        </div>
      </div>
      {/* rows --------> */}
      <div className="w-full max-h-[240px] overflow-auto flex flex-col hideScrollBar">
        {Data.dexData.orderBookRowData.map((item, index) => {
          return (
            <div className="w-full min-h-[30px] grid grid-cols-2">
              {/* size 1 + price 1 portion ----> */}
              <div className="w-full h-full grid grid-cols-2 relative">
                {/* size value --> */}
                <div className="w-full flex justify-start items-center z-10">
                  <p className="text-white font-normal text-[14px] font-inter">
                    {item.size1}
                  </p>
                </div>
                {/* price value */}
                <div className="w-full flex justify-end items-center pr-1 z-10">
                  <p className="text-white font-normal text-[14px] font-inter">
                    {item.price1}
                  </p>
                </div>
                {/* indicator  */}
                <div
                  className={`${item.portion1Width} absolute right-0 top-0 h-full bg-[#06894A]`}
                ></div>
              </div>
              {/* size 2 + price 2 portion ----> */}
              <div className="w-full h-full grid grid-cols-2 relative">
                {/* price value */}
                <div className="w-full flex justify-start items-center pl-1">
                  <p className="text-white font-normal text-[14px] font-inter z-10">
                    {item.price2}
                  </p>
                </div>
                {/* size value --> */}
                <div className="w-full flex justify-end items-center">
                  <p className="text-white font-normal text-[14px] font-inter z-10">
                    {item.size2}
                  </p>
                </div>
                {/* indicator  */}
                <div
                  className={`${item.portion2Width} absolute left-0-0 top-0 h-full bg-[#A2024C]`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      {/* spread bottom row -----> */}
      <div className="w-full bg-[#1C2222] h-[32px] grid grid-cols-3 justify-center items-center rounded-md px-3 my-1">
        <p className="w-full flex justify-start items-center text-[14px] font-normal font-inter text-white">
          Spread
        </p>
        <p className="w-full flex justify-center items-center text-[14px] font-normal font-inter text-white">
          0.0012
        </p>
        <p className="w-full flex justify-end items-center text-[14px] font-normal font-inter text-white">
          0.08%
        </p>
      </div>
    </div>
  );
};

export default OrderBookWidget;
