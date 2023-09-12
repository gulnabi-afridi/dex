import { Icon } from "@mui/material";
import React from "react";
import * as Icons from "../../../../SVG/Icons";

const OpenOrders = () => {
  return (
    <div className="w-full mt-4">
      {/* table column ------>  */}
      <div className="w-full h-[40px] bg-black rounded-md grid grid-cols-[1fr,.5fr,1fr,1.5fr,1fr,2fr,1fr,.8fr] px-4">
        {tableColumnData.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full flex ${
                tableColumnData.length === index + 1
                  ? "justify-end"
                  : "justify-start"
              }  capitalize items-center`}
            >
              <p className="text-[14px] text-white font-inter font-normal">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
      {/* table row --------->  */}
      <div className="w-full flex flex-col gap-1">
        {tableRowData.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full h-[40px] ${
                (index + 1) % 2 === 0 ? "bg-[#1C2222]" : "bg-transparent"
              }  rounded-md grid grid-cols-[1fr,.5fr,1fr,1.5fr,1fr,2fr,1fr,.8fr] justify-center items-center px-4`}
            >
              {/* market --> */}
              <div className="w-full flex justify-start items-center">
                <p className="text-[14px] text-white font-normal uppercase font-inter">
                  {item.market}
                </p>
              </div>
              {/* buy/sell button ----> */}
              <div className="w-full flex justify-start items-center">
                <button
                  className={`w-[38px] h-[28px] hover:opacity-80 rounded-md uppercase text-[12px] text-white font-inter ${
                    item.side === "buy" ? "bg-[#06894A]" : "bg-[#DE0269]"
                  }`}
                >
                  {item.side === "buy" ? <p>Buy</p> : <p>Sell</p>}
                </button>
              </div>
              {/* order type ------>  */}
              <div className="flex justify-start items-center gap-1">
                {item.orderType === "limit" ? (
                  <Icons.LimitOrder fill="#FFFAF5" />
                ) : (
                  <Icons.MarketOrder fill="#FFFAF5" />
                )}
                <p className="text-[14px] text-white font-normal uppercase font-inter">
                  {item.orderType}
                </p>
              </div>
              {/* size ------> */}
              <div className="w-full flex justify-start items-center">
                <p className="text-[14px] text-white font-normal uppercase font-inter">
                  {item.size}
                </p>
              </div>
              {/* price --------> */}
              <div className="w-full flex justify-start items-center">
                <p className="text-[14px] text-white font-normal uppercase font-inter">
                  {item.price}
                </p>
              </div>
              {/* order status -------> */}
              <div className="w-full flex justify-start items-center">
                <p className="text-[14px] text-white font-normal uppercase font-inter">
                  {item.orderStatus}
                </p>
              </div>
              {/* order fill progress ------->  */}
              <div className="w-full grid grid-cols-[0.8fr,2fr] gap-2 justify-start items-center">
                <p className="text-[14px] text-white font-inter font-normal">
                  {item.orderFillProgress}%
                </p>
                {/* progress bar ----> */}
                <div className="w-full max-w-[78px] h-[5px] bg-[#2E3838] rounded-[17px] relative">
                  <div
                    className={`absolute left-0 h-full top-0 ${item.orderFillProgressWidth} bg-[#29F592] rounded-[17px]`}
                  ></div>
                </div>
              </div>
              {/* cancel button ---------> */}
              <div className="w-full flex justify-end items-center">
                <button className="flex justify-center px-3 py-[6px] rounded-md items-center gap-1 bg-[#2E3838] hover:opacity-80">
                  <Icons.Circle fill="#FD499D" className="w-[16px] h-[16px]" />
                  <p className="text-[14px] text-white font-inter font-normal">
                    Cancel
                  </p>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const tableColumnData = [
  {
    name: "market",
  },
  {
    name: "side",
  },
  {
    name: "order type",
  },
  {
    name: "size",
  },
  {
    name: "price",
  },
  {
    name: "order status",
  },
  {
    name: "order fill progress",
  },
  {
    name: "action",
  },
];

const tableRowData = [
  {
    market: "SRM/USDC",
    side: "buy",
    orderType: "limit",
    size: "40.00 SRM",
    price: "$4.922988",
    orderStatus: "21.42 / 40.00",
    orderFillProgress: "44.1",
    orderFillProgressWidth: "w-[44.1%]",
  },
  {
    market: "SOLAPE/USDC",
    side: "sell",
    orderType: "market",
    size: "2,000,000.22 SOLAPE",
    price: "N/A",
    orderStatus: "1,928,244.44 / 2,000,000.22",
    orderFillProgress: "90",
    orderFillProgressWidth: "w-[90%]",
  },
  {
    market: "DEGEN/USOLAE",
    side: "buy",
    orderType: "market",
    size: "21,024,888,882.44 DEGEN",
    price: "$0.00000042",
    orderStatus: "0.00 / 21,024,888,882.44",
    orderFillProgress: "0.00",
    orderFillProgressWidth: "w-[00.1%]",
  },
  {
    market: "USDT/USDC",
    side: "sell",
    orderType: "limit",
    size: "50,000.00 USDT",
    price: "$0.99212",
    orderStatus: "0.00 / 50,000.00",
    orderFillProgress: "0.00",
    orderFillProgressWidth: "w-[00.1%]",
  },
];

export default OpenOrders;
