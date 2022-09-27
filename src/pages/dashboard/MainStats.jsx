import React from "react";
import { Icon } from "@iconify/react";

export default function MainStats() {
  return (
    // Main Stats Container
    <div className="flex flex-col items-center md:flex-row md:justify-around h-2/3 mt-4">
      {/* Virtual Assets Stats */}
      <div className="stat-card mt-2">
        {/* Icon - Title */}
        <div className="flex flex-row items-center">
          <Icon className="stat-icon" icon="bxs:bank" />
          <h2 className="stat-title">Virtual Assets</h2>
        </div>
        {/* End Icon - Title */}
        {/* Main Text */}
        <h1 className="stat-figure">100,000.00</h1>
        {/* Button */}
        <button className="stat-btn">VIEW DETAILS</button>
      </div>
      {/* End Virtual Assets Stats */}

      {/* Cash In Stats */}
      <div className="stat-card mt-2">
        {/* Icon - Title */}
        <div className="flex flex-row items-center">
          <Icon className="stat-icon" icon="mdi:cash-plus" />
          <h2 className="stat-title">Cash In</h2>
        </div>
        {/* End Icon - Title */}
        {/* Main Text */}
        <h1 className="stat-figure">35,557.00</h1>
        {/* Button */}
        <button className="stat-btn">VIEW DETAILS</button>
      </div>
      {/* End Cash In Stats */}

      {/* Virtual Assets Stats */}
      <div className="stat-card mt-2">
        {/* Icon - Title */}
        <div className="flex flex-row items-center">
          <Icon className="stat-icon" icon="mdi:cash-minus" />
          <h2 className="stat-title">Cash Out</h2>
        </div>
        {/* End Icon - Title */}
        {/* Main Text */}
        <h1 className="stat-figure">57,500.00</h1>
        {/* Button */}
        <button className="stat-btn">VIEW DETAILS</button>
      </div>
      {/* End Virtual Assets Stats */}
    </div>
    // End Stat Contener
  );
}
