import React, { useState } from "react";
import Image from "next/image";
import { Data } from "@/data/JSON";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import { PiCopyBold } from "react-icons/pi";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const SolapeToken = () => {
  const [timeOptions, setTimeOptions] = useState([
    {
      active: true,
      time: "24h",
    },
    {
      active: false,
      time: "1d",
    },
    {
      active: false,
      time: "7d",
    },
    {
      active: false,
      time: "30d",
    },
  ]);
  const [selectedTime, setSelectedTime] = useState("24h");

  const handelSetTimeOptions = (indexNumber: number) => {
    const updatedTimeOptions = timeOptions.map((option, i) => {
      if (i === indexNumber) {
        setSelectedTime(option.time);
        return {
          ...option,
          active: true,
        };
      } else {
        return {
          ...option,
          active: false,
        };
      }
    });

    setTimeOptions(updatedTimeOptions);
  };

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
      <Wrapper style="bg-th-gradient-2 py-16">
        <div className="w-full grid grid-cols-[2fr,1.6fr] gap-20">
          {/* left portion */}
          <div className="w-full flex flex-col gap-6">
            {/* top statistics  */}
            <div className="w-full flex justify-between items-start">
              {/*  */}
              <div className="flex flex-col gap-3 items-start">
                <p className="text-th-brand leading-[70px] text-[56px] font-medium font-inter">
                  $0.5424
                </p>
                <div className="flex gap-3 justify-center items-center">
                  <p className="text-th-brand px-[4px] py-[1px] flex justify-center items-center rounded-[4px] text-[14px] font-inter font-normal bg-th-brand-secondary">
                    {selectedTime}
                  </p>
                  <p className="text-[18px] font-normal font-inter text-th-fkg-1">
                    +$0.0042 (+1.44%)
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex justify-center items-center gap-3">
                {timeOptions.map((item, index) => {
                  return (
                    <button
                      onClick={() => handelSetTimeOptions(index)}
                      key={index}
                      className={`px-[6px] py-[3px] text-th-brand rounded-[4px] text-[14px] font-inter font-normal ${
                        item.active ? "bg-th-brand-secondary" : "bg-th-fkg-3"
                      } `}
                    >
                      {item.time}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* =====> cart */}
            <div className="w-full h-[280px]">
              <ResponsiveContainer width="99%" height="100%">
                <AreaChart
                  data={Data.solapeTokenChartData}
                  margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <Area
                    dataKey="value"
                    stroke="#ff9735"
                    strokeWidth={2}
                    fill="#603e1b"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* right portion */}
          <div className="w-full max-w-[450px] flex flex-col gap-8">
            {/* Market Cap Rank + Market Cap */}
            <div className="w-full grid grid-cols-2 justify-center items-center">
              <div className="flex flex-col gap-2">
                <p className="text-[20px] font-medium font-inter text-th-fkg-4">
                  Market Cap Rank
                </p>
                <p className="text-[32px] font-medium font-inter text-th-brand">
                  #84
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[20px] font-medium font-inter text-th-fkg-4">
                  Market Cap
                </p>
                <p className="text-[32px] font-medium font-inter text-th-brand">
                  $274.94B
                </p>
              </div>
            </div>
            {/* YTD ROI + 24h Volume */}
            <div className="w-full grid grid-cols-2 justify-center items-start">
              <div className="flex flex-col  gap-2">
                <p className="text-[20px] font-medium font-inter text-th-fkg-4">
                  YTD ROI
                </p>
                <p className="text-[32px] font-medium font-inter text-th-brand">
                  $30.6M
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[20px] font-medium font-inter text-th-fkg-4">
                  24h Volume
                </p>
                <p className="text-[32px] font-medium font-inter text-th-brand">
                  $44.2M
                </p>
              </div>
            </div>
            {/* Circulating Supply */}
            <div className="w-full grid grid-cols-2 justify-center items-start">
              <div className="flex flex-col  gap-2">
                <p className="text-[20px] font-medium font-inter text-th-fkg-4">
                  Circulating Supply
                </p>
                <p className="text-[32px] font-medium font-inter text-th-brand">
                  $30.6M
                </p>
              </div>
            </div>
            {/* ===> buy solape button */}
            <button className="w-[288px] h-[72px] border-[3px] border-th-brand-secondary rounded-[12px] flex justify-center items-center gap-3">
              <p className="text-[24px] font-semibold font-inter text-th-brand">
                Buy SOLAPE
              </p>
              <div className="w-[32px] h-[32px] flex justify-center items-center">
                <Image
                  src="/assets/sloapeToken.svg"
                  width={22}
                  height={21}
                  alt=""
                />
              </div>
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SolapeToken;
