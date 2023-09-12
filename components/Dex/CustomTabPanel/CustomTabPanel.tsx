import React, { useState } from "react";
import OpenOrders from "./TabsComponent/OpenOrders";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function BasicTabs() {
  // states ----------------------->
  const [activeTab, setActiveTab] = useState([
    {
      active: true,
      name: "open orders",
    },
    {
      active: false,
      name: "Recent Trade History",
    },
    {
      active: false,
      name: "Balances",
    },
    {
      active: false,
      name: "Fee discounts",
    },
  ]);
  const [shopOnlyThisMarket, setShopOnlyThisMarket] = useState(false);

  // states ends here ---------------->

  // methods ------------------->

  const handleToggleTab = (selectedTab: number) => {
    setActiveTab((prevTabs) =>
      prevTabs.map((tab, index) => {
        if (index === selectedTab) {
          return { ...tab, active: true };
        } else {
          return { ...tab, active: false };
        }
      })
    );
  };

  // methods ends here --------------->

  return (
    <div className="w-full flex flex-col justify-between items-center bg-[#121616] mt-4 p-5 rounded-md mb-16">
      <div className="w-full flex justify-between items-center">
        {/* tabs portion ------> */}
        <div className="flex justify-center items-center gap-10">
          {activeTab.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleToggleTab(index)}
                className={`text-base  font-inter capitalize  tracking-wide ${
                  item.active
                    ? "border-b-[3px] h-[37px] border-[#FF810A] text-[#FF810A] font-medium "
                    : "text-[#676767] font-medium"
                } `}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {/* shop only this market filter -------->  */}
        <div className="">
          <FormControlLabel
            control={
              <Checkbox
                size="small"
                checked={shopOnlyThisMarket}
                onChange={(e: any) => setShopOnlyThisMarket(e.target.checked)}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fill: "#ff810a",
                  },
                }}
              />
            }
            label="Show only this market"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
                fontWeight: 500,
                color: "#676767",
              },
            }}
          />
        </div>
      </div>
      {/* tabs component --------> */}
      {activeTab[0].active && <OpenOrders />}
    </div>
  );
}
