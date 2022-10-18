import React from "react";
import { Icon } from "@iconify/react";

export default function AdminMembersStats() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-around h-2/3 mt-4">
      {/* members Stats */}
      <div className="stat-card mt-2">
        {/* Icon - Title */}
        <div className="flex flex-row items-center">
          <Icon className="stat-icon text-[70px]" icon="fa:group" />
          <h2 className="stat-title font-bold">Total Members</h2>
        </div>
        {/* End Icon - Title */}
        {/* Main Text */}
        <h1 className="stat-figure mb-10 text-5xl">15,324</h1>
      </div>
      {/* End members Stats */}

      {/* Active members Stats */}
      <div className="stat-card mt-2">
        {/* Icon - Title */}
        <div className="flex flex-row items-center">
          <Icon className="stat-icon text-[70px]" icon="fa:group" />
          <h2 className="stat-title font-bold">
            Total Active <br /> Members
          </h2>
        </div>
        {/* End Icon - Title */}
        {/* Main Text */}
        <h1 className="stat-figure mb-10 text-5xl">14,224</h1>
      </div>
      {/* End Active members Stats */}

      {/* Inactive members Stats */}
      <div className="stat-card mt-2">
        {/* Icon - Title */}
        <div className="flex flex-row items-center">
          <Icon className="stat-icon text-[70px]" icon="fa:group" />
          <h2 className="stat-title font-bold">
            Total Inactive <br /> Members
          </h2>
        </div>
        {/* End Icon - Title */}
        {/* Main Text */}
        <h1 className="stat-figure mb-10 text-5xl">1,100</h1>
      </div>
      {/* End Inactive members Stats */}
    </div>
  );
}
