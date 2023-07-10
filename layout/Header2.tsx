import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FillButton from "@/components/shared/Buttons/FillButton";
import { LuChevronDown } from "react-icons/lu";
import { Data } from "@/data/JSON";

// ====> import for drawer and humburger
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header2 = () => {
  const Router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <div className="w-[40px] h-[40px] bg-th-gradient-1 rounded-full flex justify-center items-center">
            <Image src="/assets/logo2.svg" width={24} height={24} alt="" />
          </div>
          <LuChevronDown className="text-th-brand text-[24px]" />
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
        ></Drawer>
      </div>
    </div>
  );
};

export default Header2;
