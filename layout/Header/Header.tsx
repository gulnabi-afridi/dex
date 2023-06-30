import React, { useState } from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Link from "next/link";
import OutlineButton from "@/components/shared/Buttons/OutlineButton";
import { BsLightningCharge } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { Data } from "../../data/JSON";

// ====> import for drawer and humburger
import { Spin as Hamburger } from "hamburger-react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="w-full h-[100px] flex justify-between items-center">
        {/* logo */}
        <div className="w-[140px] h-[60px] relative">
          <Image
            src="/assets/logo.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        {/* links */}
        <div className="hidden lg:flex justify-center items-center gap-12">
          {Data.navibar.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className="text-white-main hover:text-primary capitalize text-[16px] font-inter relative"
              >
                {item.name}
                {/* dot */}
                {item.dot && (
                  <div className="w-[7px] h-[7px] bg-primary absolute rounded-full top-0 -right-2"></div>
                )}
              </Link>
            );
          })}
        </div>
        {/* button */}
        <OutlineButton
          text="Launch app"
          isIcon={true}
          style="w-[140px] h-[44px] border-white hover:text-primary hover:border-primary group hidden lg:flex"
          icon=<BsLightningCharge className="text-[20px] text-white-main group-hover:text-primary" />
        />

        {/* ====> hamburger + drawer for small screen */}
        <div className="lg:hidden flex justify-end items-center">
          <Hamburger
            color="white"
            rounded
            size={34}
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
              {/* =========>top bar */}
              <div className="w-full flex flex-col gap-8 justify-center items-center bg-black-main p-8">
                <div className="w-full flex justify-between items-center ">
                  {/* ===> logo */}
                  <div className="w-[155px] h-[60px] relative">
                    <Image
                      src="/assets/logo.png"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <RxCross2
                    onClick={() => setIsOpen(false)}
                    className="text-[43px] text-white-main "
                  />
                </div>
                {/* button */}
                <OutlineButton
                  text="Launch app"
                  isIcon={true}
                  style="w-full sm:w-[200px] text-[28px] h-[63px] sm:h-[60px] border-white hover:text-primary hover:border-primary group"
                  icon=<BsLightningCharge className="text-[28px] text-white-main group-hover:text-primary" />
                />
              </div>
              {/* links */}
              <div className="w-full flex flex-col p-8 gap-6">
                {Data.navibar.map((item, index) => {
                  return (
                    <Link
                      href={item.path}
                      key={index}
                      className="capitalize text-white-main text-[36px] font-normal"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
