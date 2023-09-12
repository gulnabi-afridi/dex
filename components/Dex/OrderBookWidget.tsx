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
        {orderBookRowData.map((item, index) => {
          return (
            <div key={index} className="w-full min-h-[30px] grid grid-cols-2">
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
                  className={`${item?.portion1Width} absolute right-0 top-0 h-full bg-[#06894A]`}
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

const orderBookRowData = [
  {
    size1: "1,425,249.5524",
    price1: "0.5042",
    price2: "0.5033",
    size2: "1,100,040.4559",
    portion1Width: "w-[0%]",
    portion2Width: "w-[0%]",
  },
  {
    size1: "1,425,249.5524",
    price1: "0.5042",
    price2: "0.5033",
    size2: "1,100,040.4559",
    portion1Width: "w-[2%]",
    portion2Width: "w-[2%]",
  },
  {
    size1: "1,425,249.5524",
    price1: "0.5042",
    price2: "0.5033",
    size2: "1,100,040.4559",
    portion1Width: "w-[2%]",
    portion2Width: "w-[2%]",
  },
  {
    size1: "1,425,249.5524",
    price1: "0.5042",
    price2: "0.5033",
    size2: "1,100,040.4559",
    portion1Width: "w-[4%]",
    portion2Width: "w-[2%]",
  },
  {
    size1: "5,442,555.4444",
    price1: "0.5041",
    price2: "0.5021",
    size2: "800,000.4499",
    portion1Width: "w-[7%]",
    portion2Width: "w-[10%]",
  },
  {
    size1: "271,240.0902",
    price1: "0.5036",
    price2: "0.4982",
    size2: "11,000.4155",
    portion1Width: "w-[7%]",
    portion2Width: "w-[10%]",
  },
  {
    size1: "5,000.0022",
    price1: "0.5028",
    price2: "0.4981",
    size2: "8,000.6670",
    portion1Width: "w-[10%]",
    portion2Width: "w-[15%]",
  },
  {
    size1: "2,000.0000",
    price1: "0.5022",
    price2: "0.4888",
    size2: "5,000.3333",
    portion1Width: "w-[30%]",
    portion2Width: "w-[20%]",
  },
  {
    size1: "100.0000",
    price1: "0.4902",
    price2: "0.4621",
    size2: "557.0042",
    portion1Width: "w-[40%]",
    portion2Width: "w-[25%]",
  },
  {
    size1: "20.0000",
    price1: "0.4902",
    price2: "0.4621",
    size2: "11.0112",
    portion1Width: "w-[50%]",
    portion2Width: "w-[30%]",
  },
  {
    size1: "20.0000",
    price1: "0.4902",
    price2: "0.4621",
    size2: "11.0112",
    portion1Width: "w-[60%]",
    portion2Width: "w-[50%]",
  },
  {
    size1: "20.0000",
    price1: "0.4902",
    price2: "0.4621",
    size2: "11.0112",
    portion1Width: "w-[70%]",
    portion2Width: "w-[60%]",
  },
];

export default OrderBookWidget;
