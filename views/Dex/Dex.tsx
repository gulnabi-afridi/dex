import React, { useState } from "react";
import WideWrapper from "@/components/shared/ComponentWrapper/WideWrapper";
import { HiOutlineStar } from "react-icons/hi";
import { BsChevronDown, BsUbuntu } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import FillButton from "@/components/shared/Buttons/FillButton";
import { Data } from "@/data/JSON";
import * as Icons from "../../SVG/Icons";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const Dex = () => {
  // states ------------->

  const [navigateSlideItem, setNavigateSlideItem] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    buy: true,
    sell: false,
    limitOrder: true,
    marketOrder: false,
  });

  // states ends here ------------>

  const [percentageButtons, setPercentageButtons] = useState([
    {
      percent: "25%",
      state: true,
    },
    {
      percent: "50%",
      state: false,
    },
    {
      percent: "75%",
      state: false,
    },
    {
      percent: "100%",
      state: false,
    },
  ]);

  // configuration for slider ------------->
  const settings = {
    // infinite: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 3,
    nextArrow: <CustomNextArrow />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   methods ------------->

  function CustomNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        onClick={() => {
          onClick();
          setNavigateSlideItem(true);
        }}
        className="absolute -right-6 w-[26px] h-[70px] bg-[#121616] cursor-pointer rounded-l-[6px] top-0 flex justify-center items-center"
      >
        <PiCaretRightBold className="text-white text-[36px]" />
      </div>
    );
  }

  const handlePercentageButtonClick = (clickedIndex: number) => {
    const updatedPercentageButtons = percentageButtons.map((item, index) => {
      return {
        ...item,
        state: index === clickedIndex,
      };
    });
    setPercentageButtons(updatedPercentageButtons);
  };

  //  methods ends here -------------->

  return (
    <WideWrapper style="bg-black relative">
      <div className="w-full flex flex-col">
        <div className="w-full h-[100px] flex justify-between items-center">
          {/* left portion --------------> */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex justify-center items-center gap-2">
              {/* add to favorite icon */}
              <HiOutlineStar
                onClick={() => setIsFavorite(!isFavorite)}
                className="text-white text-[28px] cursor-pointer"
              />
              {/* coin name */}
              <div className="flex justify-center items-center gap-2">
                {/* icons */}
                <div className="flex justify-center items-center">
                  <Icons.SolapeCoin className="w-[28px] h-[28px] -mr-3 z-10" />
                  <Icons.UsdCoin className="w-[28px] h-[28px]" />
                </div>
                <div className="flex justify-center items-center gap-2">
                  {/* name */}
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-white uppercase select-none text-[16px] font-bold font-inter">
                      sloape
                    </p>
                    <p className="w-[2px] h-[20px] bg-white rotate-12"></p>
                    <p className="text-white uppercase select-none text-[16px] font-bold font-inter">
                      usdc
                    </p>
                  </div>
                  <BsChevronDown className="text-white text-[18px] cursor-pointer" />
                </div>
              </div>
            </div>
            {/* market price */}
            <div className="flex flex-col">
              <p className="text-[#FFCB99] text-[12px] font-inter font-thin">
                Mark price
              </p>
              <p className="text-white text-[18px] font-medium font-inter">
                0.5042
              </p>
            </div>
            {/* 24h change */}
            <div className="flex flex-col">
              <p className="text-[#FFCB99] text-[12px] font-inter font-thin">
                24h change
              </p>
              <p className="text-[#0AD171] text-[18px] font-medium font-inter">
                +4.09%
              </p>
            </div>
            {/* 24h volume */}
            <div className="flex flex-col">
              <p className="text-[#FFCB99] text-[12px] font-inter font-thin">
                24h Volume
              </p>
              <p className="text-white text-[18px] font-medium font-inter">
                $1,234,249.24
              </p>
            </div>
          </div>
          {/* right portion ------------------> */}
          <div className="flex gap-4 justify-center items-center absolute right-6">
            <p className="text-[14px] text-white font-medium font-inter">
              Gainers
            </p>
            <div className="w-[580px]">
              <Slider {...settings}>
                {[0, 1, 2, 3, 4].map((item: any, index: number) => {
                  return (
                    <div className="slider max-w-[180px] h-[70px] flex flex-col bg-[red] justify-center items-center bg-th-bkg-4 rounded-md">
                      {/* coin icon + name */}
                      <div className="flex justify-center items-center gap-1">
                        <Image
                          src="/assets/apex.svg"
                          width={32}
                          height={32}
                          className="object-contain"
                          alt=""
                        />
                        <div className="flex justify-center items-center gap-2">
                          <p className="text-[#FFCB99] uppercase text-[16px] font-normal font-inter">
                            sloape
                          </p>
                          <p className="w-[2px] h-[20px] bg-[#FFCB99] rotate-12"></p>
                          <p className="text-[#FFCB99] uppercase text-[16px] font-normal font-inter">
                            usdc
                          </p>
                        </div>
                      </div>
                      {/* coin price */}
                      <div className="flex gap-1 justify-center items-center">
                        <p className="text-[14px] font-normal text-white">
                          $0.00042
                        </p>
                        <PiTriangleFill className="text-[#0AD171] text-[12px]" />
                        <p className="text-[14px] font-normal text-[#0AD171]">
                          38.2%
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
        {/* trading panel + assets information + accounts section ----------------> */}
        <div className="w-full h-[100vh-164px] grid gap-3 grid-cols-[2.5fr,1fr]">
          {/* trading panel  */}
          <div className="w-full h-full bg-th-bkg-4 flex justify-center items-center rounded-md">
            <p className="text-[40px] font-bold font-inter uppercase text-white/70">
              Trading Engine
            </p>
          </div>
          {/* assets information + accounts section ----> */}
          <div className="w-full flex flex-col gap-3">
            {/* assets information ------->  */}
            <div className="w-full flex flex-col gap-2 bg-th-bkg-4 px-5 py-4 rounded-md">
              <p className="text-[14px] text-center font-inter text-white font-semibold">
                Asset information
              </p>
              {/* ticker + total supply + decimals + links here  */}
              <div className="w-full flex justify-between items-center">
                {/* ticker */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
                    Ticker
                  </p>
                  <div className="flex gap-1 justify-center items-center">
                    <p className="uppercase text-white text-[14px] font-medium font-inter">
                      SOLAPE
                    </p>
                    <Icons.Link />
                  </div>
                </div>
                {/* total supply */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
                    Total supply
                  </p>
                  <p className="uppercase text-white text-[14px] font-medium font-inter">
                    300,000,000
                  </p>
                </div>
                {/* decimals */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
                    Decimals
                  </p>
                  <p className="uppercase text-white text-[14px] font-medium font-inter">
                    9
                  </p>
                </div>
                {/* links */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
                    Links
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    {Data.dexData.socialIcons.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          href="#"
                          className="w-[23px] h-[23px] bg-[#FFCB99] flex justify-center items-center rounded-full hover:opacity-80"
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Account section ---------> */}
            <div className="w-full grid grid-cols-[2fr,1.3fr] justify-center items-center bg-th-bkg-4 px-5 py-4 rounded-md">
              <p className="text-[14px] font- text-end font-inter text-white">
                Accounts
              </p>
              <div className="w-full flex justify-end">
                <button className="text-[12px] font-inter text-white font-medium bg-[#2E3838] px-2 h-[30px] rounded-md flex justify-center items-center hover:opacity-80">
                  Token accounts
                </button>
              </div>
              {/* wallet balance */}
              <div className="w-full col-span-2 flex items-start flex-col gap-1 mt-2">
                <div className="flex justify-center items-center gap-2">
                  <p className="text-[18px] font-normal font-inter text-th-fkg-4 mb-1">
                    Wallet balances
                  </p>
                  <Icons.Warning />
                </div>
                {/* coin 1 */}
                <div className="flex justify-center items-center gap-2">
                  <Icons.SolapeCoin />
                  <p className="text-[20px] font-thin text-white font-inter">
                    2,555,661.5402
                  </p>
                </div>
                {/* coin 2 */}
                <div className="flex justify-center items-center gap-2">
                  <Icons.UsdCoin />
                  <p className="text-[20px] font-thin text-white font-inter">
                    1,800.5402
                  </p>
                </div>
              </div>
              <div className="w-full flex col-span-2 justify-between mt-4">
                {/* Unsettled balances */}
                <div className="w-full flex items-start flex-col gap-1">
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-[18px] whitespace-nowrap font-normal font-inter text-th-fkg-4 mb-1">
                      Unsettled balances
                    </p>
                    <Icons.Warning />
                  </div>
                  {/* coin 1 */}
                  <div className="flex justify-center items-center gap-2">
                    <Icons.SolapeCoin />
                    <p className="text-[20px] font-thin text-white font-inter">
                      12.0421
                    </p>
                  </div>
                  {/* coin 2 */}
                  <div className="flex justify-center items-center gap-2">
                    <Icons.UsdCoin />
                    <p className="text-[20px] font-thin text-white font-inter">
                      0.0000
                    </p>
                  </div>
                </div>
                {/* settle button */}
                <div className="w-full flex justify-end">
                  <button className="flex gap-1 justify-center items-center w-[90px] h-[38px] rounded-md bg-[#FF810A] hover:opacity-80">
                    <p className="text-[14px] text-white font-normal font-inter">
                      Settle
                    </p>
                    <Icons.Copy />
                  </button>
                </div>
              </div>
              {/*  */}
              <div className="w-full col-span-2 flex justify-between mt-4">
                <Link
                  href="#"
                  className="text-th-fkg-4 text-[16px] font-inter font-normal whitespace-nowrap hover:opacity-80"
                >
                  Need a Solana wallet?
                </Link>
                {/* phandtom + slope button */}
                <div className="w-full flex gap-1 justify-end items-center">
                  <Link
                    href="#"
                    className="text-[14px] font-normal text-[#FF810A] underline hover:opacity-80"
                  >
                    Phantom
                  </Link>
                  <div className="w-[1px] h-[16px] bg-white"></div>
                  <Link
                    href="#"
                    className="text-[14px] font-normal text-[#FF810A] underline hover:opacity-80"
                  >
                    Slope
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* order book + connect wallet + recent trades ------------------------> */}
        <div className="w-full grid grid-cols-3 gap-3 mt-3">
          {/* order book --------->  */}
          <div className="w-full"></div>
          {/* connect wallet --------->  */}
          <div className="w-full p-2 bg-th-bkg-4 rounded-md">
            {/* buy and sell button */}
            <div className="w-full grid grid-cols-2">
              <button
                onClick={() =>
                  setButtonStates({
                    ...buttonStates,
                    buy: !buttonStates.buy,
                    sell: false,
                  })
                }
                className={`w-full h-[40px] flex justify-center items-center text-[14px] font-inter font-semibold ${
                  buttonStates.buy
                    ? "text-[#0AD171] border-b-2 border-[#0AD171]"
                    : "text-th-fkg-4"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() =>
                  setButtonStates({
                    ...buttonStates,
                    sell: !buttonStates.sell,
                    buy: false,
                  })
                }
                className={`w-full h-[40px] flex justify-center items-center text-[14px] font-inter font-semibold text-th-fkg-4 ${
                  buttonStates.sell
                    ? "text-[#0AD171] border-b-2 border-[#0AD171]"
                    : "text-th-fkg-4"
                }`}
              >
                Sell
              </button>
            </div>
            <div className="w-full flex flex-col gap-2 px-3">
              {/* price */}
              <div className="w-full flex flex-col gap-1 mt-3">
                <p className="text-[12px] font-normal text-th-fkg-4">Price</p>
                <div className="w-full h-[40px] grid grid-cols-[3fr,1fr]">
                  <input
                    id="coinPrice"
                    name="coinPrice"
                    value="0.5402124"
                    className="w-full h-full px-4 bg-th-bkg-3 focus:outline-none rounded-l-md text-[12px] text-white font-inter font-normal"
                  />
                  <button className="w-full flex justify-center items-center gap-2 bg-[#2E3838] rounded-md">
                    <Icons.UsdCoin />
                    <p className="text-[12px] font-normal font-inter text-white">
                      USDC
                    </p>
                  </button>
                </div>
              </div>
              {/* limit order + market order button*/}
              <div className="w-full grid grid-cols-2 h-[40px] bg-th-bkg-3 rounded-md p-1">
                <button
                  onClick={() =>
                    setButtonStates({
                      ...buttonStates,
                      limitOrder: true,
                      marketOrder: false,
                    })
                  }
                  className={`w-full flex gap-2 justify-center items-center rounded-md ${
                    buttonStates.limitOrder
                      ? "text-white bg-[#2E3838]"
                      : "text-[#676767] bg-transparent"
                  }`}
                >
                  {buttonStates.limitOrder ? (
                    <Icons.LimitOrder fill="#FFFAF5" />
                  ) : (
                    <Icons.LimitOrder fill="#676767" />
                  )}
                  <p
                    className={`text-[12px] ${
                      buttonStates.limitOrder ? "text-white" : "text-[#676767]"
                    } font-normal font-inter`}
                  >
                    Limit order
                  </p>
                </button>
                <button
                  onClick={() =>
                    setButtonStates({
                      ...buttonStates,
                      marketOrder: true,
                      limitOrder: false,
                    })
                  }
                  className={`w-full flex gap-2 justify-center items-center rounded-md ${
                    buttonStates.marketOrder
                      ? "text-white bg-[#2E3838]"
                      : "text-[#676767] bg-transparent"
                  }`}
                >
                  {buttonStates.marketOrder ? (
                    <Icons.MarketOrder fill="#FFFAF5" />
                  ) : (
                    <Icons.MarketOrder fill="#676767" />
                  )}
                  <p
                    className={`text-[12px] ${
                      buttonStates.marketOrder ? "text-white" : "text-[#676767]"
                    } font-normal font-inter`}
                  >
                    Market order
                  </p>
                </button>
              </div>
              {/* size */}
              <div className="w-full flex flex-col gap-1">
                <p className="text-[12px] font-normal text-th-fkg-4">Size</p>
                <div className="w-full h-[40px] grid grid-cols-[3fr,1fr] bg-th-bkg-3">
                  <input
                    id="coinPrice"
                    name="coinPrice"
                    value="1,250,000.0000"
                    className="w-full h-full px-4 bg-th-bkg-3 focus:outline-none rounded-l-md text-[12px] text-white font-inter font-normal"
                  />
                  <button className="w-full flex justify-center items-center gap-2 bg-[#2E3838] rounded-md">
                    <Icons.SolapeCoin />
                    <p className="text-[12px] font-normal font-inter text-white">
                      SOLAPE
                    </p>
                  </button>
                </div>
              </div>
              {/* in dollar */}
              <div className="w-full flex flex-col">
                <div className="w-full h-[40px] grid grid-cols-[3fr,1fr]">
                  <input
                    id="coinPrice"
                    name="coinPrice"
                    value="675,265.5000"
                    className="w-full h-full px-4 bg-th-bkg-3 focus:outline-none rounded-l-md text-[12px] text-white font-inter font-normal"
                  />
                  <button className="w-full flex justify-center items-center gap-2 bg-[#2E3838] rounded-md">
                    <Icons.UsdCoin />
                    <p className="text-[12px] font-normal font-inter text-white">
                      SOLAPE
                    </p>
                  </button>
                </div>
              </div>
              {/* percentages */}
              <div className="w-full grid grid-cols-4 gap-1 h-[24px] bg-[#2E3838] rounded-md mt-2 p-1">
                {percentageButtons.map((item, index) => {
                  return (
                    <button
                      onClick={() => handlePercentageButtonClick(index)}
                      key={index}
                      className={`w-full rounded-md flex justify-center items-center text-[10px] font-inter font-normal ${
                        item.state
                          ? "text-white bg-th-bkg-3"
                          : "text-white/50 bg-th-bkg-3"
                      }`}
                    >
                      {item.percent}
                    </button>
                  );
                })}
              </div>
              {/* connect wallet button */}
              <div className="w-full mt-2">
                <FillButton
                  text="Connect wallet"
                  styles="w-full connectWalletShadow h-[40px] text-white"
                />
              </div>
            </div>
          </div>
          {/* recent trades ---------> */}
          <div className="w-full flex flex-col bg-th-bkg-4 px-4 py-5 rounded-md">
            <p className="text-[14px] text-center font-inter font-normal text-white">
              Recent Trades
            </p>
            {/* table -------->  */}
            <div className="w-full flex flex-col gap-3 mt-5">
              {/* table column --> */}
              <div className="w-full grid grid-cols-[1.5fr,1.5fr,1fr,1fr]">
                {/* ist col label */}
                <div className="w-full flex justify-start items-center">
                  <p className="text-[14px] font-normal text-th-fkg-4">
                    Price (USDC)
                  </p>
                </div>
                {/* 2nd col label */}
                <div className="w-full flex justify-end items-center">
                  <p className="text-[14px] font-normal text-th-fkg-4">
                    Size (SOLAPE)
                  </p>
                </div>
                {/* 3rd col label */}
                <div className="w-full flex justify-end items-center">
                  <p className="text-[14px] font-normal text-th-fkg-4">Tx</p>
                </div>
                {/* 4rth col label */}
                <div className="w-full flex justify-end items-center">
                  <p className="text-[14px] font-normal text-th-fkg-4">Time</p>
                </div>
              </div>
              {/* table rows --> */}
              <div className="w-full max-h-[285px] overflow-auto flex flex-col gap-2 hideScrollBar">
                {Data.dexData.recentTradesData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full grid grid-cols-[1.5fr,1.5fr,1fr,1fr]"
                    >
                      {/* price */}
                      <div className="w-full flex justify-start items-center">
                        <p className="text-[14px] text-[#0AD171] font-normal font-inter">
                          {item.price}
                        </p>
                      </div>
                      {/* size */}
                      <div className="w-full flex justify-end items-center">
                        <p className="text-[14px] text-white font-normal font-inter">
                          {item.size}
                        </p>
                      </div>
                      {/* tx */}
                      <div className="w-full flex justify-end items-center">
                        <Icons.Link />
                      </div>
                      {/* time */}
                      <div className="w-full flex justify-end items-center">
                        <p className="text-[14px] text-white font-normal font-inter">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WideWrapper>
  );
};

export default Dex;
