import { Tooltip } from "antd";
import React from "react";
// import { AreaChart, XAxis, YAxis, CartesianGrid, Area } from "recharts";
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from "recharts";

// export const AreaChatComp = ({ data, width, height }) => {
//   return (
//     <AreaChart width={width} height={height} data={data}>
//       <defs>
//         <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="5%" stopColor="#19B360" stopOpacity={0.8} />
//           <stop offset="95%" stopColor="#19B360" stopOpacity={0} />
//         </linearGradient>
//       </defs>
//       <XAxis dataKey="name" />
//       <YAxis />
//       <CartesianGrid strokeDasharray="3 3" />
//       <Tooltip />

//       <Area
//         type="monotone"
//         dataKey="customer"
//         stroke="#19B360"
//         fillOpacity={1}
//         fill="url(#colorPv)"
//       />
//     </AreaChart>
//   );
// };

export const AreaChatComp = (data, width, height) => {
  return (
    <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey={"pending"}
        stroke="#FFAE0E"
        strokeWidth={2}
      />
      <Line type="monotone" dataKey={"paid"} stroke="#19B360" strokeWidth={2} />
    </LineChart>
  );
};
