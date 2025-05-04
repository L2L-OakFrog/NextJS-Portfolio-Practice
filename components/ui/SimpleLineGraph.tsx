"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
} from "recharts";

const data = [
  { x: 10, y: 20 },
  { x: 20, y: 45 },
  { x: 30, y: 80 },
  { x: 40, y: 120 },
  { x: 50, y: 150 },
  { x: 60, y: 160 },
  { x: 70, y: 140 },
  { x: 80, y: 110 },
  { x: 90, y: 70 },
  { x: 100, y: 30 },
];

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props;
  return (
    <Dot
      cx={cx}
      cy={cy}
      r={6}
      fill="#8884d8"
      stroke="#fff"
      strokeWidth={2}
    />
  );
};

export const SimpleLineGraph = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
          <XAxis 
            dataKey="x" 
            label={{ value: "X Axis", position: "insideBottomRight", offset: -10 }}
            ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />
          <YAxis 
            label={{ value: "Y Axis", angle: -90, position: "insideLeft" }}
            domain={[0, 200]}
            ticks={[0, 40, 80, 120, 160, 200]}
          />
          <Tooltip 
            formatter={(value) => [`${value}`, "Value"]}
            labelFormatter={(label) => `X: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#8884d8"
            strokeWidth={3}
            dot={<CustomDot />}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};