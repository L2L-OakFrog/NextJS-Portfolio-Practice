// CoreValues.tsx
'use client';
import React from 'react';
import { FaShieldAlt, FaBolt, FaLightbulb, FaUsers } from 'react-icons/fa';

export const CoreValues = () => {
  const values = [
    {
      icon: <FaShieldAlt className="text-blue-400 text-xl" />,
      title: "High Transparency",
      description: "Clear reporting and honest communication in all our dealings"
    },
    {
      icon: <FaBolt className="text-yellow-400 text-xl" />,
      title: "Efficiency",
      description: "Optimized processes that deliver maximum results with minimal waste"
    },
    {
      icon: <FaLightbulb className="text-purple-400 text-xl" />,
      title: "Innovation",
      description: "Continually evolving our methods with cutting-edge technology"
    },
    {
      icon: <FaUsers className="text-green-400 text-xl" />,
      title: "Customer Focus",
      description: "Tailored solutions that address each client's unique needs"
    }
  ];

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {values.map((value, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1">
              {value.icon}
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base">{value.title}</h4>
              <p className="text-xs sm:text-sm opacity-80">{value.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoreValues;