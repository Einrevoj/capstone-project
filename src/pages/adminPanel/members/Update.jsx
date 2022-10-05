import React from "react";
import AdminNavbar from "../AdminNavbar";
import AdminSidebar from "../AdminSidebar";
import Transaction from "../Transaction";
import MembersUpdate from "./MembersUpdate";

export default function Update() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <AdminSidebar />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <AdminNavbar />
          <div>
            <MembersUpdate />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}
