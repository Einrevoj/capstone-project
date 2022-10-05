import React from "react";

export default function CStats() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-around h-2/3 mt-4">
      {/* Pending Tranx Stats */}
      <div className="stat-card mt-2">
        <h2 className="stat-title font-bold text-center">
          Pending <br /> Transactions Today
        </h2>

        {/* Main Text */}
        <h1 className="stat-figure mb-10 text-5xl">300</h1>
      </div>
      {/* End Pending Trans Stats */}

      {/* Confirmed Stats */}
      <div className="stat-card mt-2">
        <h2 className="stat-title font-bold text-center">
          Confirmed <br /> Transactions Today
        </h2>

        {/* Main Text */}
        <h1 className="stat-figure mb-10 text-5xl">557</h1>
      </div>
      {/* End Confirmed Stats */}

      {/* Virtual Assets Stats */}
      <div className="stat-card mt-2">
        <h2 className="stat-title font-bold text-center">
          Total Transactions <br /> Requests
        </h2>

        {/* Main Text */}
        <h1 className="stat-figure mb-10 text-5xl">7737</h1>
      </div>
    </div>
  );
}
