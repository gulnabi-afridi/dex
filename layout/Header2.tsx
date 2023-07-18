import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FillButton from "@/components/shared/Buttons/FillButton";
import { LuChevronDown } from "react-icons/lu";
import { PiLinkSimpleBold } from "react-icons/pi";
import { Data } from "@/data/JSON";
import { RxCross2 } from "react-icons/rx";
import CustomSwitch from "@/components/shared/Switch/Switch";

// ====> import for drawer and humburger
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header2 = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="w-full flex justify-between items-center bg-th-bkg-2 h-[64px] px-4 sm:px-10">
      {/* left portion */}
      <div className="flex justify-center items-center gap-9">
        {/* logo */}
        <div className="w-[140px] h-[40px] relative">
          <Image
            src="/assets/logo.svg"
            alt=""
            className="object-contain"
            fill
          />
        </div>
        {/* links */}
        <div className="hidden lg:flex justify-center items-center gap-9">
          {Data.header2Data.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className={`capitalize text-th-brand text-[16px] font-inter ${
                  item.path === Router.pathname ? "font-medium" : "font-thin"
                }  relative`}
              >
                {item.name}
                {/* new badge-------------- */}
                {item.isNew && (
                  <p className="text-th-bkg-2 bg-th-gradient-1 flex justify-center items-center text-[10px] leading-0 font-medium px-[5px] rounded-[10px] font-inter absolute -top-2 -right-5">
                    New
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
      {/* ===> right portion */}
      <div className="hidden lg:flex justify-center items-center gap-4">
        <FillButton
          text="Add market"
          styles="w-[120px] h-[40px] bg-[#2E3838] text-th-brand font-inter font-medium text-[16px]"
        />
        {/* ===> logo */}
        <div className="relative">
          <div
            onClick={() => setShowDropDown(!showDropDown)}
            className="flex justify-center items-center gap-2 cursor-pointer "
          >
            <div className="w-[40px] h-[40px] bg-th-gradient-1 rounded-full flex justify-center items-center">
              <Image src="/assets/logo2.svg" width={24} height={24} alt="" />
            </div>
            <LuChevronDown className="text-th-brand text-[24px]" />
          </div>

          {/* =====> drop down */}
          {showDropDown && (
            <div className="w-[159px] flex flex-col p-4 gap-3 bg-gradient-to-r from-[#323E3E] to-[#181E1E] h-[116px] absolute top-12 -left-24">
              <div className="flex justify-center items-center gap-1">
                <PiLinkSimpleBold className="text-[22px] text-th-brand-secondary" />
                <p className="font-inter text-th-brand-secondary text-[16px] font-normal">
                  DbK2...FRgP
                </p>
              </div>
              {/* version */}
              <div className="w-full flex justify-between items-center">
                <p className="text-th-brand text-[15px] font-inter font-normal">
                  Lite version
                </p>
                <CustomSwitch />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* ====> hamburger + drawer for small screen */}
      <div className="lg:hidden flex justify-end items-center">
        <Hamburger
          color="white"
          rounded
          size={26}
          toggled={isOpen}
          toggle={setIsOpen}
        />
        <Drawer
          open={isOpen}
          onClose={() => setIsOpen(false)}
          direction="right"
          className="drawer"
          style={{ background: "#1c2222" }}
        >
          <div className="flex flex-col justify-center items-center">
            {/* ===> top bar */}
            <div className="w-full flex justify-between items-center p-8">
              {/* ===> logo */}
              <div className="w-[155px] h-[60px] relative">
                <Image
                  src="/assets/logo.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <RxCross2
                onClick={() => setIsOpen(false)}
                className="text-[43px] text-th-brand "
              />
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header2;
