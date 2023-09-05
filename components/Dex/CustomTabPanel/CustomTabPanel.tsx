import React, { useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
        {value === 0 && <p className="text-white text-[30px]">one</p>}
        {value === 1 && <p className="text-white text-[30px]">two</p>}
        {value === 2 && <p className="text-white text-[30px]">three</p>}
      </Box>
    </>
  );
}
