import React from "react";
import DashboardNav from "../DashboardNav";
import MemberStats from "../members/MemberStat";
import MemberProfile from "../members/MemberProfile";
import MemberSidePanel from "../members/MemberSidePanel";

export default function MainDashboard() {
  return (
    // Main Container FullPage
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <MemberSidePanel />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <DashboardNav />
          {/* Insert If here, check what is the Active Nav-Button (HOME,WALLET,ACTIVITIES,FORMS) */}
          {/* This is for Home Button */}
          <div>
            <MemberStats />
            <MemberProfile />
          </div>
          {/* end of Home */}

          {/* Wallet Here */}
          {/* Activities */}
          {/* Forms */}
        </div>
      </div>
    </div>
  );
}
