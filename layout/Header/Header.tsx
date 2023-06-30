import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
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
        <div className="flex justify-center items-center gap-10">
          {links.map((item, index) => {
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
      </div>
    </Wrapper>
  );
};

const links = [
  {
    name: "trade",
    path: "#",
    dot: false,
  },
  {
    name: "swap",
    path: "#",
    dot: true,
  },
  {
    name: "listings",
    path: "#",
    dot: false,
  },
  {
    name: "Leverage",
    path: "#",
    dot: false,
  },
  {
    name: "Buy $SOLAPE",
    path: "#",
    dot: false,
  },
];

export default Header;
