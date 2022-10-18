import React from "react";
import AdminNavbar from "../../dashboard/admin/AdminNavbar";
import AdminSidebar from "../../dashboard/admin/AdminSidebar";
import Transaction from "../../dashboard/admin/Transaction";
import MembersDelete from "./MembersDelete";

export default function Delete() {
  return (
    <div>
      <div className="flex w-screen h-screen">
        <div className="bg-primary  h-full">
          <AdminSidebar />
        </div>
        <div className="w-screen h-full overflow-scroll">
          <AdminNavbar />
          <div>
            <MembersDelete />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}
