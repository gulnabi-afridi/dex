import React, { useState } from "react";
import WideWrapper from "@/components/shared/ComponentWrapper/WideWrapper";
import { HiOutlineStar } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import { PiTriangleFill } from "react-icons/pi";
import { PiCaretRightBold } from "react-icons/pi";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import * as Icons from "../../SVG/Icons";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

const Dex = () => {
  // states ------------->
  const [navigateSlideItem, setNavigateSlideItem] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  //   states ends here ------------>

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
          <div className="w-full h-[30px] bg-yellow-300"></div>
          {/* assets information + accounts section ----> */}
          <div className="w-full flex flex-col gap-3">
            {/* assets information ------->  */}
            <div className="w-full flex flex-col gap-2 bg-th-bkg-4 p-3 rounded-md">
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
                    <p className="uppercase text-white text-[14px] font-semibold font-inter">
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
                  <p className="uppercase text-white text-[14px] font-semibold font-inter">
                    300,000,000
                  </p>
                </div>
                {/* decimals */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
                    Decimals
                  </p>
                  <p className="uppercase text-white text-[14px] font-semibold font-inter">
                    9
                  </p>
                </div>
                {/* links */}
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-normal font-inter text-[#FFE5CC]">
                    Links
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    {socialIcons.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          href="#"
                          className="w-[23px] h-[23px] bg-[#FFCB99] flex justify-center items-center rounded-full"
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
            <div className="w-full grid grid-cols-[2fr,1.3fr] justify-center items-center bg-th-bkg-4 p-3 rounded-md">
              <p className="text-[14px] font- text-end font-inter text-white">
                Accounts
              </p>
              <div className="w-full flex justify-end">
                <button className="text-[12px] font-inter text-white font-medium bg-[#2E3838] px-2 h-[30px] rounded-md flex justify-center items-center">
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
                  className="text-th-fkg-4 text-[16px] font-inter font-normal whitespace-nowrap"
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
      </div>
    </WideWrapper>
  );
};

const socialIcons = [
  <AiOutlineTwitter className="text-[16px] text-black" />,
  <FaTelegramPlane className="text-[16px] text-black" />,
  <BsDiscord className="text-[16px] text-black" />,
];

export default Dex;
