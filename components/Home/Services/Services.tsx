import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";
import Image from "next/image";
import Card from "./Card";

const Services = () => {
  return (
    <Wrapper style="bg-th-bkg-2 py-10">
      <div className="w-full flex flex-col gap-6 md:gap-14 justify-center items-center">
        <p className="text-[34px] md:text-[56px] font-bold font-inter text-th-brand">
          Roadmap
        </p>
        {/* ===> card */}
        <div className="w-full xl:w-[82%] grid gap-6 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {servicesData.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.img}
                title={item.title}
                des={item.des}
                btnText={item.btnText}
              />
            );
          })}
        </div>
        <div className="w-full xl:w-[82%] grid gap-6 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div>
        <p className="text-[#757575] text-center text-[14px] font-normal">
          The Solape team reserves the right to adjust the roadmap based on the
          changing market <br /> conditions and the overal industry landscape.
        </p>
      </div>
    </Wrapper>
  );
};

const servicesData = [
  {
    img: "/assets/apiAccess.svg",
    title: "API Access",
    des: " Looking to get access to our custom Solape API? Need a marke feed to implement into your up-and-coming DAPP?",
    btnText: "request access",
  },
  {
    img: "/assets/apiAccess.svg",
    title: "charting",
    des: "Solape offers extensive charting tools on-site, as well as an external service for integration purposes.",
    btnText: "request access",
  },
  {
    img: "/assets/apiAccess.svg",
    title: "listing",
    des: "Want us to list your project? Adding custom markets is allowed by default, but verified listings put you in a more prominent spot.",
    btnText: "submit request",
  },
];

export default Services;
