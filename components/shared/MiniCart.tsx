import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

// interface Props {
//   data: {}[];
//   dataKey: string;
// }

const data = [
  {
    name: "price 1",
    value: 722,
  },
  {
    name: "price 2",
    value: 330,
  },
  {
    name: "price 2",
    value: 1330,
  },
  {
    name: "price 2",
    value: 830,
  },
  {
    name: "price 2",
    value: 1430,
  },
  {
    name: "price 2",
    value: 2030,
  },
  {
    name: "price 2",
    value: 1470,
  },
  {
    name: "price 2",
    value: 1090,
  },
  {
    name: "price 2",
    value: 1890,
  },
  {
    name: "price 2",
    value: 1990,
  },
  {
    name: "price 2",
    value: 890,
  },
  {
    name: "price 2",
    value: 1090,
  },
  {
    name: "price 2",
    value: 1460,
  },
];

const MiniChart: React.FC = () => {
  return (
    <div className="w-full h-[calc(320px-180px)]">
      <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          width={200}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area
            type="monotone"
            dataKey="value"
            stroke="#ff9735"
            strokeWidth={3}
            fill="#603e1b"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MiniChart;
