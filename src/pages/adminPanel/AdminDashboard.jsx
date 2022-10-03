import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import DashboardStats from "./DashboardStats";
import Transaction from "./Transaction";

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <AdminSidebar />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <AdminNavbar />
          <div>
            <DashboardStats />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}
