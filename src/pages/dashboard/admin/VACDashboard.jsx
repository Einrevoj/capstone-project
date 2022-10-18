import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import AdminStats from "./AdminStats";
import Report from "./Report";

export default function VACDashboard() {
  return (
    // Main Container FullPage
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <AdminSidebar />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <AdminNavbar />
          <div>
            <AdminStats />
            <Report />
          </div>
        </div>
      </div>
    </div>
  );
}
