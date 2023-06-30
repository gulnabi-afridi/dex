import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Wrapper>
      <div className="w-full grid grid-cols-6">
        {/* 1st col */}
        <div className="col-span-2 gap-3 w-full flex flex-col items-start">
          {/* logo */}
          <Link href="/" className="w-[140px] h-[60px] relative">
            <Image
              src="/assets/logo.png"
              alt=""
              fill
              className="object-contain"
            />
          </Link>
          <p className="text-white-main font-inter text-[16px] font-normal ">
            A serum-based Solana DEX built <br /> by apes, for other apes.
          </p>
          <p className="text-white-main uppercase font-inter text-[16px] font-normal ">
            APES. TOGETHER. STRONG.
          </p>
        </div>
        {footerData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-3 items-start ">
              {/* type */}
              <p className="text-[16px] font-inter font-semibold text-white-main">
                Products
              </p>
              {/* links */}
              {item.links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.path}
                    className="capitalize text-[16px] hover:text-primary font-inter text-white-main font-thin"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const footerData = [
  {
    type: "Products",
    links: [
      {
        name: "DEX",
        path: "#",
      },
      {
        name: "swap",
        path: "#",
      },
      {
        name: "Leverage",
        path: "#",
      },
      {
        name: "API",
        path: "#",
      },
    ],
  },
  {
    type: "Support",
    links: [
      {
        name: "Request listing",
        path: "#",
      },
      {
        name: "Guides",
        path: "#",
      },
      {
        name: "Contact",
        path: "#",
      },
    ],
  },
  {
    type: "$SOLAPE",
    links: [
      {
        name: "Request listing",
        path: "#",
      },
      {
        name: "Buy/Sell",
        path: "#",
      },
      {
        name: "Metrics",
        path: "#",
      },
      {
        name: "Coingecko",
        path: "#",
      },
      {
        name: "Coinmarketcap",
        path: "#",
      },
    ],
  },
  {
    type: "Community",
    links: [
      {
        name: "Telegram",
        path: "#",
      },
      {
        name: "Twitter",
        path: "#",
      },
      {
        name: "Discord",
        path: "#",
      },
      {
        name: "Discord",
        path: "#",
      },
    ],
  },
];

export default Footer;
