import React from "react";
import { Icon } from "@iconify/react";

export default function AdminStats() {
  return (
    // Main Stats Container
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-around h-2/3 mt-4">
        {/* Virtual Assets Stats */}
        <div className="stat-card mt-2">
          {/* Icon - Title */}
          <div className="flex flex-row items-center">
            <Icon className="stat-icon text-[70px]" icon="mdi:cash-plus" />
            <h2 className="stat-title font-bold">VAC Net Profit</h2>
          </div>
          {/* End Icon - Title */}
          {/* Main Text */}
          <h1 className="stat-figure mb-10 text-5xl">35,557.00</h1>
        </div>
        {/* End Virtual Assets Stats */}

        {/* Cash In Stats */}
        <div className="stat-card mt-2">
          {/* Icon - Title */}
          <div className="flex flex-row items-center">
            <Icon className="stat-icon text-[70px]" icon="mdi:cash-plus" />
            <h2 className="stat-title font-bold">Total Income</h2>
          </div>
          {/* End Icon - Title */}
          {/* Main Text */}
          <h1 className="stat-figure mb-10 text-5xl">35,557.00</h1>
        </div>
        {/* End Cash In Stats */}

        {/* Virtual Assets Stats */}
        <div className="stat-card mt-2">
          {/* Icon - Title */}
          <div className="flex flex-row items-center">
            <Icon className="stat-icon text-[70px]" icon="mdi:cash-minus" />
            <h2 className="stat-title font-bold">Total Expenses</h2>
          </div>
          {/* End Icon - Title */}
          {/* Main Text */}
          <h1 className="stat-figure mb-10 text-5xl">57,500.00</h1>
        </div>
        {/* End Virtual Assets Stats */}
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-around h-2/3 mt-4">
        {/* Virtual Assets Stats */}
        <div className="stat-card mt-2">
          {/* Icon - Title */}
          <div className="flex flex-row items-center">
            <Icon
              className="stat-icon text-[70px]"
              icon="fa6-solid:money-bill-trend-up"
            />
            <h2 className="stat-title font-bold">
              Revolving <br />
              Investments
            </h2>
          </div>
          {/* End Icon - Title */}
          {/* Main Text */}
          <h1 className="stat-figure mb-10 text-5xl">2,534,981</h1>
        </div>
        {/* End Virtual Assets Stats */}

        {/* Cash In Stats */}
        <div className="stat-card mt-2">
          {/* Icon - Title */}
          <div className="flex flex-row items-center">
            <Icon className="stat-icon text-[70px]" icon="bxs:bank" />
            <h2 className="stat-title font-bold">Total Virtual Assets</h2>
          </div>
          {/* End Icon - Title */}
          {/* Main Text */}
          <h1 className="stat-figure mb-10 text-5xl">3,540,424</h1>
        </div>
        {/* End Cash In Stats */}

        {/* Virtual Assets Stats */}
        <div className="stat-card mt-2">
          {/* Icon - Title */}
          <div className="flex flex-row items-center">
            <Icon
              className="stat-icon text-[70px]"
              icon="ant-design:gift-filled"
            />
            <h2 className="stat-title font-bold">Divideds</h2>
          </div>
          {/* End Icon - Title */}
          {/* Main Text */}
          <h1 className="stat-figure mb-10 text-5xl">780,500.00</h1>
        </div>
        {/* End Virtual Assets Stats */}
      </div>
      {/* End Stat Contener */}
    </>
  );
}
