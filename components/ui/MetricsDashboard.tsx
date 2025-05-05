"use client";
import React, { useState } from "react";
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
  LineChart,
  Line,
  Dot,
} from "recharts";

type MetricData = {
  name: string;
  value: number;
  unit?: string;
  color?: string;
};

type ServiceData = {
  service: string;
  metrics: MetricData[];
  chartType: "bar" | "line" | "pie";
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"];

const CustomDot = (props: any) => {
  const { cx, cy } = props;
  return <Dot cx={cx} cy={cy} r={4} fill="#8884d8" stroke="#fff" strokeWidth={1} />;
};

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
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
      className="text-[10px] font-bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const MetricsDashboard = ({
  services,
  title,
  description,
}: {
  services: ServiceData[];
  title: string;
  description: string;
}) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const renderChart = (service: ServiceData) => {
    switch (service.chartType) {
      case "pie":
        return (
          <PieChart>
            <Pie
              data={service.metrics}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={window.innerWidth < 640 ? 50 : 60}
              fill="#8884d8"
              dataKey="value"
            >
              {service.metrics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}${service.metrics[0]?.unit || ""}`, "Value"]}
              contentStyle={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: '#ffffff', // Explicitly set white text color
                border: '1px solid #333' // Add border for better visibility
              }}
              itemStyle={{
                color: 'rgb(136, 132, 216)' // Ensure items in tooltip are white
              }}
            />
            <Legend 
              wrapperStyle={{
                fontSize: '12px',
                paddingTop: '8px',
                color: '#ffffff' // Ensure legend text is visible
              }}
            />
          </PieChart>
        );
      case "line":
        return (
          <LineChart
            data={service.metrics}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="2 2" opacity={0.1} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 10 }}
              tickMargin={4}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              tickMargin={4}
            />
            <Tooltip
              formatter={(value) => [`${value}${service.metrics[0]?.unit || ""}`, "Value"]}
              contentStyle={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              strokeWidth={2}
              dot={<CustomDot />}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        );
      case "bar":
        return (
          <BarChart
            data={service.metrics}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="2 2" opacity={0.1} />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 10 }}
              tickMargin={4}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              tickMargin={4}
            />
            <Tooltip
              formatter={(value) => [`${value}${service.metrics[0]?.unit || ""}`, "Value"]}
              contentStyle={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
              }}
            />
            <Bar dataKey="value" fill="#8884d8" barSize={20}>
              {service.metrics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        );
        default:
        return (
            <BarChart
            data={service.metrics}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            layout="vertical" // Makes bars horizontal like your example
            >
            <CartesianGrid strokeDasharray="2 2" opacity={0.1} horizontal={false} />
            <XAxis 
                type="number" 
                tick={{ fontSize: 10 }}
                tickMargin={4}
                axisLine={false}
                tickLine={false}
            />
            <YAxis 
                dataKey="name"
                type="category"
                tick={{ fontSize: 10 }}
                tickMargin={4}
                axisLine={false}
                tickLine={false}
                width={80} // Give more space for metric names
            />
            <Tooltip
                formatter={(value) => [`${value}${service.metrics[0]?.unit || ""}`, "Value"]}
                contentStyle={{
                fontSize: '12px',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: 'rgba(0, 0, 0, 0.8)'
                }}
            />
            <Bar 
                dataKey="value" 
                fill="#8884d8" 
                barSize={15}
                radius={[0, 4, 4, 0]} // Rounded corners on the right side
            >
                {service.metrics.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                ))}
            </Bar>
            </BarChart>
        );
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="text-center mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-blue-400">{title}</h3>
        <p className="text-xs sm:text-sm opacity-80">{description}</p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.service}
            className={`bg-black/30 py-3 rounded-lg transition-all duration-200 ${
              hoveredService === service.service ? "ring-1 ring-blue-400 sm:scale-[1.02]" : ""
            }`}
            onMouseEnter={() => setHoveredService(service.service)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <h4 className="font-bold text-center mb-2 text-sm sm:text-base">
              {service.service}
            </h4>
            <div className="h-40 sm:h-48">
              <ResponsiveContainer width="100%" height="100%">
                {renderChart(service)}
              </ResponsiveContainer>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {service.metrics.map((metric) => (
                <div
                  key={metric.name}
                  className="bg-black/40 p-1 sm:p-2 rounded text-center"
                >
                  <div className="font-bold text-xs sm:text-sm">
                    {metric.value}
                    {metric.unit}
                  </div>
                  <div className="text-[10px] sm:text-xs opacity-80">{metric.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};