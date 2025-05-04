"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"];

const mcaData = [
  { name: "Conversion Rate", value: 94 },
  { name: "Funded Amount", value: 5.8, unit: "M" },
  { name: "Deals/Month", value: 7 },
];

const solarData = [
  { name: "Conversion Rate", value: 78 },
  { name: "Leads Generated", value: 450 },
];

const homeImprovementData = [
  { name: "Conversion Rate", value: 65 },
  { name: "Projects", value: 320 },
];

const industryData = [
  { name: "MCA Financing", value: 94 },
  { name: "Solar Energy", value: 78 },
  { name: "Home Improvement", value: 65 },
  { name: "LED Lighting", value: 85 },
  { name: "Air Duct Cleaning", value: 75 },
  { name: "MEP Services", value: 89 },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const SuccessMetrics = () => {
  return (
    <div className="w-full space-y-8">
      {/* Industry Comparison Pie Chart */}
      <div className="bg-black/30 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-center mb-4 text-blue-400">
          Industry Conversion Rates
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={industryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {industryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, "Conversion Rate"]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* MCA Financing Bar Chart */}
        <div className="bg-black/30 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-4 text-yellow-400">
            MCA Financing
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mcaData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis type="number" />
                <YAxis
                  dataKey="name"
                  type="category"
                  scale="band"
                  width={80}
                />
                <Tooltip
                  formatter={(value, name, props) => {
                    const unit = props.payload.unit || "";
                    return [`${value}${unit}`, name];
                  }}
                />
                <Bar dataKey="value" fill="#FFBB28" barSize={30}>
                  {mcaData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Solar Energy Bar Chart */}
        <div className="bg-black/30 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-center mb-4 text-yellow-400">
            Solar Energy
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={solarData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis type="number" />
                <YAxis
                  dataKey="name"
                  type="category"
                  scale="band"
                  width={80}
                />
                <Tooltip />
                <Bar dataKey="value" fill="#00C49F" barSize={30}>
                  {solarData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[(index + 2) % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Home Improvement Bar Chart */}
      <div className="bg-black/30 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-center mb-4 text-green-400">
          Home Improvement
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={homeImprovementData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#82CA9D" barSize={30}>
                {homeImprovementData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[(index + 4) % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};