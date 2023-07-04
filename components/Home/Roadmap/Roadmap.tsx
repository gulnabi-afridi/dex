import React from "react";
import Wrapper from "@/components/shared/ComponentWrapper/Wrapepr";

const Roadmap = () => {
  return (
    <Wrapper style="bg-th-bkg-2 py-10">
      <div className="w-full flex flex-col gap-6 md:gap-14 justify-center items-center">
        <p className="text-[34px] md:text-[56px] font-bold font-inter text-th-brand">
          Roadmap
        </p>
        <div className="w-full xl:w-[82%] grid gap-6 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {roadmapData.map((item, index) => {
            return (
              <div className="w-full h-full min-h-[292px] flex justify-center items-center">
                <div
                  key={index}
                  className={`w-full h-full sm:max-w-[260px] py-6 ${
                    item.current
                      ? "bg-[#2e3838] border-[4px] border-th-gradient-1 relative"
                      : "bg-[#1c2222] "
                  } flex flex-col gap-3 rounded-[30px]`}
                >
                  {/* ==> question */}
                  <p className="uppercase text-center text-th-brand text-[24px] font-semibold font-inter">
                    {item.question}
                  </p>
                  {/* list */}
                  <ul className="list-disc px-10">
                    {item.list.map((list, index) => {
                      return (
                        <li
                          key={index}
                          className="capitalize text-th-brand font-inter text-[16px] font-thin"
                        >
                          {list}
                        </li>
                      );
                    })}
                  </ul>
                  {/* ===> current tag */}
                  {item.current && (
                    <div className="w-[120px] h-[40px] flex justify-center items-center rounded-[50px] absolute bg-th-gradient-1 -bottom-[18px] left-[25%]">
                      <p className="uppercase leading-0 text-[16px] text-th-brand font-inter font-[600]">
                        current
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[#757575] text-center text-[14px] font-normal">
          The Solape team reserves the right to adjust the roadmap based on the
          changing market <br /> conditions and the overal industry landscape.
        </p>
      </div>
    </Wrapper>
  );
};

const roadmapData = [
  {
    question: "Q2 2021",
    list: [
      "Dex launch",
      "$SOLAPE Token",
      "Mainnet",
      " Price API Integration",
      "Margin Trading (ApeXLeverage)",
      "Token data on CoinGecko, FTX, CoinMarketCap",
    ],
    current: false,
  },
  {
    question: "Q3 2021",
    list: [
      "DEX v2 Launch",
      "Swap App",
      "DEX Market orders",
      "NFT Storefront launched ",
      "Ecosystem buybacks",
    ],
    current: true,
  },
  {
    question: "Q4 2021",
    list: [
      "Token Minting",
      "PERP contracts",
      "NFT Marketplace",
      "Ecosystem buybacks ",
    ],
    current: false,
  },
  {
    question: "Q1 2021",
    list: ["Other dex tools: DCA", "Games", "Next NFT launch or NFT perks"],
    current: false,
  },
];

export default Roadmap;
