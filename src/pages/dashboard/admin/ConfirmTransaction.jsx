import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";
import CStats from "./CStats";
import CTransaction from "./CTransaction";

export default function ConfirmTransaction() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <AdminSidebar />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <AdminNavbar />
          <div>
            <CStats />
            <CTransaction />
          </div>
        </div>
      </div>
    </div>
  );
}
